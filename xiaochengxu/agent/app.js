//app.js
App({
  globalData: {
    userInfo: null,
    third_session: '',
    login_session: '',
    serverurl: 'https://wx.voc.so',
    baseurl: 'https://dl.voc.so'
  },
  onLaunch: function () {
    this.init();
  },
  getUserInfo: function (callback) {
    var that = this;
    wx.getUserInfo({
      success: function (res) {
        that.globalData.userInfo = res.userInfo;

        if (typeof (callback) == 'function') {
          callback(res.userInfo);
        }
      }
    });
  },
  api: function (action, data, callback){
    var that = this;
    if (action != 'init'){
      var third_session = wx.getStorageSync('third_session');
      data.third_session = third_session;
    }
    data.action = action;

    wx.request({
      method: 'post',
      url: that.globalData.baseurl + '/api',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: data,
      success: function (res) {
        if (res.data.code != 99999){
          if (typeof (callback) == 'function') {
            callback(res.data);
          }
        }
        else{
          wx.removeStorageSync('third_session');
          wx.removeStorageSync('login_session');
          wx.redirectTo({
            url: '../login/login'
          });
        }
      }
    });
  },
  init: function () {
    var that = this;
    wx.login({
      success: function (res) {
       /*
        * 将code发到自己的服务器解密用户信息
        * 后台保存openid和sessionKey，返回第三方sessionID
        * 本地存储并下次用于获取其他数据
        */
        
        that.api('init', { code: res.code }, function(rtn){
          if (rtn.code == 0) {
            wx.setStorageSync('third_session', rtn.data);//存储3d_session
            that.globalData.third_session = rtn.data;
          }
        });
      }
    });
  },
  checkSession: function () {
    var that = this;
    wx.checkSession({
      success: function () {
        //session 未过期，并且在本生命周期一直有效
      },
      fail: function () {
        //登录态过期
        wx.removeStorageSync('third_session');
        this.init(); //重新登录
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
