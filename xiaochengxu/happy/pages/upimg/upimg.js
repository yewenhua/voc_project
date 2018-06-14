// pages/upimg/upimg.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      prelist: [],
      label: '',
      disabled: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that = this;

      that.setData({
          prelist: app.globalData.prelist
      });
  },

  //页面卸载
  onUnload() {
      app.globalData.prelist = [];
  },

  labelblur: function (e) {
      if (e.detail.value) {
          this.setData({
              label: e.detail.value
          });
      }
      else {
          this.setData({
              label: ''
          });
      }
  },

  upload() {
      if (!this.data.label){
          app.showToast('请输入标签', '../../images/cry_white.png', 'img');
          return false;
      }

      this.setData({
          disabled: true
      });

      var url = app.globalData.baseurl + '/api/savefile';
      var data = {
          label: this.data.label,
          ftype: 'img'
      };
      var action = { url: url, path: this.data.prelist[0] };
      app.showLoading('提交中…');
      app.upload(action, data, function (rtn) {
          var res = JSON.parse(rtn);
  
          if (res.code == 0) {
              app.showToast('提交成功', 'success', 'icon');
              setTimeout(function () {
                  app.hideLoading();
                  wx.navigateBack({
                      delta: 1
                  });
              }, 1500);
          }
          else {
              app.hideLoading();
              setTimeout(function () {
                  app.showToast('提交出错', '../../images/cry_white.png', 'img');
              }, 300);
          }
      });
  }
})