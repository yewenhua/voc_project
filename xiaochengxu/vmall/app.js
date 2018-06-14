//app.js
App({
  onLaunch: function() {
    
  },

  getUserInfo: function(cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: function(res) {
          that.globalData.userInfo = res.userInfo
          typeof cb == "function" && cb(that.globalData.userInfo)
        }
      })
    }
  },

  globalData: {
    userInfo: null
  },

  showToast: function (text, icon, type = 'icon') {
      if (type == 'icon') {
          wx.showToast({
              title: text,
              icon: icon,
          });
      }
      else {
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
  }
})
