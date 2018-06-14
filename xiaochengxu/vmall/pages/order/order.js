//index.js
//获取应用实例
var sliderWidth = 60; // 需要设置slider的宽度，用于计算中间位置

Page({
    data: {
        tabs: ["全部", "待付款", "待发货", "待收货"],
        activeIndex: 0,
        sliderOffset: 0,
        sliderLeft: 0,
        screenWidth: ''
    },
    onLoad: function () {
        // var states = parseInt(options.states);
        var that = this;
        var states = 0;
        this.setData({
            states: states,
        });

        wx.getSystemInfo({
            success: function (res) {
                that.setData({
                    screenWidth: res.screenWidth,
                    sliderLeft: (res.screenWidth / that.data.tabs.length - sliderWidth) / 2,
                    sliderOffset: res.screenWidth / that.data.tabs.length * that.data.activeIndex
                });
            }
        });
    },
    tabClick: function (e) {
        this.setData({
            sliderOffset: e.currentTarget.offsetLeft,
            activeIndex: e.currentTarget.id
        });
    },
    currentChanged: function (e) {
        this.setData({
            sliderOffset: this.data.screenWidth / this.data.tabs.length * e.detail.current,
            activeIndex: e.detail.current
        });
    }
})