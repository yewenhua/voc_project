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
      wx.removeStorageSync('login_session');
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

      var url = app.globalData.authurl + '/oauth/token?client_id=e41df05b-f963-4a66-a8cd-8596d1564fee&client_secret=3ca4b24f-d2cd-44cc-b5c9-31f88c7c5631&grant_type=password&scope=read,write&username=' + username + '&password=' + password;
      var data = {};
      var action = { header: 'application/x-www-form-urlencoded', method: 'post', url: url };

      app.showLoading('登录中…');
      that.setData({
          disabled: true
      });
      
      app.api(action, data, function (rtn) {
          if (rtn.data.hasOwnProperty('access_token')) {
              var obj = {
                  access_token: rtn.data.access_token,
                  refresh_token: rtn.data.refresh_token,
                  expire_time: (new Date()).getTime() + 3600 * 1000
              };
              wx.setStorageSync('login_session', obj);//存储login_session
              app.globalData.login_session = obj;
              that.bind(rtn.data.access_token, username);
          }
          else {
              app.hideLoading();
              that.setData({
                  disabled: false
              });

              setTimeout(function () {
                  app.showToast('登录失败', '../../images/cry_white.png', 'img');
              }, 300);
          }
      });
  },

  bind: function (access_token, mobile) {
      var that = this;
      app.wechatlogin(function () {
            var url = app.globalData.wxurl + '/voc/bindwx';
            var param = { third_session: app.globalData.third_session.value, token: access_token, mobile: mobile };
            var query_param = app.paramToQuery(param);
            url = url + query_param;
            var data = {};
            var action = { header: 'application/x-www-form-urlencoded', method: 'get', url: url };

            app.api(action, data, function (rtn) {
                app.hideLoading();
                that.setData({
                    disabled: false
                });
                if (rtn.code == 0) {
                    if (app.globalData.code){
                        wx.redirectTo({
                            url: '../device/device?code=' + app.globalData.code
                        });
                    }
                    else{
                        wx.redirectTo({
                            url: '../list/list'
                        });
                    }
                }
                else{
                    if (app.globalData.code) {
                        wx.redirectTo({
                            url: '../device/device?code=' + app.globalData.code
                        });
                    }
                    else {
                        wx.redirectTo({
                            url: '../list/list'
                        });
                    }
                }
            });
      });
  }
})