// pages/video/video.js
var app = getApp();
var show = true;
Page({

  /**
   * 页面的初始数据
   */
    data: {
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

    onLoad: function (options) {
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

    getData() {
        var that = this;
        if (this.data.page == 1) {
            app.showLoading('加载中…');
        }

        var url = app.globalData.baseurl + '/api/documents';
        var data = {
            size: this.data.size,
            page: this.data.page,
            ftype: 'video',
            searchkey: this.data.inputVal
        };
        var action = { header: 'application/json', method: 'post', url: url };

        app.api(action, data, function (rtn) {
            if (rtn.code == 0) {
                if (that.data.page == 1) {
                    app.hideLoading();
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

  select_video() {
      var that = this
      wx.chooseVideo({
          sourceType: ['album', 'camera'],
          maxDuration: 60,
          camera: 'back',
          success: function (res) {
              that.setData({
                  src: res.tempFilePath
              });

              var tempFilePaths = [res.tempFilePath];
              app.globalData.prelist = tempFilePaths;

              if (tempFilePaths.length > 0) {
                  wx.navigateTo({
                      url: '../upvideo/upvideo'
                  });
              }
          }
      });
  }
})