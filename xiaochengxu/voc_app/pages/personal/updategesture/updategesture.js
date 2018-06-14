var Lock = require('../../../lib/gesture_lock.js');

//获取应用实例
var app = getApp();
Page({
    data: {
        userInfo: {},
        stage: -1,
        error: false,
        errorCount: 0,
        msg: '请输入原密码',
        passwd: '',
        original: ''
    },

    onLoad: function (options) {
        var that = this;
        var voc_pwd = wx.getStorageSync('voc_pwd');
        app.globalData.gesturepasswd = voc_pwd;
        that.setData({
            original: app.globalData.gesturepasswd
        });

        that.lock = new Lock("id-gesture-lock", wx.createCanvasContext("id-gesture-lock"), function () {
            var passwd = '';
            for (let i = 0; i < that.lock.checkPoints.length; i++) {
                if (that.lock.checkPoints[i].check == 'check') {
                    if (passwd == '') {
                        passwd = that.lock.checkPoints[i].index;
                    }
                    else {
                        passwd = passwd + ',' + that.lock.checkPoints[i].index;
                    }
                }
            }

            if (passwd.length < 11) {
                that.lock.drawCanvas(that.lock.errorColor);
                that.setData({
                    msg: '密码至少包含6个点',
                    error: true
                });
            }
            else {
                if (that.data.stage == -1) { // 输入原密码
                    if (that.data.original != passwd) {
                        //密码错误
                        that.lock.drawCanvas(that.lock.errorColor);
                        var newErrCount = that.data.errorCount + 1;
                        that.setData({
                            msg: '密码不正确',
                            error: true,
                            errorCount: newErrCount
                        });
                    }
                    else{
                        that.lock.drawCanvas(that.lock.successColor);
                        that.setData({
                            stage: 0,
                            msg: '请输入新密码',
                            error: false
                        });
                    }
                }
                else if (that.data.stage == 0) { // 第1次输入密码
                    that.lock.drawCanvas(that.lock.successColor);
                    that.setData({
                        msg: '请再输入一次密码',
                        error: false,
                        passwd: passwd,
                        stage: 1
                    });
                }
                else if (that.data.stage == 1) { // 第2次输入密码
                    if (that.data.passwd != passwd) {
                        //密码错误
                        that.lock.drawCanvas(that.lock.errorColor);
                        if (that.data.errorCount == 2) {
                            that.setData({
                                msg: '连续输入错误3次，请重新输入密码',
                                error: true,
                                stage: -1,
                                errorCount: 0,
                                passwd: ''
                            });
                        }
                        else {
                            var newErrCount = that.data.errorCount + 1;
                            that.setData({
                                msg: '两次输入密码不同',
                                error: true,
                                errorCount: newErrCount
                            });
                        }
                    }
                    else {
                        wx.setStorageSync('voc_pwd', passwd);
                        app.globalData.gesturepasswd = passwd;
                        that.lock.drawCanvas(that.lock.successColor);
                        that.setData({
                            msg: '密码设置成功',
                            error: false
                        });

                        setTimeout(function () {
                            wx.switchTab({
                                url: '../../index/index'
                            });
                        }, 1000);
                    }
                }
            }

            setTimeout(function () {
                that.lock.reset();
            }, 1000);
        }, { width: 300, height: 300 });
        that.lock.drawGestureLock();
    },
    onTouchStart: function (e) {
        this.lock.onTouchStart(e);
    },
    onTouchMove: function (e) {
        this.lock.onTouchMove(e);
    },
    onTouchEnd: function (e) {
        this.lock.onTouchEnd(e);
    }
})
