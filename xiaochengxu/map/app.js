//app.js
App({
  globalData: {
      baseurl: 'https://wl.voc.so',
      login_session: ''
  },
  onLaunch: function () {
    
  },

  checkLogin: function (callback) {
      var login_session = wx.getStorageSync('login_session');
      if (!login_session) {
          wx.redirectTo({
              url: '../login/login'
          });
      }
      else {
          this.globalData.login_session = login_session;
          if (typeof (callback) == 'function') {
              callback();
          }
      }
  },

  api: function (action, data, callback) {
      var that = this;
      wx.request({
          method: action.method,
          url: action.url,
          header: {
              'Content-Type': action.header
          },
          data: data,
          success: function (res) {
              if (typeof (callback) == 'function') {
                  callback(res.data);
              }
          }
      });
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
