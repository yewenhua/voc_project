// login.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
     disabled: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.checkSession();
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
  /**
   * login
   */
  formsubmit: function (e) {
    var that = this;
    var postdata = e.detail.value;
    var phone = postdata.phone;
    var password = postdata.password;

    if (password.trim() == '') {
      app.showToast('请输入账号', '../../images/error.png', 'img');
      return false;
    }
    if (password.trim() == '') {
      app.showToast('请输入密码', '../../images/error.png', 'img');
      return false;
    } 

    app.showLoading('登录中…');
    that.setData({
      disabled: true
    });
    app.api('login', { phone: phone, password: password }, function (rtn) {
      app.hideLoading();
      that.setData({
        disabled: false
      });

      if (rtn.code == 0) {
        wx.setStorageSync('login_session', rtn.data);//存储login_session
        app.globalData.login_session = rtn.data;

        wx.redirectTo({
          url: '../index/index'
        });
      }
      else{
        app.showToast('用户名或密码错误', '../../images/error.png', 'img');
      }
    });
  }
})