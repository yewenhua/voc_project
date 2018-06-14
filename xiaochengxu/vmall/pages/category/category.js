Page({
    data: {
        contentid: 0,
        menuid: 0,
        classfiyNav: [
            {
                "text": "女装"
            },
            {
                "text": "男装"
            },
            {
                "text": "运动"
            },
            {
                "text": "家居"
            },
            {
                "text": "电子"
            },
            {
                "text": "美妆"
            },
            {
                "text": "童装"
            },
            {
                "text": "家具"
            }
        ],
        classfiyList: [
            {
                "text": "进入1频道 >",
                // 示例格式
                "list": [
                    {
                        "img": "../../images/hua.jpg",
                        "text": "武夷山大红袍，买三赠一"
                    },
                    {
                        "img": "../../images/xie.jpg",
                        "text": "武夷山大红袍，买三赠一"
                    },
                    {
                        "img": "../../images/tixudao.jpg",
                        "text": "武夷山大红袍，买三赠一"
                    },
                    {
                        "img": "../../images/xian.jpg",
                        "text": "武夷山大红袍，买三赠一"
                    },
                    {
                        "img": "../../images/cha.jpg",
                        "text": "武夷山大红袍，买三赠一"
                    },
                    {
                        "img": "../../images/xie.jpg",
                        "text": "武夷山大红袍，买三赠一"
                    }
                ]
            },
            {
                "text": "进入2频道 >",
                // 示例格式
                "list": [
                    {
                        "img": "../../images/hua.jpg",
                        "text": "武夷山大红袍，买三赠一"
                    },
                    {
                        "img": "../../images/xie.jpg",
                        "text": "武夷山大红袍，买三赠一"
                    },
                    {
                        "img": "../../images/tixudao.jpg",
                        "text": "武夷山大红袍，买三赠一"
                    },
                    {
                        "img": "../../images/xian.jpg",
                        "text": "武夷山大红袍，买三赠一"
                    },
                    {
                        "img": "../../images/cha.jpg",
                        "text": "武夷山大红袍，买三赠一"
                    },
                    {
                        "img": "../../images/xie.jpg",
                        "text": "武夷山大红袍，买三赠一"
                    }
                ]
            },{
                "text": "进入3频道 >",
                // 示例格式
                "list": [
                    {
                        "img": "../../images/hua.jpg",
                        "text": "武夷山大红袍，买三赠一"
                    },
                    {
                        "img": "../../images/xie.jpg",
                        "text": "武夷山大红袍，买三赠一"
                    },
                    {
                        "img": "../../images/tixudao.jpg",
                        "text": "武夷山大红袍，买三赠一"
                    },
                    {
                        "img": "../../images/xian.jpg",
                        "text": "武夷山大红袍，买三赠一"
                    },
                    {
                        "img": "../../images/cha.jpg",
                        "text": "武夷山大红袍，买三赠一"
                    },
                    {
                        "img": "../../images/xie.jpg",
                        "text": "武夷山大红袍，买三赠一"
                    }
                ]
            },
            {
                "text": "进入4频道 >",
                // 示例格式
                "list": [
                    {
                        "img": "../../images/hua.jpg",
                        "text": "武夷山大红袍，买三赠一"
                    },
                    {
                        "img": "../../images/xie.jpg",
                        "text": "武夷山大红袍，买三赠一"
                    },
                    {
                        "img": "../../images/tixudao.jpg",
                        "text": "武夷山大红袍，买三赠一"
                    },
                    {
                        "img": "../../images/xian.jpg",
                        "text": "武夷山大红袍，买三赠一"
                    },
                    {
                        "img": "../../images/cha.jpg",
                        "text": "武夷山大红袍，买三赠一"
                    },
                    {
                        "img": "../../images/xie.jpg",
                        "text": "武夷山大红袍，买三赠一"
                    }
                ]
            },
            {
                "text": "进入5频道 >",
                // 示例格式
                "list": [
                    {
                        "img": "../../images/xian.jpg",
                        "text": "武夷山大红袍，买三赠一"
                    }
                ]
            },
            {
                "text": "进入6频道 >",
                // 示例格式
                "list": [
                    {
                        "img": "../../images/xie.jpg",
                        "text": "武夷山大红袍，买三赠一"
                    }
                ]
            },
            {
                "text": "进入7频道 >",
                // 示例格式
                "list": [
                    {
                        "img": "../../images/hua.jpg",
                        "text": "武夷山大红袍，买三赠一"
                    }
                ]
            },
            {
                "text": "进入8频道 >",
                // 示例格式
                "list": [
                    {
                        "img": "../../images/cha.jpg",
                        "text": "武夷山大红袍，买三赠一"
                    }
                ]
            }
        ],
        inputShowed: false,
        inputVal: ""
    },
    tabClassfiy: function (e) {
        var that = this;
        var index = e.currentTarget.id.slice(4);
        that.setData({
            contentid: index,
            menuid: index
        })
    },
    onLoad: function (options) {
        // 页面初始化 options为页面跳转所带来的参数
    },
    scrollto: function(e){
        var that = this;
        var height = 0;
        var flag = false;

        wx.createSelectorQuery().select('#scroll-list').boundingClientRect(
            function (rect) {
                height = rect.height;
            }
        ).exec();

        for (let i = 0; i < this.data.classfiyList.length; i++){
            wx.createSelectorQuery().select('#list-'+i).boundingClientRect(
                function (rect) {
                    var id = rect.id.slice(5);
                    //console.log(rect)
                    
                    if (rect.top > 10 && rect.top < height && !flag){
                        that.setData({
                            menuid: id
                        });
                        flag = true;
                    }
                }
            ).exec();
            
            if (flag){
                break;
            }
        }
    },
    showInput: function () {
        this.setData({
            inputShowed: true
        });
    },
    hideInput: function () {
        this.setData({
            inputVal: "",
            inputShowed: false
        });
    },
    clearInput: function () {
        this.setData({
            inputVal: ""
        });
    },
    inputTyping: function (e) {
        this.setData({
            inputVal: e.detail.value
        });
    },
    list(){
        wx.navigateTo({
            url: '../list/list'
        });
    },
    detail() {
        wx.navigateTo({
            url: '../detail/detail'
        });
    }
})