// login.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
      disabled: false,
      accountinput: false,
      pwdinput: false,
      pwdfocus: false,
      pwd: true,
      account_available: false,
      code_right: false,
      eyecolor: '#ddd'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      
  },

  accountblur: function(e){
      if (e.detail.value){
          this.setData({
              accountinput: true
          });
      }
      else{
          this.setData({
              accountinput: false
          });
      }
  },

  pwdblur: function (e) {
      if (e.detail.value) {
          this.setData({
              pwdinput: true
          });
      }
      else {
          this.setData({
              pwdinput: false
          });
      }
  },
  changeeyecolor: function(){
      if (this.data.eyecolor == '#ddd'){
          this.setData({
              eyecolor: '#ed6501',
              pwd: false
          });
      }
      else{
          this.setData({
              eyecolor: '#ddd',
              pwd: true
          });
      }
  },

  regist: function () {
      wx.navigateTo({
          url: '../regist/regist'
      });
  },
  forget: function () {
      wx.navigateTo({
          url: '../forget/forget'
      });
  },

  pwd: function(e){
      this.setData({
          pwdfocus: true
      });
  },

  /**
   * login
   */
  login: function (e) {
      var that = this;
      var postdata = e.detail.value;
      var username = postdata.username;
      var password = postdata.password;

      that.setData({
          pwdfocus: false
      });

      if (username.trim() == '') {
          app.showToast('请输入手机号码', '../../assets/images/warn_fill.png', 'img');
          return false;
      }
      if (password.trim() == '') {
          app.showToast('请输入密码', '../../assets/images/warn_fill.png', 'img');
          return false;
      }

      var url = app.globalData.authurl + '/oauth/token?client_id=e41df05b-f963-4a66-a8cd-8596d1564fee&client_secret=3ca4b24f-d2cd-44cc-b5c9-31f88c7c5631&grant_type=password&scope=read,write&username=' + username + '&password=' + password;
      var data = {};
      var action = { action: 'login', method: 'post', url: url };

      app.showLoading('登录中…');
      that.setData({
          disabled: true
      });
      
      app.api(data, action, function (rtn) {
          app.hideLoading();
          that.setData({
              disabled: false
          });

          if (rtn.hasOwnProperty('access_token')) {
              var obj = {
                  access_token: rtn.access_token,
                  refresh_token: rtn.refresh_token,
                  expire_time: (new Date()).getTime() + 3600 * 1000
              };
              wx.setStorageSync('login_session', obj);//存储login_session
              app.globalData.login_session = obj;

              var login_url = '../login/login';
              app.self(login_url);
              wx.switchTab({
                  url: '../index/index'
              });
          }
          else {
              app.showToast('账号或密码错误', '../../assets/images/warn_fill.png', 'img');
          }
      });
  }
})