// switch.js
var app = getApp();
var initdata = function (that) {
    var list = that.data.list
    for (var i = 0; i < list.length; i++) {
        list[i].txtStyle = ""
    }
    that.setData({ list: list })
}

Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo: {},
        delBtnWidth: 180,//删除按钮宽度单位（rpx）  
        list: []
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
        this.initEleWidth();
        this.getList();
    },
    touchS: function (e) {
        if (e.touches.length == 1) {
            this.setData({
                //设置触摸起始点水平方向位置  
                startX: e.touches[0].clientX
            });
        }
    },
    touchM: function (e) {
        var that = this
        initdata(that)
        if (e.touches.length == 1) {
            //手指移动时水平方向位置  
            var moveX = e.touches[0].clientX;
            //手指起始点位置与移动期间的差值  
            var disX = this.data.startX - moveX;
            var delBtnWidth = this.data.delBtnWidth;
            var txtStyle = "";
            if (disX == 0 || disX < 0) {//如果移动距离小于等于0，文本层位置不变  
                txtStyle = "left:0px";
            } else if (disX > 0) {//移动距离大于0，文本层left值等于手指移动距离  
                txtStyle = "left:-" + disX + "px";
                if (disX >= delBtnWidth) {
                    //控制手指移动距离最大值为删除按钮的宽度  
                    txtStyle = "left:-" + delBtnWidth + "px";
                }
            }
            //获取手指触摸的是哪一项  
            var index = e.target.dataset.index;
            var list = this.data.list;
            list[index].txtStyle = txtStyle;
            //更新列表的状态  
            this.setData({
                list: list
            });
        }
    },

    touchE: function (e) {
        if (e.changedTouches.length == 1) {
            //手指移动结束后水平位置  
            var endX = e.changedTouches[0].clientX;
            //触摸开始与结束，手指移动的距离  
            var disX = this.data.startX - endX;
            var delBtnWidth = this.data.delBtnWidth;
            //如果距离小于删除按钮的1/2，不显示删除按钮  
            var txtStyle = disX > delBtnWidth / 2 ? "left:-" + delBtnWidth + "px" : "left:0px";
            //获取手指触摸的是哪一项  
            var index = e.target.dataset.index;
            var list = this.data.list;
            list[index].txtStyle = txtStyle;
            //更新列表的状态  
            this.setData({
                list: list
            });
        }
    },
    //获取元素自适应后的实际宽度  
    getEleWidth: function (w) {
        var real = 0;
        try {
            var res = wx.getSystemInfoSync().windowWidth;
            var scale = (750 / 2) / (w / 2);//以宽度750px设计稿做宽度的自适应  
            // console.log(scale);  
            real = Math.floor(res / scale);
            return real;
        } catch (e) {
            return false;
            // Do something when catch error  
        }
    },
    initEleWidth: function () {
        var delBtnWidth = this.getEleWidth(this.data.delBtnWidth);
        this.setData({
            delBtnWidth: delBtnWidth
        });
    },
    //点击删除按钮事件  
    delItem: function (e) {
        var that = this
        wx.showModal({
            title: '提示',
            content: '确定要删除？',
            success: function (res) {
                if (res.confirm) {
                    //获取列表中要删除项的下标  
                    var index = e.target.dataset.index;
                    var list = that.data.list;
                    //移除列表中下标为index的项  
                    list.splice(index, 1);
                    //更新列表的状态  
                    that.setData({
                        list: list
                    });
                } else {
                    initdata(that)
                }
            }
        })

    },
    init: function(){
        var that = this;
        initdata(that);
    },
    getList: function () {
        var that = this;
        var login_url = '../../login/login';
        app.showLoading('请求中…');

        app.getAccessToken(function () {
            var url = app.globalData.baseurl + '/group/list';
            var data = {};
            var param = { access_token: app.globalData.login_session.access_token };
            var query_param = app.paramToQuery(param);
            url = url + query_param;
            var action = { action: 'homeList', method: 'get', url: url };

            app.api(data, action, function (rtn) {
                app.hideLoading();
                if (rtn.hasOwnProperty('type') && rtn.type == 'SUCCESS') {
                    for (var i = 0; i < rtn.data.length; i++) {
                        if (rtn.data[i].id == app.globalData.groupid) {
                            rtn.data[i].isMain = true;
                        }
                        else {
                            rtn.data[i].isMain = false;
                        }
                    }
                    
                    that.setData({
                        list: rtn.data
                    });
                    initdata(that);
                }
                else {
                    app.showToast('数据请求失败', '../../../assets/images/warn_fill.png', 'img');
                }
            });
        }, login_url);
    },
})