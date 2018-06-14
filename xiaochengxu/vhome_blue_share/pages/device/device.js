// pages/device/device.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      code: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that = this;
      this.setData({
          code: options.code ? options.code : ''
      });

      app.globalData.code = options.code;
      app.checkLogin(function () {
          that.getdata(function(){
              wx.redirectTo({
                  url: '../list/list'
              });
          });
      });
  },

  getdata: function (cb) {
      var that = this;
      app.getAccessToken(function () {
          var access_token = app.globalData.login_session.access_token;
          app.showLoading('设备领取中…');
          var url = app.globalData.baseurl + '/deviceShareApply/share/' + that.data.code;
          var data = {};
          var param = { access_token: app.globalData.login_session.access_token };
          var query_param = app.paramToQuery(param);
          url = url + query_param;
          var action = { header: 'application/json', method: 'get', url: url };

          app.api(action, data, function (rtn) {
              app.hideLoading();
              if (rtn.hasOwnProperty('type') && rtn.type == 'SUCCESS') {
                  app.globalData.code = '';
                  if (typeof (cb) == 'function') {
                      cb();
                  }
              }
              else {
                  app.showToast(rtn.content, '../../images/cry_white.png', 'img');
                  setTimeout(function () {
                      wx.redirectTo({
                          url: '../list/list'
                      });
                  }, 1000);
              }
          });
      });
  },
  
})