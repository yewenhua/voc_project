var app = getApp();
var initdata = function (that) {
    var carts = that.data.carts;
    for (var i = 0; i < carts.length; i++) {
        carts[i].txtStyle = "";
    }
    that.setData({ carts: carts });
}

Page({
    data: {
        selectedAll: false,
        total: 0,
        carts: [
            { value: 0, total: '10', checked: true, imgUrl: '../../images/cha.jpg', id: 1, name: '武夷山大红袍 + 专享茶壶', count: 1, price: 99, cartID: 1, txtStyle: '' },
            { value: 1, total: '10', imgUrl: '../../images/hua.jpg', id: 1, name: '武夷山大红袍 + 专享茶壶', count: 1, price: 99, cartID: 1, txtStyle: '' }
        ],

        delBtnWidth: 180,//删除按钮宽度单位（rpx）  
        startX: 0
    },

    checkboxChange: function (e) {
        var carts = this.data.carts, values = e.detail.value;
        for (var i = 0, lenI = carts.length; i < lenI; ++i) {
            carts[i].checked = false;

            for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
                if (carts[i].value == values[j]) {
                    carts[i].checked = true;
                    break;
                }
            }
        }

        if (values.length == this.data.carts.length){
            this.setData({
                carts: carts,
                selectedAll: true
            });
        }
        else{
            this.setData({
                carts: carts,
                selectedAll: false
            });
        }
        
        this.sum();
    },

    allSelect(){
        var temp = this.data.carts;
        if (this.data.selectedAll){
            for (var i = 0; i < temp.length; i++) {
                temp[i].checked = false;
            }
            
            this.setData({
                selectedAll: false,
                carts: temp
            });
        }
        else{
            for (var i = 0; i < temp.length; i++) {
                temp[i].checked = true;
            }

            this.setData({
                selectedAll: true,
                carts: temp
            });
        }
        this.sum();
    },

    changeNum: function (e) {
        var that = this;
        var index = e.target.dataset.index;
        var temp = this.data.carts;
        if (e.target.dataset.alphaBeta == 0) {
            if (temp[index].count > 1) {
                temp[index].count = temp[index].count - 1;
                this.setData({
                    carts: temp
                });
                this.sum();
            };
        } else {
            if (temp[index].count < temp[index].total) {
                temp[index].count = temp[index].count + 1;
                this.setData({
                    carts: temp
                });
                this.sum();
            }
        };
    },

    onLoad: function (options) {
        this.sum();
        this.initEleWidth();
    },

    onShow: function () {
        this.sum();
    },

    stop: function(){
    },

    sum(){
        var total = 0;
        for (var i = 0; i < this.data.carts.length; i++){
            if (this.data.carts[i].checked){
                total = total + this.data.carts[i].count * this.data.carts[i].price;
            }
        }

        this.setData({
            total: total
        })
    },

    preview: function () {
        wx.navigateTo({
            url: '../preview/preview'
        });
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
        initdata(that);
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
            console.log(index);
            var carts = this.data.carts;
            carts[index].txtStyle = txtStyle;
            //更新列表的状态  
            this.setData({
                carts: carts
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
            var carts = this.data.carts;
            carts[index].txtStyle = txtStyle;
            //更新列表的状态  
            this.setData({
                carts: carts
            });
        }
    },
    //获取元素自适应后的实际宽度  
    getEleWidth: function (w) {
        var real = 0;
        try {
            var res = wx.getSystemInfoSync().windowWidth;
            var scale = (750 / 2) / (w / 2);//以宽度750px设计稿做宽度的自适应  
             
            real = Math.floor(res / scale);
            return real;
        } catch (e) {
            return false;
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
                    var carts = that.data.carts;
                    //移除列表中下标为index的项  
                    carts.splice(index, 1);
                    //更新列表的状态  
                    that.setData({
                        carts: carts
                    });
                    that.sum();
                } else {
                    initdata(that);
                }
            }
        })

    }
})