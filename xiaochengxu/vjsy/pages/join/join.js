// pages/join/join.js
var app = getApp();
Page({
  data: {
    baseurl: app.globalData.baseurl,
    homeadv: []
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    app.apiData('homeadv', {type:4}, function (data) {
      that.setData({
        homeadv: data
      })
    });
    app.apiData('info', {}, function (data){
      that.setData({
        info: data
      })
    });
  },
  call:function(){
    wx.makePhoneCall({
      phoneNumber: this.data.info[0].hotphone
    })
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  formsubmit:function(e){
    var that=this;
    var postdata = e.detail.value;
    var contact = postdata.contact;
    var phone = postdata.phone;
    var place = postdata.place;
    var mobilereg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    if (contact.trim() == '' || phone.trim() == '' || place.trim()==''){
        app.showResult('fail','请填写完整信息');
    }
    else if (phone.length != 11 || !mobilereg.test(phone)) {
        app.showResult('fail', '手机号有误');
    } 
    else{
      app.apiData('join', postdata,function(data){
        if(data.msg=='success'){
          app.showResult('success', '提交成功');
        }else{
          app.showResult('fail', '提交失败');
        }
      });
      //wx.navigateBack();
      setTimeout(function () {
        wx.navigateBack();
      }, 2000);
    }
  }
})