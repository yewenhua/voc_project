// member.js
var app = getApp()
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
      });
      var mid = detail.id;
      if(mid){
          //this.detail(mid);
      }
  },
  chooseImage: function () {
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
  detail: function (mid) {
      var that = this;
      var login_url = '../../login/login';
      app.getAccessToken(function () {
          var url = app.globalData.baseurl + '/group/' + gid + '/members';
          var data = {};
          var param = { access_token: app.globalData.login_session.access_token };
          var query_param = app.paramToQuery(param);
          url = url + query_param;
          var action = { action: 'currentHouse', method: 'get', url: url };

          app.api(data, action, function (rtn) {
              if (rtn.hasOwnProperty('type') && rtn.type == 'SUCCESS') {
                  that.setData({
                      members: rtn.data
                  })
                  app.showToast('获取成功', 'success', 'icon');
              }
              else {
                  app.showToast('获取失败', '../../../assets/images/warn_fill.png', 'img');
              }
          });
      }, login_url);
  },
})