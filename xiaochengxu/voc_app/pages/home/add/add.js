// invite.js
var app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo: {},
        detail: null
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that = this;
        app.getUserInfo(function (userInfo) {
            //更新数据
            that.setData({
                userInfo: userInfo
            })
        });
        var id = options.id;
        this.detail(id);
    },
    detail: function (id) {
        var that = this;
        var login_url = '../../login/login';
        app.showLoading('请求中…');

        app.getAccessToken(function () {
            var url = app.globalData.baseurl + '/group/' + id;
            var data = {};
            var param = { access_token: app.globalData.login_session.access_token };
            var query_param = app.paramToQuery(param);
            url = url + query_param;
            var action = { action: 'homeDetail', method: 'get', url: url };

            app.api(data, action, function (rtn) {
                app.hideLoading();
                if (rtn.hasOwnProperty('type') && rtn.type == 'SUCCESS') {
                    that.setData({
                        detail: rtn.data,
                    });
                }
                else {
                    app.showToast('没有数据', '../../../assets/images/warn_fill.png', 'img');
                    that.setData({
                        detail: [],
                    });
                }
            });
        }, login_url);
    }
    
})