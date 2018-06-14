// pages/order/order.js
var app = getApp();

Page({
  data: {
    baseurl: app.globalData.baseurl,
    orderArr: [],
    tabs: ['全部订单', '已预约', '已完成'],
    curtab: 0,
    loading: false,
    hasdata: true,
    hasMore: false,
    pageindex: 1,
    pagesize: 8,
    is_tolower: false
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    that.setData({
      curtab: options.v
    });

    app.checkSession(function(){
      var voc_session = wx.getStorageSync('voc_session');
      that.setData({
        pageindex: 1,
        voc_session: voc_session
      });
      that.getList();
    });
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
  tabFun: function (e) {
    var curtab = e.target.dataset.id;
    this.setData({
      orderArr:[],
      curtab: curtab,
      hasdata: false,
      pageindex: 1,
      is_tolower: false,
      hasMore: false,
    });
    this.getList();
  },
  tolower: function () {
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
    app.showLoading();

    var action = "allorder";
    var data = { offset: this.data.pagesize * (this.data.pageindex - 1), rows: this.data.pagesize, voc_session: that.data.voc_session }
    if (that.data.curtab != 0) {
      action = "statusorder";
      data = { status: that.data.curtab, offset: this.data.pagesize * (this.data.pageindex - 1), rows: this.data.pagesize, voc_session: that.data.voc_session }
    }

    app.apiData(action, data, function (data) {
      if (data.length > 0) {
        app.hideLoading();
        if (that.data.pageindex == 1) {
          that.setData({
            orderArr: data,
            hasdata: true
          })
        } else {
          that.setData({
            orderArr: that.data.orderArr.concat(data),
            hasdata: true
          })
        }

        that.setData({
          loading: false
        });
        if (that.data.is_tolower) {
          that.setData({
            is_tolower: false
          });
        }

        if (data.length < that.data.pagesize) {
          that.setData({
            hasMore: false
          });
        }
        else {
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

        if (that.data.hasdata) {
          app.showToast('加载完毕', 'success');
        }
        else {
          app.showToast('没有数据', 'success');
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
