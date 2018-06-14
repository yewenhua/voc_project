//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    baseurl: app.globalData.baseurl,
    imgUrls: [],
    homeadv: [],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    imageLoad:{}
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    /*app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })*/
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          scrollHeight: res.windowHeight
        });
      }
    });
    app.apiData('banner', {}, function (data) {
      that.setData({
        imgUrls: data
      })
    });
    app.apiData('homeadv', {type:2}, function (data) {
      that.setData({
        homeadv: data
      })
    });
  },
})
