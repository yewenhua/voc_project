// list.js
var dateFormat = require('../../utils/dateFormat.js');
var app = getApp();
var hasload = false;

Page({

  /**
   * 页面的初始数据
   */
  data: {
      list: [],
      keys: [],
      loading: false,
      geting: false,
      init: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      hasload = false;
      app.checkLogin(function () {
          this.getdata(function () {
              hasload = true;
          }.bind(this));

          this.keylist();
      }.bind(this));
  },

  onShow: function () {
      if (hasload) {
          app.checkLogin(function () {
              this.getdata(function () {

              }.bind(this));

              this.keylist();
          }.bind(this));
      }
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
      this.getdata(function () {
          wx.stopPullDownRefresh();
      }.bind(this));

      this.keylist();
  },

  getdata: function(cb){
      if (!this.data.loading){
            var that = this;
            that.setData({
                loading: true
            });

            app.getAccessToken(function () {
                app.showLoading('加载中…');
                var url = app.globalData.baseurl + '/device/list';
                var data = {}; 
                var param = { access_token: app.globalData.login_session.access_token };
                var query_param = app.paramToQuery(param);
                url = url + query_param;
                var action = { header: 'application/json', method: 'get', url: url };

                app.api(action, data, function (rtn) {
                    app.hideLoading();
                    if (rtn.hasOwnProperty('type') && rtn.type == 'SUCCESS') {
                        if (rtn.data.length > 0) {
                            var tmp = [];
                            for (var i = 0; i < rtn.data.length; i++) {
                                if (rtn.data[i].communicationType == 'BLUE') {
                                    var beginDateTime = rtn.data[i].beginDateTime;
                                    var endDateTime = rtn.data[i].endDateTime;
                                    var maxOpenTimes = rtn.data[i].maxOpenTimes;
                                    var openTimes = rtn.data[i].openTimes;
                                    var display = '';
                                    var canuse = false;
                                    var now = (new Date()).getTime();
                                    if (beginDateTime && endDateTime) {
                                        //开始时间
                                        var obj = new Date();
                                        obj.setTime(beginDateTime);
                                        rtn.data[i].begin = dateFormat.day(obj);

                                        //结束时间
                                        var obj = new Date();
                                        obj.setTime(endDateTime);
                                        rtn.data[i].end = dateFormat.day(obj);

                                        display = rtn.data[i].begin + ' => ' + rtn.data[i].end;

                                        if (maxOpenTimes) {
                                            var count = maxOpenTimes - openTimes;
                                            rtn.data[i].count = count;
                                            display = display + ' (' + count + '次)';

                                            if (now > beginDateTime && now < endDateTime && count > 0){
                                                canuse = true;
                                            }
                                        }
                                        else{
                                            if (now > beginDateTime && now < endDateTime) {
                                                canuse = true;
                                            }
                                        }

                                        rtn.data[i].canuse = canuse;
                                        rtn.data[i].display = display;
                                    }
                                    else{
                                        rtn.data[i].canuse = true;
                                        rtn.data[i].display = '不限制';
                                    }

                                    tmp.push(rtn.data[i]);
                                }
                            }

                            if (tmp.length > 0) {
                                that.setData({
                                    list: tmp
                                });
                            }
                            else {
                                app.showToast('没有蓝牙设备', '../../images/cry_white.png', 'img');
                            }
                        }
                        else {
                            that.setData({
                                list: []
                            });
                        }
                    }
                    else {
                        if ((rtn.error && rtn.error == 'invalid_token') || (rtn.type && rtn.type == 'ERROR')){
                            wx.removeStorageSync('login_session');
                            wx.redirectTo({
                                url: '../login/login'
                            });
                        }
                        else{
                            app.showToast('获取失败', '../../images/cry_white.png', 'img');
                        }
                    }
                    
                    that.setData({
                        loading: false,
                        init: false
                    });
                    cb();
                });
            });
      }
  },

  goto_url: function(e){
      var index = e.currentTarget.dataset.index;
      var data = this.data.list[index];
      var mid = data.modelName;
      var did = data.id;
      var key = data.productKey;
      var card = data.idcard;
      var types = data.communicationType;
      if (types == 'BLUE'){
          wx.navigateTo({
              url: '../index/index?mid=' + mid + '&did=' + did
          });
      }
  },

  keylist() {
      var that = this;
      if (!that.data.geting) {
            that.setData({
                geting: true
            });
            app.wechatlogin(function () {
                //session有效
                var url = app.globalData.wxurl + '/voc/keylist';
                var param = { third_session: app.globalData.third_session.value };
                var query_param = app.paramToQuery(param);
                url = url + query_param;

                var data = {};
                var action = { header: 'application/x-www-form-urlencoded', method: 'get', url: url };
                app.api(action, data, function (rtn) {
                    if (rtn.code == 0 && rtn.data.length > 0) {
                        //有分享钥匙，跳转到分享钥匙列表
                        that.setData({
                            keys: rtn.data
                        });
                    }
                    else {
                        that.setData({
                            keys: []
                        });
                    }
                    that.setData({
                        geting: false
                    });
                });
            });
      }
  },
  
  goto_key(e){
      var index = e.currentTarget.dataset.index;
      var data = this.data.keys[index];
      var mid = data.modelName;
      var did = data.deviceKeyId;
      wx.navigateTo({
          url: '../share/share?mid=' + mid + '&did=' + did
      });
  }
})