// pages/detail/detail.js
var app = getApp();
var WxParse = require('../../wxParse/wxParse.js');
Page({
  data: {
    imgSrc: [
      '../../images/detail1.jpg',
      '../../images/pro1.jpg'
      ],
    imgUrl: '../../images/detail1.jpg',
    title: 'GOLGEN-简爱超薄情侣系列 坚实相伴',
    type: 'T210.2214.224 腕表',
    price: '5555.00',
    oldPrice: '9999.00',
    baseurl:app.globalData.baseurl,
    goodsinfo:[],
    content: '',
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var that=this;
    var id=options.id;
    app.apiData('goodsinfo',{id:id},function(data){
      that.setData({
        goodsinfo:data
      });
      WxParse.wxParse('content', 'html', data[0].content, that, 5);
    })
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})