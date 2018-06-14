// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      imgUrls: [
          'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
          'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
          'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      ],
      indicatorDots: true,
      autoplay: true,
      circular: true,
      interval: 3000,
      duration: 500,
      popup: false,
      count: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  preview: function () {
      wx.navigateTo({
          url: '../preview/preview'
      });
  },

  cart: function (){
      wx.switchTab({
          url: '../cart/cart'
      });
  },

  popup: function (e) {
      if (this.data.popup) {
          this.setData({
              popup: false
          });
      } else {
          this.setData({
              popup: true
          })
      }
  },
  changeNum: function (e) {
      if (e.target.dataset.alphaBeta == 0) {
          if (this.data.count > 1) {
              this.setData({
                  count: this.data.count - 1
              });
          };
      } else {
          this.setData({
              count: this.data.count + 1
          });
      };
  }
})