//index.js
//获取应用实例
var app = getApp()
Page({
    data: {
        imgUrls: [
            'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
        ],
        indicatorDots: true,
        autoplay: true,
        circular: true,
        interval: 3000,
        duration: 500
    },

    getData(){
        var that = this;
        wx.request({
            method: action.method,
            url: action.url,
            header: {
                'Content-Type': action.header
            },
            data: data,
            success: function (res) {
                if (res.data.code != 99999) {
                    if (typeof (callback) == 'function') {
                        callback(res.data);
                    }
                }
                else {
                    wx.removeStorageSync('login_session');
                    wx.redirectTo({
                        url: '../login/login'
                    });
                }
            }
        });
    },

    detail(){
        wx.navigateTo({
            url: '../detail/detail'
        });
    }
});