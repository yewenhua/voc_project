
var app = getApp();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        disabled: false,
        accountinput: false,
        account: '',
        codeinput: false,
        pwdinput: false,
        mobile_exist: false,
        code_active: false,
        password:'',
        pwd: true,
        code:'',
        eyecolor: '#ddd',
        clickActive: false,
        leftsecond: 60,
        sendbtn:'获取验证码'
    },

    accountblur: function (e) {
        var that = this;
        if (e.detail.value) {
            that.setData({
                account: e.detail.value,
                accountinput: true
            });
        }
        else {
            that.setData({
                accountinput: false,
                account:''
            });
        }

        //验证手机号码
        var mobilereg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
        if (that.data.account && that.data.account.length == 11 && mobilereg.test(that.data.account)) {
            var url = app.globalData.baseurl + '/account/global/validate';
            var data = { fieldId: 'phone', fieldValue: that.data.account };
            var action = { header: 'application/json', method: 'get', url: url };
            app.api(action, data, function (rtn) {
                if (rtn.hasOwnProperty('type') && rtn.type == 'SUCCESS') {
                    app.showToast('该手机号可用', 'success', 'icon');
                    that.setData({
                        mobile_validate: true
                    });
                }
                else{
                    app.showToast('该手机号已注册', '../../images/cry_white.png', 'img');
                    that.setData({
                        mobile_validate: false
                    });
                }
            });
        }
        else{
            that.setData({
                mobile_validate: false
            });
        }
    },

    pwdblur: function (e) {
        if (e.detail.value) {
            this.setData({
                pwdinput: true,
                password: e.detail.value
            });
        }
        else {
            this.setData({
                pwdinput: false,
                password: ''
            });
        }
    },
    codeblur: function (e) {
        var that = this;
        if (e.detail.value) {
            this.setData({
                codeinput: true,
                code: e.detail.value
            });
        }
        else {
            this.setData({
                codeinput: false,
                code: ''
            });
        }

        //验证验证码
        if (that.data.code && that.data.code.length == 6) {
            var url = app.globalData.baseurl + '/sms/global/validate/Register/' + that.data.account;
            var data = { phone: that.data.account, code: that.data.code };
            var action = { header: 'application/json', method: 'get', url: url };
            app.api(action, data, function (rtn) {
                if (rtn.hasOwnProperty('type') && rtn.type == 'SUCCESS') {
                    that.setData({
                        code_active: true
                    });
                }
                else {
                    app.showToast('验证码错误', '../../images/cry_white.png', 'img');
                    that.setData({
                        code_active: false
                    });
                }
            });
        }
        else {
            that.setData({
                code_active: false
            });
        }
    },
    changeeyecolor: function () {
        if (this.data.eyecolor == '#ddd') {
            this.setData({
                eyecolor: '#ed6501',
                pwd: false
            });
        }
        else {
            this.setData({
                eyecolor: '#ddd',
                pwd: true
            });
        }
    },
    login: function () {
        wx.navigateTo({
            url: '../login/login'
        });
    },
    sendcode: function(){
        var that = this;
        var mobilereg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
        if (that.data.account && that.data.account.length == 11 && mobilereg.test(that.data.account)){
            if (!that.data.mobile_exist) {
                if (!that.data.clickActive){
                    that.setData({
                        clickActive: true,
                        sendbtn: '60S后重试'
                    });

                    var tt = setInterval(function(){
                        if (that.data.leftsecond > 1){
                            var temp = that.data.leftsecond - 1;
                            that.setData({
                                leftsecond: temp,
                                sendbtn: temp + 'S后重试'
                            });
                        }
                        else{
                            clearInterval(tt);
                            that.setData({
                                clickActive: false,
                                leftsecond: 60,
                                sendbtn: '获取验证码'
                            });
                        }
                    }, 1000);

                    var url = app.globalData.baseurl + '/sms/global/generator/Register/' + that.data.account;
                    var data = {};
                    var action = { header: 'application/json', method: 'get', url: url };
                    app.api(action, data, function (rtn) {
                        if (rtn.hasOwnProperty('type') && rtn.type == 'SUCCESS') {
                            app.showToast('发送成功', 'success', 'icon');
                        }
                        else {
                            app.showToast('发送失败', '../../images/cry_white.png', 'img');
                        }
                    });
                }
            }
            else {
                app.showToast('该手机已注册', '../../images/cry_white.png', 'img');
            }
        }
        else{
            app.showToast('请填写正确手机', '../../images/cry_white.png', 'img');
        }
    },
    /**
     * regist
     */
    formsubmit: function (e) {
        var that = this;
        var mobilereg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
        var postdata = e.detail.value;
        var phone = postdata.phone;
        var password = postdata.password;
        var code = postdata.code;

        if (phone.trim() == '') {
            app.showToast('请输入手机号码', '../../images/cry_white.png', 'img');
            return false;
        }
        if (phone.length != 11 || !mobilereg.test(phone)) {
            app.showToast('请填写正确手机', '../../images/cry_white.png', 'img');
            return false;
        }

        if (password.trim() == '') {
            app.showToast('请输入密码', '../../images/cry_white.png', 'img');
            return false;
        }
        if (code.trim() == '') {
            app.showToast('请输入验证码', '../../images/cry_white.png', 'img');
            return false;
        }

        if (!that.data.mobile_exist) {
            if (that.data.code_active) {
                app.showLoading('提交中…');
                that.setData({
                    disabled: true
                });

                var url = app.globalData.baseurl + '/account/global/create';
                var data = { username: phone, password: password, code: code };
                var action = { header: 'application/json', method: 'post', url: url };
                app.api(action, data, function (rtn) {
                    app.hideLoading();
                    that.setData({
                        disabled: false
                    });

                    if (rtn.hasOwnProperty('type') && rtn.type == 'SUCCESS') {
                        app.showToast('注册成功', 'success', 'icon');
                        var tt = setTimeout(function () {
                            wx.redirectTo({
                                url: '../login/login'
                            });
                        }, 1500);
                    }
                    else {
                        app.showToast('注册失败', '../../images/cry_white.png', 'img');
                    }
                });
            }
            else{
                app.showToast('验证码错误', '../../images/cry_white.png', 'img');
            }
        }
        else{
            app.showToast('该手机已注册', '../../images/cry_white.png', 'img');
        }
    }
})