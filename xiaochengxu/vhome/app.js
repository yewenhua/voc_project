//app.js
App({
  globalData: {
      third_session: '',
      login_session: '',
      wxurl: 'https://share.voc.so',
      authurl: 'https://lock.voc.so',
      baseurl: 'https://lock.voc.so/v1'
  },
  onLaunch: function () {
    
  },

  wxlogin: function(){
      var that = this;
      wx.login({
            success: function (res) {
               /*
                * 将code发到自己的服务器解密用户信息
                * 后台保存openid和sessionKey，返回第三方sessionID
                * 本地存储并下次用于获取其他数据
                */

                var action = { method: 'post', url: 'wxlogin' };
                that.api( action, { code: res.code }, function (rtn) {
                    if (rtn.code == 0) {
                        wx.setStorageSync('third_session', rtn.data.third_session);//存储3d_session
                        that.globalData.third_session = rtn.data.third_session;

                        if (rtn.data.isbind){
                            //已绑定
                            wx.setStorageSync('login_session', rtn.data.login_session);//存储login_session
                            that.globalData.login_session = rtn.data.login_session;
                        }
                        else{
                            //未绑定，去登陆
                            wx.redirectTo({
                                url: '../login/login'
                            });
                        }
                    }
                });
           }
      });
  },

  checkSession: function (callback) {
      var that = this;
      wx.checkSession({
          success: function () {
              //session 未过期，并且在本生命周期一直有效
              if (typeof (callback) == 'function') {
                  callback();
              }
          },
          fail: function () {
              //登录态过期
              wx.removeStorageSync('third_session');
              that.wxlogin(); //重新登录
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
      var action = { method: 'post', url: url };

      that.api(action, data, function (rtn) {
          if (rtn.hasOwnProperty('access_token')) {
              var obj = {
                  access_token: rtn.access_token,
                  refresh_token: rtn.refresh_token,
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
            if (res.data.code != 99999){
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
      wx.redirectTo({
        url: '../login/login'
      });
      return false;
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
