//app.js
App({
  globalData: {
      baseurl: 'https://maoxy.com',
      //baseurl: 'http://www.laravel.com',
      audio_time: 0,
      prelist: []
  },
  onLaunch: function () {
    
  },

  api: function (action, data, callback) {
      var that = this;
      wx.request({
          method: action.method,
          url: action.url,
          header: {
              'Content-Type': action.header
          },
          data: data,
          success: function (res) {
              if (typeof (callback) == 'function') {
                  callback(res.data);
              }
          }
      });
  },

  upload(action, data, callback){
      wx.uploadFile({
          url: action.url,
          filePath: action.path,
          name: 'file',
          formData: data,
          success: function (res) {
              if (typeof (callback) == 'function') {
                  callback(res.data);
              }
          }
      })
  },

  showToast: function (text, icon, type='icon') {
    if (type == 'icon'){
      wx.showToast({
        title: text,
        icon: icon,
      });
    }
    else{
      wx.showToast({
        title: text,
        image: icon,
      });
    }
  },

  showLoading: function (text) {
    wx.showLoading({
      title: text,
      mask: true
    })
  },
  
  hideLoading: function () {
    wx.hideLoading();
  },
})
