// communication.js
var obj = { id: 2, info: { name: '微信小程序' } };
var socketOpen = false;
var socketMsgQueue = [obj];
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
      arr: [],
      msg: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

      var that = this;
      /**
       * 创建WebSocket连接
       */
      wx.connectSocket({
          url: "ws://127.0.0.1:9999",
      });

      /**
       * WebSocket连接打开success
       */
      wx.onSocketOpen(function (res) {
          console.log('connected');
          socketOpen = true;
          for (var i = 0; i < socketMsgQueue.length; i++) {
              that.sendSocketMessage(socketMsgQueue[i]);
          }
          socketMsgQueue = [];
      });

      /**
       * WebSocket连接打开失败
       */
      wx.onSocketError(function (res) {
          console.log('connect error');
          socketOpen = false;
      });

      /**
       * WebSocket收到服务器内容
       */
      wx.onSocketMessage(function (res) {
          var temp = JSON.parse(res.data);
          var newarr = that.data.arr;
          newarr.push(temp);

          that.setData({
              arr: newarr
          });
          console.log('收到[' + temp.name + ']发来的消息：' + temp.msg);
      });
     
      /**
       * 关闭WebSocket连接
       */
      wx.onSocketClose(function (res) {
          console.log('connect closed');
          socketOpen = false;
      });
  },

  sendSocketMessage: function(msg) {
      console.log('send message');
      if (typeof (msg) === 'object') { // 只能发送string
          msg = JSON.stringify(msg);
      }

      if (socketOpen) {
          wx.sendSocketMessage({
              data: msg
          });
      } else {
          socketMsgQueue.push(msg);
      }
  },

  input: function(e){
      this.setData({
          msg: e.detail.value
      });
  },

  send: function(e){
      var msg = this.data.msg;
      if (msg){
            var newarr = this.data.arr;
            newarr.push({ msg: msg, name: 'wx'});

            this.setData({
                arr: newarr
            });
            var mseeage = {
                fromId: 2,
                toId: 1,
                data: msg
            };
            this.sendSocketMessage(mseeage);
            app.showToast('发送成功', 'success', 'icon');

            this.setData({
                msg: ''
            });
      }
      else{
          app.showToast('请输入内容', '../../assets/images/warn_fill.png', 'img');
      }
  }
})