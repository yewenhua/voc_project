Page({
    data: {

    },
    onLoad: function (options) {
        // 页面初始化 options为页面跳转所带来的参数
    },
    
    onShow: function () {
        // 页面显示
    },
    
    tosearch: function () {
        wx.navigateTo({
            url: '../searchProduct/searchProduct'
        })
    },
    topay: function () {
        wx.navigateTo({
            url: '../pay/pay'
        })
    }
})