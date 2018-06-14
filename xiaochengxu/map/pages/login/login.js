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
          app.showToast('请输入手机号码', '../../images/cry_white.png', 'img');
          return false;
      }
      if (password.trim() == '') {
          app.showToast('请输入密码', '../../images/cry_white.png', 'img');
          return false;
      }

      var url = app.globalData.baseurl + '/api/mocro';
      var data = {
          username: username,
          password: password
      };
      var action = { header: 'application/json', method: 'post', url: url };

      app.showLoading('登录中…');
      that.setData({
          disabled: true
      });
      
      app.api(action, data, function (rtn) {
          that.setData({
              disabled: false
          });

          if (rtn && rtn.hasOwnProperty('data') && rtn.code == 0 && rtn.data.hasOwnProperty('token')) {
              app.hideLoading();
              var obj = {
                  id: rtn.data.id,
                  token: rtn.data.token
              };
              wx.setStorageSync('login_session', obj);//存储login_session
              app.globalData.login_session = obj;

              wx.redirectTo({
                  url: '../index/index'
              });
          }
          else {
              app.hideLoading();
              setTimeout(function () {
                  app.showToast('登录失败', '../../images/cry_white.png', 'img');
              }, 300);
          }
      });
  }
})