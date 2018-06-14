// pages/upvideo/upvideo.js
var app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        prelist: [],
        playing: false,
        audio_time: 0,
        label: '',
        disabled: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that = this;

        that.setData({
            prelist: app.globalData.prelist,
            audio_time: app.globalData.audio_time
        });
    },

    //页面卸载
    onUnload() {
        app.globalData.prelist = [];
        app.globalData.audio_time = 0;
    },

    voice() {
        var that = this;
        const innerAudioContext = wx.createInnerAudioContext();
        innerAudioContext.autoplay = true;
        innerAudioContext.src = this.data.prelist[0];
        innerAudioContext.onPlay(() => {
            that.setData({
                playing: true
            });
            app.showToast('播放成功', 'success', 'icon');
        });

        innerAudioContext.onError((res) => {
            app.showToast('播放失败', 'success', 'icon');
        });

        innerAudioContext.onEnded(() => {
            that.setData({
                playing: false
            });
            app.showToast('播放结束', 'success', 'icon');
        });
    },

    labelblur: function (e) {
        if (e.detail.value) {
            this.setData({
                label: e.detail.value
            });
        }
        else {
            this.setData({
                label: ''
            });
        }
    },

    upload() {
        if (!this.data.label) {
            app.showToast('请输入标签', '../../images/cry_white.png', 'img');
            return false;
        }

        this.setData({
            disabled: true
        });

        var url = app.globalData.baseurl + '/api/savefile';
        var data = {
            label: this.data.label,
            ftype: 'audio',
            time: this.data.audio_time
        };
        var action = { url: url, path: this.data.prelist[0] };
        app.showLoading('提交中…');
        app.upload(action, data, function (rtn) {
            var res = JSON.parse(rtn);

            if (res.code == 0) {
                app.showToast('提交成功', 'success', 'icon');
                setTimeout(function () {
                    app.hideLoading();
                    wx.navigateBack({
                        delta: 1
                    });
                }, 1500);
            }
            else {
                app.hideLoading();
                setTimeout(function () {
                    app.showToast('提交出错', '../../images/cry_white.png', 'img');
                }, 300);
            }
        });
    }
})