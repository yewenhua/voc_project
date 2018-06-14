//app.js
App({
  globalData: {
    userInfo: null,
    appid2: 'appid',
    voc_session: '',
    appid: 'wx5050c3cacebad45a',
    secret: '7621a0fd73830856bd44d1ee8052c7ea',
    baseurl2: "https://wx.voc.so",
    baseurl: "https://wx.voc.so",
  },
  onLaunch: function () {
    var voc_session = wx.getStorageSync('voc_session');
    this.globalData.voc_session = voc_session ? voc_session : '';
    this.login(function(){
      //do nothing
    });
    //调用API从本地缓存中获取数据
    //var logs = wx.getStorageSync('logs') || []
    //logs.unshift(Date.now())
    //wx.setStorageSync('logs', logs)
  },
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  apiPage: function (action, offset, rows, callback) {
    wx.request({
      url: this.globalData.baseurl + "/api.php?appid=" + this.globalData.appid + "&act=" + action,
      data: {
        offset: offset, rows: rows
      },
      success: function (res) {
        if (typeof (callback) == 'function') {
          callback(res.data);
        }
      }
    })
  },
  apiData: function (action, data, callback) {
    wx.request({
      method: 'post',
      url: this.globalData.baseurl + "/api.php?appid=" + this.globalData.appid + "&act=" + action,
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: data,
      success: function (res) {
        if (typeof (callback) == 'function') {
          callback(res.data);
        }
      }
    });
  },
  apiUpload: function (callback) {
    var that = this;
    wx.chooseImage({
      success: function (res) {
        var tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          url: that.globalData.baseurl + '/api.php?act=upload',
          filePath: tempFilePaths[0],
          name: 'file',
          formData: {
            appid: that.globalData.appid
          },
          success: function (res) {
            if (typeof (callback) == 'function') {
              callback(res.data);
            }
          }
        })
      }
    })
  },
  login: function (callback) {
    var that = this;
    wx.login({
      success: function (res) {
        wx.request({
          method: 'post',
          url: that.globalData.baseurl + '/api.php?act=signin',
          header: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          data: { code: res.code, appid: '' },
          success: function (rtn) {
            if (rtn.data.code == 0) {
              wx.setStorageSync('voc_session', rtn.data.data);//存储3d_session
              that.globalData.voc_session = rtn.data.data;

              if (typeof (callback) == 'function') {
                callback();
              }
            }
          }
        });
      }
    });
  },
  checkSession: function (callback) {
    var that = this;
    wx.checkSession({
      success: function () {
        //session 未过期，并且在本生命周期一直有效
        if (typeof (callback) == 'function') {
          callback();
        }
      },
      fail: function () {
        //登录态过期
        wx.removeStorageSync('voc_session');
        that.login(callback); //重新登录
      }
    });
  },
  showResult: function (result, text) {
    wx.showToast({
      title: text,
      image: '/images/' + result + '.png',
      mask: true,
      duration: 1000
    })
  },
  showToast: function (text, icon) {
    wx.showToast({
      title: text,
      icon: icon,
    });
  },
  showLoading: function(){
    wx.showLoading({
      title: '加载中…',
      mask: true
    })
  },
  hideLoading: function () {
    wx.hideLoading();
  },
  getOrderId: function () {
    return new Date().getTime();
  }
})