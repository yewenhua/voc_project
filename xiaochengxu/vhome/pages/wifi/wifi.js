// pages/wifi/wifi.js
var app = getApp();
var client = null;
var hasload = false;
Page({

  /**
   * 页面的初始数据
   */
  data: {
      msg: '',
      open: false,
      txtStyle: '',
      startY: '',
      audiosrc: 'https://share.voc.so/open.mp3',
      audioCtx: null,
      islogin: true,
      isCanShare: true,
      key: '',
      card: '',
      hasInit: false,
      share: '',
      access_token: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that = this;
      that.setData({
          key: options.key ? options.key : '',
          card: options.card ? options.card : '',
          share: options.share ? options.share : '',
          access_token: options.tk ? options.tk : ''
      });

      if (options.share) {
          if (that.data.key != '' && that.data.card != '' && that.data.access_token != '') {
              that.shareOpen(function () {
                  that.setData({
                      islogin: true,
                      hasInit: true,
                      isCanShare: false
                  });

                  that.mqtt(function () {
                      hasload = true;
                  });
              });
          }
          else {
              wx.redirectTo({
                  url: '../list/list'
              });
          }
      }
      else{
            app.checkLogin(function () {
                if (that.data.key != '' && that.data.card != '') {
                    that.setData({
                        islogin: true,
                        hasInit: true,
                        isCanShare: true
                    });

                    that.mqtt(function(){
                        hasload = true;
                    });
                }
                else{
                    wx.redirectTo({
                        url: '../list/list'
                    });
                }
            });
      }
  },

  onReady: function () {
      this.audioCtx = wx.createAudioContext('myAudio');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
      if (hasload) {
          if (this.data.share) {

          }
          else {
                app.checkLogin(function () {
                    if (this.data.key != '' && this.data.card != '') {
                        this.setData({
                            islogin: true,
                            hasInit: true
                        });

                        if (client == null){
                            this.mqtt(function () {});
                        }
                    }
                    else{
                        wx.redirectTo({
                            url: '../list/list'
                        });
                    }
                }.bind(this));
          }
      }
  },
  
  // 页面隐藏
  onHide: function () {
      this.close();
  },

  //页面卸载
  onUnload() {
      this.close();
  },
  
  close() {
      client.end();
      client = null;
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
      var that = this;
      if (that.data.isCanShare) {
            var share = Math.floor(Math.random() * 10000);
            var url = '/pages/wifi/wifi?key=' + that.data.key + '&card=' + that.data.card + '&tk=' + that.data.access_token + '&share=' + share;
            return {
                title: '一个小时内有效，只能开一次，快拿去开门吧',
                path: url,
                imageUrl: '../../images/pwd.jpg',
                success: function (res) {
                    // 转发成功
                    that.shareCb(share);
                },
                fail: function (res) {
                    // 转发失败
                }
            }
      }
  },

  shareCb(share) {
      var that = this;
      var url = app.globalData.wxurl + '/voc/sharebegin';
      var param = { access_token: that.data.access_token, share: share };
      var query_param = app.paramToQuery(param);
      url = url + query_param;
      var data = {};
      var action = { header: 'application/x-www-form-urlencoded', method: 'get', url: url };

      app.api(action, data, function (rtn) {
          if (rtn.code != 0) {
              app.showToast('未知错误', '../../images/cry_white.png', 'img');
          }
      });
  },

  shareOpen(cb) {
      var that = this;
      var url = app.globalData.wxurl + '/voc/shareopen';
      var param = { access_token: that.data.access_token, share: that.data.share };
      var query_param = app.paramToQuery(param);
      url = url + query_param;
      var data = {};
      var action = { header: 'application/x-www-form-urlencoded', method: 'get', url: url };

      app.api(action, data, function (rtn) {
          if (rtn.code == 0 && typeof (cb) == 'function') {
              cb();
          }
          else {
              app.showToast('分享已失效', '../../images/cry_white.png', 'img');
              setTimeout(function () {
                  wx.redirectTo({
                      url: '../list/list'
                  });
              }, 1500);
          }
      });
  },

  execute: function(){
      if (client){
          var pubtopic = "/" + this.data.key + "/" + this.data.card + "/update";
          client.publish('/Kcbbt3oPTuvV/W0VtL5ayNaMqyFrt9SYK/update', JSON.stringify({ userId: 123, command: 'open' }));
      }
      else{
          app.showToast('设备未连接', '../../images/cry_white.png', 'img');
      }
  },
  
  touchS: function (e) {
      if (e.touches.length == 1) {
          this.setData({
              //设置触摸起始点水平方向位置  
              startY: e.touches[0].clientY
          });
      }
  },
  touchM: function (e) {
      var that = this;
      that.setData({
          txtStyle: ''
      });

      if (e.touches.length == 1) {
          //手指移动时水平方向位置  
          var moveY = e.touches[0].clientY;
          //手指起始点位置与移动期间的差值  
          var disY = this.data.startY - moveY;
          var dmostHeight = 120;
          var txtStyle = "";
          if (disY == 0 || disY < 0) {//如果移动距离小于等于0，文本层位置不变  
              txtStyle = "bottom:0px";
          } else if (disY > 0) {//移动距离大于0，文本层bottom值等于手指移动距离  
              txtStyle = "bottom:" + disY + "px";
              if (disY >= dmostHeight) {
                  //控制手指移动距离最大值 
                  txtStyle = "bottom:" + dmostHeight + "px";
              }
          }

          //更新列表的状态  
          this.setData({
              txtStyle: txtStyle
          });
      }
  },

  touchE: function (e) {
      if (e.changedTouches.length == 1) {
          //手指移动结束后水平位置  
          var endY = e.changedTouches[0].clientY;
          //触摸开始与结束，手指移动的距离  
          var disY = this.data.startY - endY;
          var dmostHeight = 120;
          //如果距离小于基准的1/2，恢复  
          var txtStyle = disY > dmostHeight / 2 ? "bottom:" + dmostHeight + "px" : "bottom:0px";
          this.setData({
              txtStyle: txtStyle
          });

          if (disY > dmostHeight / 2) {
              //执行开锁动作
              this.setData({
                  open: true
              });
              this.execute();
              this.playMusic();

              setTimeout(function () {
                  this.setData({
                      open: false,
                      txtStyle: "bottom: 0px"
                  });
              }.bind(this), 1200);
          }
      }
  },

  touchHandS: function (e) {
      if (e.touches.length == 1) {
          this.setData({
              //设置触摸起始点水平方向位置  
              startHandY: e.touches[0].clientY
          });
      }
  },
  touchHandM: function (e) {

  },
  touchHandE: function (e) {
      if (e.changedTouches.length == 1) {
          //手指移动结束后水平位置  
          var endHandY = e.changedTouches[0].clientY;
          //触摸开始与结束，手指移动的距离  
          var disHandY = this.data.startHandY - endHandY;
          var dmostHeight = 120;

          if (disHandY < 0) {
              //执行开锁动作
              this.setData({
                  open: true
              });
              this.execute();
              this.playMusic();

              setTimeout(function () {
                  this.setData({
                      open: false,
                  });
              }.bind(this), 1200);
          }
      }
  },

  playMusic: function () {
      this.audioCtx.play();
  },

  mqtt: function (cb) {
      var mqtt = require('../../lib/mqtt.js');
      var subtopic = "/" + this.data.key + "/" + this.data.card + "/get";
      client = mqtt.connect('ws://192.168.6.14:8084/mqtt', {});
      client.on('connect', function () {
          console.log('connect :)');
          client.subscribe(subtopic);
          if (typeof (cb) == 'function') {
              cb();
          }
      });

      client.on('close', function () {
          console.log('close :)');
          client = null;
      });

      client.on("message", function (topic, payload) {
          console.log('收到topic = ' + topic + ' 消息: ' + payload.toString());
      });
  }
})