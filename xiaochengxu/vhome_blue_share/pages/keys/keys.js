// list.js
var app = getApp();
var hasload = false;

Page({

    /**
     * 页面的初始数据
     */
    data: {
        list: [],
        loading: true
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that = this;
        hasload = false;
        app.wechatlogin(function () {
            that.getdata(function () {
                hasload = true;
            }.bind(this));
        });
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
        this.getdata(function () {
            wx.stopPullDownRefresh();
        }.bind(this));
    },

    onShow: function () {
        if (hasload) {
            app.wechatlogin(function () {
                this.getdata(function () {

                }.bind(this));
            }.bind(this));
        }
    },

    getdata: function (cb) {
        var that = this;
        app.showLoading('加载中…');

        //session有效
        var url = app.globalData.wxurl + '/voc/keylist';
        var param = { third_session: app.globalData.third_session.value };
        var query_param = app.paramToQuery(param);
        url = url + query_param;

        var data = {};
        var action = { header: 'application/x-www-form-urlencoded', method: 'get', url: url };
        app.api(action, data, function (rtn) {
            app.hideLoading();
            if (rtn.code == 0 && rtn.data.length > 0) {
                that.setData({
                    list: rtn.data,
                    loading: false
                });
                cb();
            }
            else {
                app.showToast('没有钥匙', '/images/cry_white.png', 'img');
                setTimeout(function () {
                    wx.redirectTo({
                        url: '../login/login'
                    });
                }, 300);
            }
        });
    },

    goto_url: function (e) {
        var index = e.currentTarget.dataset.index;
        var data = this.data.list[index];
        var mid = data.modelName;
        var did = data.deviceKeyId;
        
        wx.navigateTo({
            url: '../share/share?mid=' + mid + '&did=' + did
        });
    }

})