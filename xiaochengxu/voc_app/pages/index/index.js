//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    is_login: false,
    userInfo: {},
  },

  onLoad: function () {
    var that = this;
    if (app.globalData.login_session){
        that.setData({
            is_login: true
        });
    }
    
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    });
  },
  
  bindGestureTap: function () {
      wx.navigateTo({
          url: '../gesture/gesture'
      })
  },
  drawGesture: function () {
      wx.navigateTo({
          url: '../personal/drawgesture/drawgesture'
      })
  },
  updateGesture: function () {
      wx.navigateTo({
          url: '../personal/updategesture/updategesture'
      })
  },

})
