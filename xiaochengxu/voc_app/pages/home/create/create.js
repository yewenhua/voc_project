// invite.js
var app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo: {},
        name: '',
        description: '',
        picture: '',
        disabled: false,
        nameDisabled: true,
        descDisabled: true,
        pictureDisabled: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that = this;
        app.getUserInfo(function (userInfo) {
            //更新数据
            that.setData({
                userInfo: userInfo,
                picture: userInfo.avatarUrl
            })
        });
    },

    create: function(){
        var that = this;
        var login_url = '../../login/login';
        app.showLoading('提交中…');
        that.setData({
            disabled: true
        });

        app.getAccessToken(function () {
            var url = app.globalData.baseurl + '/group/create';
            var data = {
                name: that.data.name,
                description: that.data.description,
                picture: that.data.picture
            };
            var param = { access_token: app.globalData.login_session.access_token };
            var query_param = app.paramToQuery(param);
            url = url + query_param;
            var action = { action: 'createHome', method: 'post', url: url };

            app.api(data, action, function (rtn) {
                app.hideLoading();
                if (rtn.hasOwnProperty('type') && rtn.type == 'SUCCESS') {
                    app.showToast('创建成功', 'success', 'icon');
                    that.setData({
                        name: '',
                        description: '',
                        disabled: false,
                        nameDisabled: true,
                        descDisabled: true,
                        pictureDisabled: false
                    });
                    setTimeout(function(){
                        wx.switchTab({
                            url: '../../index/index'
                        });
                    }, 1500);
                }
                else {
                    that.setData({
                        disabled: false
                    });
                    app.showToast('创建失败', '../../../assets/images/warn_fill.png', 'img');
                }
            });
        }, login_url);
    },
    chooseImage: function () {
        wx.chooseImage({
            count: 1, // 默认9
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: function (res) {
                // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                var tempFilePaths = res.tempFilePaths;
                app.showToast('图片地址==>' + tempFilePaths[0], 'success', 'icon');

                /*
                wx.uploadFile({
                    url: 'http://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
                    filePath: tempFilePaths[0],
                    name: 'file',
                    formData: {
                        'user': 'test'
                    },
                    success: function (res) {
                        var data = res.data
                        //do something
                    }
                });
                */
            }
        })
    },
    nameinput: function (e) {
        var that = this;
        if (e.detail.value) {
            this.setData({
                name: e.detail.value,
                nameDisabled: false
            });
        }
        else {
            this.setData({
                nameDisabled: true,
                name: ''
            });
        }
    },
    descinput: function (e) {
        var that = this;
        if (e.detail.value) {
            this.setData({
                description: e.detail.value,
                descDisabled: false
            });
        }
        else {
            this.setData({
                descDisabled: true,
                description: ''
            });
        }
    },
})