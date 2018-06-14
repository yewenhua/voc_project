var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
var app = getApp();

Page({
  data: {
    tabs: ["已预订订单", "已完成订单"],
    status: 1,
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    list: [],
    inputShowed: false,
    inputVal: "",
    hasdata: false,
    hasMore: false,
    pageindex: 1,
    pagesize: 5,
    is_tolower: false,
    loading: false
  },
  onLoad: function () {
    this.init();
  },
  init: function(){
    var that = this;
    app.checkSession();
    app.checkLogin(function () {
      that.setData({
        pageindex: 1
      });
      that.getList(function () {
        //do nothing
      });
    });

    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },
  tabClick: function (e) {
    if (e.currentTarget.id == 0){
      var new_status = 1;
    }
    else{
      var new_status = 2;
    }

    this.setData({
      inputShowed: false,
      inputVal: "",
      status: new_status,
      list: [],
      pageindex: 1,
      is_tolower: false,
      hasdata: false,
      hasMore: false,
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });

    this.getList(function () {
      //do nothing
    });
  },
  onPullDownRefresh: function () {
    this.setData({
      inputShowed: false,
      inputVal: "",
      list: [],
      pageindex: 1,
      is_tolower: false,
      hasdata: false,
      hasMore: false
    });

    this.getList(function () {
      wx.stopPullDownRefresh();
    });
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
    this.search();
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },

  onReachBottom: function () {
    if (!this.data.is_tolower && this.data.hasMore) {
      this.setData({
        is_tolower: true,
        pageindex: this.data.pageindex + 1
      });

      this.getList(function(){
        //do nothing
      });
    }
  },

  getList: function (callback) {
    this.setData({
      loading: true
    });

    var that = this;
    app.showLoading('加载中…');
    var login_session = app.globalData.login_session;
    app.api('orderlist', { status: this.data.status, searchkey: this.data.inputVal, uid: login_session.id, num: this.data.pagesize, page: this.data.pageindex }, function (rtn) {
      app.hideLoading();
      that.setData({
        loading: false
      });

      if (rtn.code == 0) {
        for (var i = 0; i < rtn.data.data.length; i++){
          rtn.data.data[i].img_url = app.globalData.serverurl + rtn.data.data[i].picture;
        }

        if (that.data.pageindex == 1) {
          that.setData({
            list: rtn.data.data,
            hasdata: true
          });
        } else {
          that.setData({
            list: that.data.list.concat(rtn.data.data),
            hasdata: true
          });
        }

        //是否通过到底触发
        if (that.data.is_tolower) {
          that.setData({
            is_tolower: false
          });
        }

        //是否有更多
        if (rtn.data.count > ((that.data.pagesize - 1) * that.data.pageindex + rtn.data.data.length)) {
          that.setData({
            hasMore: true
          });
        }
        else {
          that.setData({
            hasMore: false
          });
        }
      }
      else {
        if (that.data.pageindex == 1) {
          that.setData({
            hasdata: false
          });
        }

        that.setData({
          hasMore: false
        });

        if (that.data.is_tolower) {
          that.setData({
            is_tolower: false
          });
        }
      }
      callback();
    });
  },
  search: function(e){
    this.setData({
      list: [],
      pageindex: 1,
      is_tolower: false,
      hasdata: false,
      hasMore: false
    });

    this.getList(function () {
      //do nothing
    });
  }
});