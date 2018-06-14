// pages/product/product.js
var app = getApp();

Page({
  data: {
    baseurl: app.globalData.baseurl,
    proArr: [],
    loading: false,
    hasdata: false,
    hasMore: false,
    pageindex: 1,
    pagesize: 5,
    is_tolower: false
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
      pageindex: 1
    });
    this.getList();
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  tolower: function(){
    if (!this.data.loading && !this.data.is_tolower && this.data.hasMore) {
      this.setData({
        is_tolower: true
      });
      this.setData({
        pageindex: this.data.pageindex + 1
      });
      this.getList();
    }
  },
  getList: function () {
    this.setData({
      loading: true
    });

    var that = this;
    app.hideLoading();
    app.showLoading();

    app.apiPage('goodslist', this.data.pagesize * (this.data.pageindex - 1), this.data.pagesize, function (data) {
      if (data.length > 0) {
        if (that.data.pageindex == 1) {
          that.setData({
            proArr: data,
            hasdata: true
          });
        } else {
          that.setData({
            proArr: that.data.proArr.concat(data),
            hasdata: true
          });
        }
        
        app.hideLoading();
        that.setData({
          loading: false
        });
        if (that.data.is_tolower){
          that.setData({
            is_tolower: false
          });
        }

        if (data.length < that.data.pagesize) {
          that.setData({
            hasMore: false
          });
        }
        else{
          that.setData({
            hasMore: true
          });
        }
      } else {
        app.hideLoading();
        if (that.data.pageindex == 1) {
          that.setData({
            hasdata: false
          });
        }

        if (that.data.hasdata){
          app.showToast('加载完毕', 'success');
        }
        else{
          app.showToast('没有数据', 'fail');
        }
        that.setData({
          loading: false,
          hasMore: false
        });
        if (that.data.is_tolower) {
          that.setData({
            is_tolower: false
          });
        }
      }
    });
  }
})

