var Lock = require('../../lib/gesture_lock.js');

//获取应用实例
var app = getApp();
Page({
  data: {
    userInfo: {},
  },

  onLoad: function (options) {
    var frompath = options.path;
    var that = this;
    var pwd = '1,4,7,8,5,2,3,6,9';
    
    this.lock = new Lock("id-gesture-lock", wx.createCanvasContext("id-gesture-lock"), function() {
      that.lock.gestureCallback(pwd, 
      function(){
          app.showToast('验证成功', 'success', 'icon');
          setTimeout(function () {
              if (frompath == 'pages/index/index' || frompath == 'pages/logs/logs' || frompath == 'pages/setting/setting' || frompath == 'pages/slide/slide'){
                  wx.switchTab({
                      url: frompath.replace('pages', '..')
                  });
              }
              else{
                  wx.switchTab({
                      url: '../index/index'
                  });
              }
          }, 1500);
      }, function(){
          app.showToast('验证失败', '../../assets/images/warn_fill.png', 'img');
          setTimeout(function () {
              that.lock.reset();
          }, 1000);
      });
    }, {width:300, height:300});
    this.lock.drawGestureLock();  	
  },
  onTouchStart: function (e) {
    this.lock.onTouchStart(e);
  },
  onTouchMove: function (e) {
    this.lock.onTouchMove(e);
  },
  onTouchEnd: function (e) {
    this.lock.onTouchEnd(e);
  }
})
