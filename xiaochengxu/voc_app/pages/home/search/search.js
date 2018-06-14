var app = getApp();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        value: '',
        disabled: true,
        datalist: [],
        hasdata: false,
        userInfo: {},
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
        })
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
    },
    search: function () {
        var that = this;
        var login_url = '../../login/login';
        app.showLoading('请求中…');

        app.getAccessToken(function () {
            var url = app.globalData.baseurl + '/group/search/' + that.data.value;
            var data = {};
            var param = { access_token: app.globalData.login_session.access_token };
            var query_param = app.paramToQuery(param);
            url = url + query_param;
            var action = { action: 'serachHome', method: 'get', url: url };

            app.api(data, action, function (rtn) {
                app.hideLoading();
                if (rtn.hasOwnProperty('type') && rtn.type == 'SUCCESS') {
                    that.setData({
                        datalist: rtn.data,
                        hasdata: true
                    });
                }
                else {
                    app.showToast('没有数据', '../../../assets/images/warn_fill.png', 'img');
                    that.setData({
                        datalist: [],
                        hasdata: false
                    });
                }
            });
        }, login_url);
    }

})