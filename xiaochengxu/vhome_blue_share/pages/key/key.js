// pages/key/key.js
var app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        code: ''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that = this;
        this.setData({
            code: options.code ? options.code : ''
        });

        app.showLoading('钥匙领取中…');
        app.globalData.keyCode = options.code;
        app.wechatlogin(function(){
            console.log('key wechatlogin');
            that.getdata(function () {
                app.isbind(function(){
                    //success
                    wx.redirectTo({
                        url: '../list/list'
                    });
                }, function(){
                    //fail
                    wx.redirectTo({
                        url: '../keys/keys'
                    });
                });
            });
        });
    },

    getdata: function (cb) {
        var that = this;
        var url = app.globalData.wxurl + '/voc/getkey';
        var param = { code: that.data.code, third_session: app.globalData.third_session.value };
        var query_param = app.paramToQuery(param);
        url = url + query_param;

        var data = {};
        var action = { header: 'application/x-www-form-urlencoded', method: 'get', url: url };
        app.api(action, data, function (rtn) {
            app.hideLoading();
            if (rtn.code == 0) {
                cb();
            }
            else {
                app.showToast(rtn.message, '/images/cry_white.png', 'img');
                setTimeout(function () {
                    cb();
                }, 1000);
            }
        });
    },

})