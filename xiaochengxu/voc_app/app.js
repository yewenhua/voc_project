//app.js
App({
    globalData: {
        userInfo: null,
        login_session: '',
        gesturepasswd: '',
        groupid: '',
        uid: '',
        authurl: 'http://vhome.voc.so',
        baseurl: 'http://vhome.voc.so/v1'
    },
    onLaunch: function(){
        return false;
        var that = this;
        that.checkLogin(function(){
            var login_url = 'pages/login/login';
            that.self(login_url);
        });
    },
    onShow: function (options){
        return false;
        this.checkLogin(function(){
            var voc_hide = wx.getStorageSync('voc_hide');
            if (voc_hide == 'true') {
                if (options.path != 'pages/login/login' && options.path != 'pages/forget/forget' && options.path != 'pages/regist/regist') {
                    var arr = options.path.split('/');
                    var pre_num = arr.length - 2;
                    var prefix = '';
                    for (var i = 1; i <= pre_num; i++) {
                        prefix = '../' + prefix
                    }
                    wx.reLaunch({
                        url: prefix + 'gesture/gesture?path=' + options.path
                    });
                }
            }
        });
    },
    onHide: function () {
        wx.setStorageSync('voc_hide', 'true');
    },
    checkLogin: function (callback) {
        var login_session = wx.getStorageSync('login_session');
        if (!login_session) {
            //无token
            wx.removeStorageSync('login_session');
            wx.reLaunch({
                url: 'pages/login/login'
            });
        }
        else{
            this.globalData.login_session = login_session;
            callback();
        }
    },

    getAccessToken: function (callback, login_url) {
        var that = this;
        var login_session = wx.getStorageSync('login_session');
        that.globalData.login_session = login_session;
        var refresh_token = login_session.refresh_token;
        var expire_time = login_session.expire_time;
        var refresh_expire_time = login_session.expire_time + 7 * 24 * 60 * 60 * 1000;
        var now = (new Date()).getTime();
        if (now < expire_time) {
            //access_token有效
            if (typeof (callback) == 'function') {
                callback();
            }
        }
        else if (now >= expire_time && now < refresh_expire_time) {
            //refresh_token有效，去刷新
            that.refresh_token(callback, login_url, refresh_token);
        }
        else {
            //refresh_token和access_token都失效，重新登录
            wx.removeStorageSync('login_session');
            wx.reLaunch({
                url: login_url
            });
        }
    },

    getUserInfo: function(cb) {
        var that = this;
        if (this.globalData.userInfo) {
            typeof cb == "function" && cb(this.globalData.userInfo)
        } else {
            //调用登录接口
            wx.getUserInfo({
                withCredentials: false,
                success: function(res) {
                    that.globalData.userInfo = res.userInfo
                    typeof cb == "function" && cb(that.globalData.userInfo)
                }
            })
        }
    }, 

    refresh_token: function (callback, login_url, refresh_token){
        var that = this;
        var url = that.globalData.authurl + '/oauth/token?client_id=e41df05b-f963-4a66-a8cd-8596d1564fee&client_secret=3ca4b24f-d2cd-44cc-b5c9-31f88c7c5631&grant_type=refresh_token&refresh_token=' + refresh_token;
        var data = {};
        var action = { action: 'refresh', method: 'post', url: url };

        that.api(data, action, function (rtn) {
            if (rtn.hasOwnProperty('access_token')) {
                var obj = {
                    access_token: rtn.access_token,
                    refresh_token: rtn.refresh_token,
                    expire_time: (new Date()).getTime() + 3600 * 1000
                };
                wx.setStorageSync('login_session', obj);//存储login_session
                that.globalData.login_session = obj;
                if (typeof (callback) == 'function') {
                    callback();
                }
            }
            else {
                wx.removeStorageSync('login_session');
                wx.reLaunch({
                    url: login_url
                });
            }
        });
    },

    api: function (data, action, callback) {
        var that = this;
        if (action.action == 'login'){
            var contentType = 'application/x-www-form-urlencoded';
        }
        else{
            var contentType = 'application/json';
        }

        wx.request({
            method: action.method,
            url: action.url,
            header: {
                'Content-Type': contentType
            },
            data: data,
            success: function (res) {
                if (typeof (callback) == 'function') {
                    callback(res.data);
                }
            }
        });
    },
    paramToQuery: function(data){
        var param = '';
        if (data && typeof data == "object"){
            for (var key in data){
                if (param == ''){
                    param = key + '=' + data[key];
                }
                else{
                    param = param + '&' + key + '=' + data[key];
                }
            }
            param = '?' + param;
        }
        return param;
    },
    
    showToast: function (text, icon, type = 'icon') {
        if (type == 'icon') {
            wx.showToast({
                title: text,
                icon: icon,
            });
        }
        else {
            wx.showToast({
                title: text,
                image: icon,
            });
        }
    },
    showLoading: function (text) {
        wx.showLoading({
            title: text,
            mask: true
        })
    },
    hideLoading: function () {
        wx.hideLoading();
    },
    self: function (login_url) {
        var that = this;

        that.getAccessToken(function () {
            var url = that.globalData.baseurl + '/user/self';
            var data = {};
            var param = { access_token: that.globalData.login_session.access_token };
            var query_param = that.paramToQuery(param);
            url = url + query_param;
            var action = { action: 'self', method: 'get', url: url };

            that.api(data, action, function (rtn) {
                if (rtn.hasOwnProperty('type') && rtn.type == 'SUCCESS') {
                    that.globalData.groupid = rtn.data.currentGroup;
                    that.globalData.uid = rtn.data.id;
                }
                else {
                    wx.removeStorageSync('login_session');
                    wx.reLaunch({
                        url: login_url
                    });
                }
            });
        }, login_url);
    }
})
