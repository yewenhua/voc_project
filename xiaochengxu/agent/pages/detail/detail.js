var app = getApp();
// detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     detail: null,
     orderid: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      orderid: options.oid
    });

    var that = this;
    app.checkSession();
    app.checkLogin(function () {
      that.getData();
    });
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
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  sure: function () {
    var that = this;
    wx.showActionSheet({
      itemList: ['确定'],
      success: function (res) {
        if (res.tapIndex == 0){
          var login_session = app.globalData.login_session;
          app.api('sure', { uid: login_session.id, orderid: that.data.orderid }, function (rtn) {
            app.hideLoading();
            if (rtn.code == 0) {
              app.showToast('操作成功', 'success');
              var tt  = setTimeout(function(){
                wx.reLaunch({
                  url: '../index/index'
                });
              }, 1500);
            }
            else{
              app.showToast('操作失败', '../../images/error.png', 'img');
            }
          });
        }
      }
    });
  },
  giveup: function(){
    wx.navigateTo({
      url: '../cancle/cancle?oid=' + this.data.orderid
    });
  },
  getData: function () {
    var that = this;
    app.showLoading('加载中…');
    var login_session = app.globalData.login_session;
    app.api('detail', { uid: login_session.id, orderid: this.data.orderid }, function (rtn) {
      app.hideLoading();
      if (rtn.code == 0) {
        rtn.data.img_url = app.globalData.serverurl + rtn.data.picture;
        that.setData({
          detail: rtn.data
        });
      }
    });
  }
})