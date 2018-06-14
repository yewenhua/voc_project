var app = getApp();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        value: '',
        disabled: true
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    input: function (e) {
        var that = this;
        if (e.detail.value) {
            this.setData({
                value: e.detail.value,
                disabled: false
            });
        }
        else {
            this.setData({
                value: '',
                disabled: true
            });
        }
    }

})