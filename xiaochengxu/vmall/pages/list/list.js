// pages/list/list.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      list: [1,2,3,4,5,6,7,8,9,10],
      inputShowed: false,
      inputVal: "",
      loading: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  lower: function () {
      if (this.data.list.length < 30){
        if (!this.data.loading){
            //app.showLoading('加载中…');
            this.setData({
                loading: true
            });

            setTimeout(function(){
                var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
                this.setData({
                    list: this.data.list.concat(data),
                    loading: false
                });

                //app.hideLoading();
            }.bind(this), 2000);
        }
      }
      else{

      }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  showInput: function () {
      this.setData({
          inputShowed: true
      });
  },
  hideInput: function () {
      this.setData({
          inputVal: "",
          inputShowed: false
      });
  },
  clearInput: function () {
      this.setData({
          inputVal: ""
      });
  },
  inputTyping: function (e) {
      this.setData({
          inputVal: e.detail.value
      });
  },
  detail() {
      wx.navigateTo({
          url: '../detail/detail'
      });
  }
})