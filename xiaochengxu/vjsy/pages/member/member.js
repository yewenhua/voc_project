// pages/member/member.js
var app = getApp()
Page({
  data: {
    userInfo: {}
  },
  //事件处理函数
  onTap: function (event) {
    var index = event.currentTarget.dataset.index;
    wx.navigateTo({
      url: '../Order-List/Order-List?index=' + index
    })
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})