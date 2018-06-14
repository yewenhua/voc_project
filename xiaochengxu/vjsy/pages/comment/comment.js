// pages/comment/comment.js
var app=getApp();
Page({
  data: {
    starArr: [1, 1, 1, 0, 0],
    score:3,
    getclothes:'是',
    getmoney:'未收',
    orderid:'',
    goods:'',
    business:'',
    thinkinfo:[],
    content:'',
    province:'',
    city:'',
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    that.setData({
      orderid: options.id,
      goods: options.goods,
      business: options.business,
      province: options.province,
      city: options.city
    });

    app.checkSession(function(){
      var voc_session = wx.getStorageSync('voc_session');
      that.setData({
        voc_session: voc_session
      });
    });    

    app.apiData('getthink',{orderid:this.data.orderid},function(data){
      if(data.length>0){
        setStar(that,data[0].score);
        that.setData({
          thinkinfo:data,
          getclothes: data[0].getclothes,
          getmoney: data[0].getmoney,
          content: data[0].content,
        })
      }
    });
  },
  gongzuofu: function (e) {
    var chose = e.currentTarget.dataset.id;
    this.setData({
      getclothes:chose==1?'是':'否'
    })
  },
  shoufei: function (e) {
    var chose = e.currentTarget.dataset.id;
    this.setData({
      getmoney: chose==1?'收费':'未收'
    })
  },
  submit: function (e) {
    var postdata=e.detail.value;
    postdata.score=this.data.score;
    postdata.getclothes = this.data.getclothes;
    postdata.getmoney = this.data.getmoney;
    postdata.orderid = this.data.orderid;
    postdata.goods = this.data.goods;
    postdata.province = this.data.province;
    postdata.city = this.data.city;
    postdata.business = this.data.business;
    postdata.voc_session = this.data.voc_session;
    
    var action="think";
    if(this.data.thinkinfo.length>0){
      action="changethink";
    }
    app.apiData(action, postdata, function (data) {
      if (data.msg == 'success') {
        app.showResult('success', '感谢您的评价');
      } else {
        app.showResult('fail', '评价失败');
      }
    });
    setTimeout(function(){
      wx.navigateBack();
    },2000);
  },
  chosestar: function (e) {
    var score = e.currentTarget.dataset.id;
    setStar(this,score);
  }
})


function setStar(that,score){
  var star = [];
  for (var i = 0; i < score; i++) {
    star[i] = 1;
  }
  for (var i = score; i < 5; i++) {
    star[i] = 0;
  }
  that.setData({
    starArr: star,
    score: score
  })
}