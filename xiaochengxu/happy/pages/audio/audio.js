// pages/audio/audio.js
var app = getApp();
var recorderManager = null;
var start = 0;
var end = 0;
var show = true;
Page({

  /**
   * 页面的初始数据
   */
  data: {
      listen: false,
      is_start: false,
      audio_time: 0,
      file: '',
      list: [],
      inputShowed: false,
      inputVal: "",
      loading: true,
      page: 1,
      size: 10,
      hasMore: false,
      baseurl: app.globalData.baseurl
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.init();
      show = false;
      this.getData();
  },

  onShow: function (options) {
      if (show) {
          show = false;
          this.setData({
              loading: true,
              list: [],
              page: 1
          });

          this.getData();
      }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  init(){
      recorderManager = wx.getRecorderManager();

      recorderManager.onStart(() => {
          app.showToast('录音开始', 'success', 'icon');
          start = (new Date).getTime();
      });

      recorderManager.onResume(() => {
          app.showToast('录音恢复', 'success', 'icon');
      });

      recorderManager.onPause(() => {
          //录音暂停计时一次
          app.showToast('录音暂停', 'success', 'icon');
          end = (new Date).getTime();
          var diff = end - start;
          var new_time = this.data.audio_time + diff / 1000;
          
          this.setData({
              audio_time: Math.ceil(new_time)
          });
      });

      recorderManager.onStop((res) => {
          app.showToast('录音完成', 'success', 'icon');
          const { tempFilePath } = res;
          this.setData({
              file: tempFilePath,
              is_start: false,
              listen: false
          });

          end = (new Date).getTime();
          var diff = end - start;
          var new_time = this.data.audio_time + diff/1000;
          
          this.setData({
              audio_time: Math.floor(new_time)
          });
          start = 0;
          end = 0;

          //upload
          //this.upload();

          var tempFilePaths = [tempFilePath];
          app.globalData.prelist = tempFilePaths;
          app.globalData.audio_time = Math.floor(new_time);

          if (tempFilePaths.length > 0) {
              wx.navigateTo({
                  url: '../upaudio/upaudio'
              });
          }
      });

      recorderManager.onError(() => {
          app.showToast('录音出错', '../../images/cry_white.png', 'img');
      });
  },

  start_record() {
      if (!this.data.listen && !this.data.is_start){
            const options = {
                duration: 60000,
                format: 'aac'
            }

            recorderManager.start(options);

            this.setData({
                listen: true,
                is_start: true,
                audio_time: 0
            });
      }
      else{
          app.showToast('录音已开始', 'success', 'icon');
      }
  },

  stop_record(){
      recorderManager.stop();
  },

  resume_record() {
      recorderManager.resume();
  },

  pause_record() {
      recorderManager.pause();
  },

  play(){
      if (this.data.listen){
          this.setData({
              listen: false
          });

          this.pause_record();
      }
      else{
          this.setData({
              listen: true
          });

          this.resume_record();
      }
  },

  cancle_record() {
      this.stop_record();
  },

  ok_record() {
      this.stop_record();
  },

  voice(e){
      var that = this;
      var src = e.currentTarget.dataset.src;
      var idx = e.currentTarget.dataset.idx;
      var temp = this.data.list;
      for (var i = 0; i < temp.length; i++) {
          temp[i].playing = false;
      }

      const innerAudioContext = wx.createInnerAudioContext();
      innerAudioContext.autoplay = true;
      innerAudioContext.src = src;
      innerAudioContext.onPlay(() => {
          temp[idx].playing = true;
          that.setData({
              list: temp
          });
          app.showToast('播放成功', 'success', 'icon');
      });

      innerAudioContext.onError((res) => {
          app.showToast('播放失败', 'success', 'icon');
      });

      innerAudioContext.onEnded(() => {
          temp[idx].playing = false;
          that.setData({
              list: temp
          });
          app.showToast('播放结束', 'success', 'icon');
      });
  },

  upload(){
      var url = app.globalData.baseurl + '/api/savefile';
      var data = {
          label: 'hello'
      };
      var action = { url: url, path: this.data.file };
      app.showLoading('提交中…');
      
      app.upload(action, data, function (rtn) {
          //app.hideLoading();
          var res = JSON.parse(rtn);

          if (res.code == 0) {
              app.showToast('提交成功', 'success', 'icon');
          }
          else {
              app.showToast('提交出错', '../../images/cry_white.png', 'img');
          }
      });
  },

  getData() {
      var that = this;
      if (this.data.page == 1) {
          app.showLoading('加载中…');
      }

      var url = app.globalData.baseurl + '/api/documents';
      var data = {
          size: this.data.size,
          page: this.data.page,
          ftype: 'audio',
          searchkey: this.data.inputVal
      };
      var action = { header: 'application/json', method: 'post', url: url };

      app.api(action, data, function (rtn) {
          if (rtn.code == 0) {
              if (that.data.page == 1) {
                  app.hideLoading();
              }

              for (var i = 0; i < rtn.data.data.length; i++){
                  rtn.data.data[i].playing = false;
              }

              var now_num = that.data.size * that.data.page;
              if (now_num < rtn.data.count) {
                  that.setData({
                      list: that.data.list.concat(rtn.data.data),
                      hasMore: true,
                      loading: false
                  });
              }
              else {
                  that.setData({
                      list: that.data.list.concat(rtn.data.data),
                      hasMore: false,
                      loading: false
                  });
              }
          }
          else {
              if (that.data.page == 1) {
                  app.hideLoading();
              }
              that.setData({
                  loading: false
              });

              setTimeout(function () {
                  if (that.data.page != 1) {
                      app.showToast('没有数据', '../../images/cry_white.png', 'img');
                  }
              }, 300);
          }
      });
  },

  lower: function () {
      if (this.data.hasMore && !this.data.loading) {
          this.setData({
              loading: true,
              page: this.data.page + 1
          });

          this.getData();
      }
  },

  search() {
      this.setData({
          loading: true,
          list: [],
          page: 1
      });

      this.getData();
  },

  showInput: function () {
      this.setData({
          inputShowed: true
      });
  },
  hideInput: function () {
      this.setData({
          inputVal: "",
          inputShowed: false
      });
  },
  clearInput: function () {
      this.setData({
          inputVal: ""
      });
  },
  inputTyping: function (e) {
      this.setData({
          inputVal: e.detail.value
      });
  },
})