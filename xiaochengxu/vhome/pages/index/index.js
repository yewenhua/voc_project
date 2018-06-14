var app = getApp();
var hasload = false;
var temp = '';

Page({
   data: {
      hasdata: false,
      loading: false,
      hasbind: false,
      open: false,
      txtStyle: '',
      startY: '',
      audiosrc: 'https://share.voc.so/open.mp3',
      audioCtx: null,
      islogin: false,
      modelName: '',
      share: '',
      isCanShare: true,
      groupid: '',
      access_token: '',
      dbDeviceId: '',
      hasInit: false,

      msg: '',
      deviceId: '',
      connectedDeviceId: '',
      services: '',
      serviceId: '',
      characteristics: '',
      characteristicId: '',
      randomCode: '',
      response: '',
      directive: '',
      requestid: ''
   },
   onReady: function(){
        this.audioCtx = wx.createAudioContext('myAudio');
   },
   onLoad: function (options) {
        var that = this;
        this.setData({
            modelName: options.mid ? options.mid : '',
            share: options.share ? options.share : '',
            dbDeviceId: options.did ? options.did : '',
            groupid: options.gid ? options.gid : '',
            access_token: options.tk ? options.tk : ''
        });

        if (options.share){
            if (this.data.modelName != '' && this.data.groupid != '' && this.data.dbDeviceId != '' && this.data.access_token != '') {
                var that = this;
                that.shareOpen(function(){
                    that.setData({
                        islogin: true,
                        hasInit: true,
                        isCanShare: false
                    });

                    that.init(function () {
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
            var that = this;
            app.checkLogin(function () {
                if (that.data.modelName != '') {
                    that.setData({
                        islogin: true,
                        hasInit: true,
                        isCanShare: true
                    });

                    that.init(function () {
                        hasload = true;
                    });
                }
                else {
                    wx.redirectTo({
                        url: '../list/list'
                    });
                }
            });
        }
   },

   onShow: function(){
       if (hasload){
            if(this.data.share){
                
            }
            else{
                var that = this;
                app.checkLogin(function () {
                    if (that.data.modelName != '') {
                        if (!that.data.hasbind) {
                            that.setData({
                                islogin: true,
                                hasInit: true
                            });

                            that.init(function(){});
                        }
                    }
                    else {
                        wx.redirectTo({
                            url: '../list/list'
                        });
                    }
                });
            }
        }
   },

   onShareAppMessage: function (res) {
       var that = this;
       if (that.data.isCanShare){
            var share = Math.floor(Math.random() * 10000);
            var url = '/pages/index/index?mid=' + that.data.modelName + '&did=' + that.data.dbDeviceId + '&gid=' + that.data.groupid + '&tk=' + that.data.access_token + '&share=' + share;

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

   shareCb(share){
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

   shareOpen(cb){
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
           else{
               app.showToast('分享已失效', '../../images/cry_white.png', 'img');
               setTimeout(function(){
                   wx.redirectTo({
                       url: '../list/list'
                   });
               }, 1500);
           }
       });
   },

   // 页面隐藏
   onHide: function () {
       this.close();
   }, 
   
   //页面卸载
   onUnload(){
       this.close();
   },

   close(){
       var that = this;
       that.stopConn();
       // 关闭蓝牙模块
       wx.closeBluetoothAdapter({
           success: function (res) {
               that.setData({
                   msg: "==>关闭蓝牙模块",
                   hasbind: false,
                   deviceId: '',
                   connectedDeviceId: ''
               });
           }
       });
   },

   // 初始化蓝牙适配器  
   init: function(cb){
      var that = this;
      //初始化适配器
      wx.openBluetoothAdapter({
          success: function (res) {
              if (typeof (cb) == 'function') {
                  cb();
              }

              that.setData({
                  msg: that.data.msg + "==>初始化成功"
              });

              that.discovery();
          },
          fail: function (res) {
              if (typeof (cb) == 'function') {
                  cb();
              }
              app.showToast('请打开蓝牙', '../../images/cry_white.png', 'img');

              var tt = setTimeout(function(){
                  wx.navigateBack({
                      delta: 1
                  });
              }, 1500);
          }
      });
   },

   //搜索设备 
   discovery: function(){
      var that = this;  
      that.setData({
          loading: true,
          hasbind: false
      });
      //开始搜索
      wx.startBluetoothDevicesDiscovery({
          services: ['FFE0'],   //传入这个参数，只搜索主服务 UUID 为 FEE7 的设备
          success: function (res) {
              that.setData({
                  msg: that.data.msg + "==>搜索设备"
              });

              that.listenDevices();
          },
          fail: function (res) {
              app.showToast('搜索设备失败', '../../images/cry_white.png', 'img');
          }
      });
   },

   //监听寻找到新设备的事件
   listenDevices: function(){
      var that = this;  
      wx.onBluetoothDeviceFound(function (res) {
          for (var i = 0; i < res.devices.length; i++){
              if (res.devices[i].name == that.data.modelName || res.devices[i].name == 'BLE_LOW_POW'){
                  that.setData({
                      hasdata: true,
                      deviceId: res.devices[i].deviceId
                  });

                  //发现设备，创建连接
                  that.conn();
              }
          }
      })
   },
  /**
   * 连接成功，后开始获取设备的服务列表
   */
   getServices: function(){
      var that = this; 
      wx.getBLEDeviceServices({
          // 这里的 deviceId 需要在上面的 getBluetoothDevices中获取
          deviceId: that.data.deviceId,
          success: function (res) {
              that.setData({
                  services: res.services
              });

              for (var i = 0; i < res.services.length; i++){
                  if (res.services[i].uuid.indexOf('FFE0') !== -1 || res.services[i].uuid.indexOf('ffe0') !== -1){
                      that.setData({
                          msg: that.data.msg + "==>服务ID：" + res.services[i].uuid,
                          serviceId: res.services[i].uuid
                      });

                      that.getCharacteristics();
                      break;
                  }
              }

              if (that.data.serviceId == ''){
                  app.showToast('没有服务', '../../images/cry_white.png', 'img');
              }
          },
          fail: function (res) {
              app.showToast('获取服务失败', '../../images/cry_white.png', 'img');
          }
      });
   },
   getCharacteristics: function(){
      var that = this; 
      wx.getBLEDeviceCharacteristics({
          deviceId: that.data.deviceId,
          serviceId: that.data.serviceId,
          success: function (res) {
              that.setData({
                  characteristics: res.characteristics
              });

              for (var i = 0; i < res.characteristics.length; i++) {
                  if (res.characteristics[i].uuid.indexOf('FFE1') !== -1 || res.characteristics[i].uuid.indexOf('ffe1') !== -1) {
                      that.setData({
                          msg: that.data.msg + "==>特征值ID：" + res.characteristics[i].uuid,
                          hasbind: true,
                          characteristicId: res.characteristics[i].uuid
                      });
                      app.showToast('配对成功', 'success', 'icon');
                      that.stopDiscovery();
                  }
              }

              wx.notifyBLECharacteristicValueChanged({
                  // 启用 notify 功能
                  deviceId: that.data.deviceId,
                  serviceId: that.data.serviceId,
                  characteristicId: that.data.characteristicId,
                  state: true,
                  success: function(res) {
                      //app.showToast('notify功能', 'success', 'icon');
                  }
              });

              /**
               * 回调获取 设备发过来的数据
               */
              wx.onBLECharacteristicValueChange(function (characteristic) {
                  if (characteristic.characteristicId.indexOf("FFE1") != -1 || characteristic.characteristicId.indexOf("ffe1") != -1) {
                      let hex = Array.prototype.map.call(new Uint8Array(characteristic.value), x => ('00' + x.toString(16)).slice(-2)).join('');

                      if (hex.indexOf("a15200000") != -1 && hex.indexOf("ed01") != -1){
                          //返回开门成功指令
                          app.showToast('开门成功', 'success', 'icon');
                          that.setData({
                              msg: that.data.msg + "==>执行开门结果：" + hex,
                              response: hex
                          });
                          that.sendResult();


                          if(that.data.share){
                              that.setData({
                                  hasbind: false,
                                  connectedDeviceId: "",
                                  share: ''
                              });

                              setTimeout(function(){
                                  wx.redirectTo({
                                      url: '../list/list'
                                  });
                              }, 1000);
                          }
                      }
                      else if (hex != 'a1010000000000000000000000000000000021e0'){
                          if (hex.length != 40){
                              if (temp == ''){
                                  temp = hex;
                              }
                              else{
                                  temp = temp + hex;
                              }

                              if (temp.length == 40){
                                  that.setData({
                                      randomCode: temp,
                                  });
                                  temp = '';
                                  that.getOpenDirective();
                              }
                          }
                          else{
                              that.setData({
                                  msg: that.data.msg + "==>滚动码：" + hex,
                                  randomCode: hex
                              });
                              that.sleep(10);
                              that.getOpenDirective();
                          }
                      }
                  }
              });
          },
          fail: function (res) {
              app.showToast('获取特征值失败', '../../images/cry_white.png', 'img');
          }
      });
   },
   //停止搜索周边设备  
   stopDiscovery: function () {
      var that = this;
      wx.stopBluetoothDevicesDiscovery({
          success: function (res) {
              that.setData({
                  msg: that.data.msg + "==>停止搜索周边设备",
                  loading: false
              })
          }
      })
   },  
   //连接设备 
   conn: function (e){
      var that = this;
      if (that.data.deviceId){
          wx.createBLEConnection({
              deviceId: that.data.deviceId,
              success: function (res) {
                  that.setData({
                      connectedDeviceId: that.data.deviceId
                  });
                  that.getServices();
              },
              fail: function (res) {
                  app.showToast('配对失败', '../../images/cry_white.png', 'img');
              }
          });
      }
      else{
          app.showToast('没有搜索到设备', '../../images/cry_white.png', 'img');
      }
   },
   //断开设备连接  
   stopConn: function () {
      var that = this;
      wx.closeBLEConnection({
          deviceId: that.data.connectedDeviceId,
          success: function (res) {
              app.showToast('设备已断开', 'success', 'icon');

              that.setData({
                  msg: that.data.msg + "==>断开设备连接",
                  hasbind: false,
                  connectedDeviceId: "",
              });
          }
      })
   },  
   getRandomCode: function(){
      var that = this;
      var hex = 'a1010000000000000000000000000000000021e0';
      var typedArray = new Uint8Array(hex.match(/[\da-f]{2}/gi).map(function (h) {
          //解析一个字符串，并返回一个整数
          return parseInt(h, 16);
      }));

      var buffer = typedArray.buffer;

      wx.writeBLECharacteristicValue({
          deviceId: that.data.deviceId,
          serviceId: that.data.serviceId,
          characteristicId: that.data.characteristicId,
          value: buffer,
          success: function (res) {
              that.setData({
                  msg: that.data.msg + "==>指令发送成功"
              });
          },
          fail: function (res) {
              app.showToast('指令发送失败', '../../images/cry_white.png', 'img');
          }
      });
   },
   getOpenDirective: function(){
      var that = this;
      wx.request({
          method: 'post',
          url: app.globalData.baseurl + '/blueLock/execute/' + that.data.groupid + '?access_token=' + that.data.access_token,
          header: {
              'Content-Type': 'application/json'
          },
          data: {
              deviceId: that.data.dbDeviceId,
              command: 'open',
              directive: that.data.randomCode
          },
          success: function (res) {
              if (res.data.type == 'SUCCESS'){
                that.setData({
                    msg: that.data.msg + "==>开门指令：",
                    directive: res.data.data.result,
                    requestid: res.data.data.directiveId
                });
                that.sendOpenDirective()
              }
              else{
                  app.showToast('获取指令出错', '../../images/cry_white.png', 'img');
              }
          },
          fail: function (res) {
              app.showToast('获取指令失败', '../../images/cry_white.png', 'img');
          }
      });
   },
   sendOpenDirective: function () {
      var that = this;
      var hexString = that.data.directive;
      var arr = [];
      for (var i = 0; i < 8; i++) {
          var start = i * 40;
          var end = start + 40;
          var single = hexString.substring(start, end);
          
          this.singleDirective(single, i);
          this.sleep(100);
      }
   },
   singleDirective: function (directive, i) {
      var that = this;
      var hex = directive;
      var typedArray = new Uint8Array(hex.match(/[\da-f]{2}/gi).map(function (h) {
          //解析一个字符串，并返回一个整数
          return parseInt(h, 16);
      }));

      var buffer = typedArray.buffer;

      wx.writeBLECharacteristicValue({
          deviceId: that.data.deviceId,
          serviceId: that.data.serviceId,
          characteristicId: that.data.characteristicId,
          value: buffer,
          success: function (res) {
              that.setData({
                  msg: that.data.msg + "==>开门结果：" + i + "==>" + res.errMsg
              });
          },
          fail: function (res) {
              app.showToast('指令发送失败', '../../images/cry_white.png', 'img');
          }
      });
   },
   sendResult: function () {
      var that = this;
      wx.request({
          method: 'post',
          url: app.globalData.baseurl + '/blueLock/result?access_token=' + that.data.access_token,
          header: {
              'Content-Type': 'application/json'
          },
          data: {
              result: that.data.response,
              directiveId: that.data.requestid
          },
          success: function (res) {
              if (res.data.type == 'SUCCESS') {
                that.setData({
                    msg: "==>上报结果：" + JSON.stringify(res.data.content)
                });
              }
              else{
                  app.showToast('上报结果出错', '../../images/cry_white.png', 'img');
              }
          },
          fail: function (res) {
              app.showToast('指令发送失败', '../../images/cry_white.png', 'img');
          }
      });
   },

   execute: function(){
       var that = this;
       that.getRandomCode();
   },

   sleep: function(numberMillis) { 
        var now = new Date(); 
        var exitTime = now.getTime() + numberMillis; 
        while(true) { 
            now = new Date();
            if (now.getTime() > exitTime)
            {
                break;
            }
        } 
        return
   },

   touchS: function (e) {
       if (!this.data.hasbind) {
           app.showToast('设备未连接', '../../images/cry_white.png', 'img');
           return false
       }

       if (e.touches.length == 1 && this.data.hasbind) {
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

       if (e.touches.length == 1 && this.data.hasbind) {
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
       if (e.changedTouches.length == 1 && this.data.hasbind) {
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

           if (disY > dmostHeight / 2){
               //执行开锁动作
               this.setData({
                   open: true
               });
               this.execute();
               this.playMusic();

               setTimeout(function(){
                   this.setData({
                       open: false,
                       txtStyle: "bottom: 0px"
                   });
               }.bind(this), 1500);
           }
       }
   },

   touchHandS: function (e) {
       if (!this.data.hasbind) {
           app.showToast('设备未连接', '../../images/cry_white.png', 'img');
           return false
       }

       if (e.touches.length == 1 && this.data.hasbind) {
           this.setData({
               //设置触摸起始点水平方向位置  
               startHandY: e.touches[0].clientY
           });
       }
   },
   touchHandM: function (e) {
       
   },
   touchHandE: function (e) {
       if (e.changedTouches.length == 1 && this.data.hasbind) {
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
               }.bind(this), 1500);
           }
       }
   },
    
   playMusic: function(){
       this.audioCtx.play();
   }
});