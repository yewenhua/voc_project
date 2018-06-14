//app.js
App({
  globalData: {
      third_session: '',
      login_session: '',
      wxurl: 'https://share.voc.so',
      authurl: 'https://vhome.voc.so',
      baseurl: 'https://vhome.voc.so/v1',
      code: '',
      keyCode: ''
  },
  onLaunch: function () {
      
  },

  //wxlogin 成功后保存third_session，后续传到后台获取openid
  wxlogin: function (callback){
      var that = this;
      wx.login({
            success: function (res) {
                var url = that.globalData.wxurl + '/voc/wxlogin'; 
                var param = { code: res.code };
                var query_param = that.paramToQuery(param);
                url = url + query_param;

                var data = {};
                var action = { header: 'application/x-www-form-urlencoded', method: 'get', url: url };
                that.api(action, data, function (rtn) {
                    if (rtn.code == 0) {
                        var obj = {
                            value: rtn.data.third_session,
                            expire_time: (new Date()).getTime() + 6 * 3600 * 1000  //有效期六小时
                        };

                        wx.setStorageSync('third_session', obj);//存储3d_session
                        that.globalData.third_session = obj;
                        that.autosignin(callback);
                    }
                    else{
                        that.showToast(rtn.message, '/images/cry_white.png', 'img');
                    }
                });
           }
      });
  },

  wechatlogin: function (callback) {
      var that = this;
      var third_session = wx.getStorageSync('third_session');
      var expire_time = third_session.expire_time;
      var now = (new Date()).getTime();
      if (third_session && now < expire_time) {
          var third_session = wx.getStorageSync('third_session');
          that.globalData.third_session = third_session;
          callback();
      }
      else{
          wx.removeStorageSync('third_session');
          wx.login({
              success: function (res) {
                  var url = that.globalData.wxurl + '/voc/wxlogin';
                  var param = { code: res.code };
                  var query_param = that.paramToQuery(param);
                  url = url + query_param;

                  var data = {};
                  var action = { header: 'application/x-www-form-urlencoded', method: 'get', url: url };
                  that.api(action, data, function (rtn) {
                      if (rtn.code == 0) {
                          var obj = {
                              value: rtn.data.third_session,
                              expire_time: (new Date()).getTime() + 6 * 3600 * 1000  //有效期六小时
                          };

                          wx.setStorageSync('third_session', obj);//存储3d_session
                          that.globalData.third_session = obj;
                          callback();
                      }
                      else {
                          that.showToast(rtn.message, '/images/cry_white.png', 'img');
                      }
                  });
              }
          });
      }
  },
  
  //分享用
  isbind(successCb, failCb) {
      var that = this;
      var third_session = wx.getStorageSync('third_session');
      var expire_time = third_session.expire_time;
      var now = (new Date()).getTime();
      that.showLoading('加载中…');
      if (third_session && now < expire_time) {
          //third_session session有效
          var login_session = wx.getStorageSync('login_session');
          var expire_time_lg = login_session.expire_time;
          var now_lg = (new Date()).getTime();
          if (login_session && now_lg < expire_time_lg) {
                //login_session session有效
                successCb();
          }
          else{
                var url = that.globalData.wxurl + '/voc/wxsignin';
                var param = { third_session: third_session.value };
                var query_param = that.paramToQuery(param);
                url = url + query_param;

                var data = {};
                var action = { header: 'application/x-www-form-urlencoded', method: 'get', url: url };
                that.api(action, data, function (rtn) {
                    that.hideLoading();
                    if (rtn.code == 0) {
                        //已绑定，返回登录信息
                        console.log('isbind success');
                        var obj = {
                            access_token: rtn.data.access_token,
                            refresh_token: rtn.data.refresh_token,
                            expire_time: (new Date()).getTime() + 3600 * 1000
                        };
                        wx.setStorageSync('login_session', obj);//存储login_session
                        that.globalData.login_session = obj;
                        successCb();
                    }
                    else{
                        failCb();
                    }
                });
          }
      }
      else{
          wx.removeStorageSync('third_session');
      }
  },

  //通过openid自动登录
  autosignin(callback){
      var that = this;
      var third_session = wx.getStorageSync('third_session');
      var expire_time = third_session.expire_time;
      var now = (new Date()).getTime();
      that.showLoading('加载中…');
      if (third_session && now < expire_time) {
            //session有效
            var url = that.globalData.wxurl + '/voc/wxsignin';
            var param = { third_session: third_session.value };
            var query_param = that.paramToQuery(param);
            url = url + query_param;

            var data = {};
            var action = { header: 'application/x-www-form-urlencoded', method: 'get', url: url };
            that.api(action, data, function (rtn) {
                that.hideLoading();
                if (rtn.code == 0) {
                    //已绑定，返回登录信息
                    console.log('autosignin success');
                    var obj = {
                        access_token: rtn.data.access_token,
                        refresh_token: rtn.data.refresh_token,
                        expire_time: (new Date()).getTime() + 3600 * 1000
                    };
                    wx.setStorageSync('login_session', obj);//存储login_session
                    that.globalData.login_session = obj;
                    that.keylist(callback, true);
                }
                else if(rtn.code == 10001){
                    console.log('autosignin fail');
                    that.wxlogin(callback); 
                }
                else {
                    console.log('微信未绑定');
                    that.keylist(function(){
                        if (that.globalData.code) {
                            wx.redirectTo({
                                url: '../regist/regist'
                            });
                        }
                        else {
                            wx.redirectTo({
                                url: '../login/login'
                            });
                        }
                    }, false);
                }
            });
      }
      else{
            //session失效，重新 wxlogin
            wx.removeStorageSync('third_session');
            that.wxlogin(callback); 
      }
  },

  keylist(callback, isbind) {
        var that = this;
        var third_session = wx.getStorageSync('third_session');
        that.showLoading('加载中…');

        //session有效
        var url = that.globalData.wxurl + '/voc/keylist';
        var param = { third_session: third_session.value };
        var query_param = that.paramToQuery(param);
        url = url + query_param;

        var data = {};
        var action = { header: 'application/x-www-form-urlencoded', method: 'get', url: url };
        that.api(action, data, function (rtn) {
            that.hideLoading();
            if (rtn.code == 0 && rtn.data.length > 0) {
                //有分享钥匙，跳转到分享钥匙列表
                if (isbind){
                    if (that.globalData.code){
                        if (typeof (callback) == 'function') {
                            callback();
                        }
                    }
                    else{
                        wx.redirectTo({
                            url: '../list/list'
                        });
                    }  
                }
                else{
                    if (that.globalData.code) {
                        if (typeof (callback) == 'function') {
                            callback();
                        }
                    }
                    else{
                        wx.redirectTo({
                            url: '../keys/keys'
                        });
                    }
                }
            }
            else {
                if (typeof (callback) == 'function') {
                    callback();
                }
            }
        });
  },

  getAccessToken: function (callback) {
      var that = this;
      var login_session = wx.getStorageSync('login_session');
      that.globalData.login_session = login_session;
      var refresh_token = login_session.refresh_token;
      var expire_time = login_session.expire_time;
      var refresh_expire_time = login_session.expire_time + 7 * 24 * 60 * 60 * 1000;
      var now = (new Date()).getTime();
      if (now < expire_time) {
          //access_token有效
          if (typeof (callback) == 'function') {
              callback();
          }
      }
      else if (now >= expire_time && now < refresh_expire_time) {
          //refresh_token有效，去刷新
          that.refresh_token(callback, refresh_token);
      }
      else {
          //refresh_token和access_token都失效，重新登录
          wx.removeStorageSync('login_session');
          wx.reLaunch({
              url: '../login/login'
          });
      }
  },

  refresh_token: function (callback, refresh_token) {
      var that = this;
      var url = that.globalData.authurl + '/oauth/token?client_id=e41df05b-f963-4a66-a8cd-8596d1564fee&client_secret=3ca4b24f-d2cd-44cc-b5c9-31f88c7c5631&grant_type=refresh_token&refresh_token=' + refresh_token;
      var data = {};
      var action = { method: 'post', url: url, header: 'application/x-www-form-urlencoded' };

      that.api(action, data, function (rtn) {
          if (rtn.hasOwnProperty('data') && rtn.data.hasOwnProperty('access_token') && rtn.type == 'SUCCESS') {
              var obj = {
                  access_token: rtn.data.access_token,
                  refresh_token: rtn.data.refresh_token,
                  expire_time: (new Date()).getTime() + 3600 * 1000
              };
              wx.setStorageSync('login_session', obj);//存储login_session
              that.globalData.login_session = obj;
              if (typeof (callback) == 'function') {
                  callback();
              }
          }
          else {
              wx.removeStorageSync('login_session');
              wx.reLaunch({
                  url: '../login/login'
              });
          }
      });
  },

  paramToQuery: function (data) {
      var param = '';
      if (data && typeof data == "object") {
          for (var key in data) {
              if (param == '') {
                  param = key + '=' + data[key];
              }
              else {
                  param = param + '&' + key + '=' + data[key];
              }
          }
          param = '?' + param;
      }
      return param;
  },

  api: function (action, data, callback){
    var that = this;
    wx.request({
        method: action.method,
        url: action.url,
        header: {
            'Content-Type': action.header
        },
        data: data,
        success: function (res) {
            if ((res.hasOwnProperty('data') && res.data.hasOwnProperty('error') && res.data.error != 'invalid_token') || (res.hasOwnProperty('data') && res.data.hasOwnProperty('code') && res.data.code != 99999) || (res.hasOwnProperty('data') && res.data.hasOwnProperty('type'))){
                if (typeof (callback) == 'function') {
                    callback(res.data);
                }
            }
            else{
                wx.removeStorageSync('login_session');
                wx.redirectTo({
                    url: '../login/login'
                });
            }
        }
    });
  },

  checkLogin: function (callback) {
    var login_session = wx.getStorageSync('login_session');
    if (!login_session) {
        //没有登录信息，去执行自动登录流程
        this.autosignin(callback);
    }
    else{
        this.globalData.login_session = login_session;
        callback();
    }
  },

  showToast: function (text, icon, type='icon') {
    if (type == 'icon'){
      wx.showToast({
        title: text,
        icon: icon,
      });
    }
    else{
      wx.showToast({
        title: text,
        image: icon,
      });
    }
  },

  showLoading: function (text) {
    wx.showLoading({
      title: text,
      mask: true
    })
  },
  
  hideLoading: function () {
    wx.hideLoading();
  },
})
