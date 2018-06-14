// invite.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      userInfo: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that = this;
      app.getUserInfo(function (userInfo) {
          //更新数据
          that.setData({
              userInfo: userInfo
          })
      })
  },

  
})