// slide.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    open: false,
    windowWidth:  wx.getSystemInfoSync().windowWidth,
    translate: '',
    userInfo: {},
    avatar_left: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that = this
      app.getUserInfo(function (userInfo) {
          //更新数据
          that.setData({
              userInfo: userInfo
          })
      });
      that.setData({
          avatar_left: (-this.data.windowWidth * 2 * 0.25)/2
      });
  },

  /**
   * 打开侧边菜单
   */
  open: function (e) {
    if (this.data.open) {
      this.setData({
        translate: 'transform: translateX(0px)',
        open: false
      })
    } else {
      this.setData({
        translate: 'transform: translateX(' + this.data.windowWidth * 0.75 + 'px)',
        open: true
      })
    }
  },
  close: function(){
      if (this.data.open) {
          this.setData({
              translate: 'transform: translateX(0px)',
              open: false
          })
      }
  },
  tologin: function(){
      this.close();
      wx.navigateTo({
          url: '../login/login'
      });
  },
  tohome: function () {
      this.close();
      wx.navigateTo({
          url: '../home/house/house'
      });
  },
  tosetting: function () {
      this.close();
      wx.switchTab({
          url: '../setting/setting'
      });
  },
  toinfo: function () {
      this.close();
      wx.navigateTo({
          url: '../personal/editinfo/editinfo'
      });
  },
})