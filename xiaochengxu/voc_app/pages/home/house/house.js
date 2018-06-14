// house.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      userInfo: {},
      group: null,
      members: null,
      owner: false
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
      });
      this.house();
  },

  chooseImage: function(){
      wx.chooseImage({
          count: 1, // 默认9
          sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success: function (res) {
              // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
              var tempFilePaths = res.tempFilePaths;
              app.showToast('图片地址==>' + tempFilePaths[0], 'success', 'icon');

              /*
              wx.uploadFile({
                  url: 'http://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
                  filePath: tempFilePaths[0],
                  name: 'file',
                  formData: {
                      'user': 'test'
                  },
                  success: function (res) {
                      var data = res.data
                      //do something
                  }
              });
              */
          }
      })
  },
  onPullDownRefresh: function () {
      var tt = setTimeout(function () {
          wx.stopPullDownRefresh();
      }, 1500);
  },
  goto: function(e){
      if (this.data.owner){
          var url = e.currentTarget.dataset.url;
          wx.navigateTo({
              url: url
          })
      }
  },
  house: function () {
      var that = this;
      var login_url = '../../login/login';
      app.getAccessToken(function () {
          app.showLoading('加载中…');
          var url = app.globalData.baseurl + '/group/current';
          var data = {};
          var param = { access_token: app.globalData.login_session.access_token };
          var query_param = app.paramToQuery(param);
          url = url + query_param;
          var action = { action: 'currentHouse', method: 'get', url: url };

          app.api(data, action, function (rtn) {
              app.hideLoading();
              if (rtn.hasOwnProperty('type') && rtn.type == 'SUCCESS') {
                  var owner = false;
                  if (rtn.data.ownerId == app.globalData.uid){
                      var owner = true;
                  }

                  app.globalData.groupid = rtn.data.id;
                  that.setData({
                      group: rtn.data,
                      owner: owner
                  })
                  that.member(rtn.data.id);
              }
              else {
                  app.showToast('获取失败', '../../../assets/images/warn_fill.png', 'img');
              }
          });
      }, login_url);
  },
  member: function (gid) {
      var that = this;
      var login_url = '../../login/login';
      app.getAccessToken(function () {
          app.showLoading('加载中…');
          var url = app.globalData.baseurl + '/group/' + gid + '/members';
          var data = {};
          var param = { access_token: app.globalData.login_session.access_token };
          var query_param = app.paramToQuery(param);
          url = url + query_param;
          var action = { action: 'currentHouse', method: 'get', url: url };

          app.api(data, action, function (rtn) {
              app.hideLoading();
              if (rtn.hasOwnProperty('type') && rtn.type == 'SUCCESS') {
                  that.setData({
                      members: rtn.data
                  })
              }
              else {
                  app.showToast('获取失败', '../../../assets/images/warn_fill.png', 'img');
              }
          });
      }, login_url);
  },
})