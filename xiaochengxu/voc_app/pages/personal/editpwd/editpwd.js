// editpwd.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      disabled: false,
      curr_pwd: false,
      new_pwd: false,
      confirm_pwd: false,
      curr_value: '',
      new_value: '',
      confirm_value: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  currinput: function (e) {
      var that = this;
      if (e.detail.value) {
          this.setData({
              curr_value: e.detail.value,
              curr_pwd: true
          });
      }
      else {
          this.setData({
              curr_value: '',
              curr_pwd: false
          });
      }
  },
  newinput: function (e) {
      var that = this;
      if (e.detail.value) {
          this.setData({
              new_value: e.detail.value,
              new_pwd: true
          });
      }
      else {
          this.setData({
              new_value: '',
              new_pwd: false
          });
      }
  },
  confirminput: function (e) {
      var that = this;
      if (e.detail.value) {
          this.setData({
              confirm_value: e.detail.value,
              confirm_pwd: true
          });
      }
      else {
          this.setData({
              confirm_value: '',
              confirm_pwd: false
          });
      }
  },
  save:function(){
      var that = this;
      var login_url = '../../login/login';

      if (!that.data.curr_value){
          app.showToast('请输入当前密码', '../../assets/images/warn_fill.png', 'img');
          return false;
      }
      if (!that.data.new_value) {
          app.showToast('请输入新密码', '../../assets/images/warn_fill.png', 'img');
          return false;
      }
      if (!that.data.confirm_value) {
          app.showToast('请输入确认密码', '../../assets/images/warn_fill.png', 'img');
          return false;
      }
      if (that.data.new_value != that.data.confirm_value) {
          app.showToast('两次密码不一致', '../../assets/images/warn_fill.png', 'img');
          return false;
      }

      app.showLoading('提交中…');
      that.setData({
          disabled: true
      });
      
      //异步回调
      app.getAccessToken(function(){
          var url = app.globalData.baseurl + '/account/updatePassword';
          var data = { 'oldPass': that.data.curr_value, 'newPass': that.data.new_value };
          var login_session = wx.getStorageSync('login_session');
          var param = { access_token: login_session.access_token };
          var query_param = app.paramToQuery(param);
          url = url + query_param;
          var action = { action: 'editpwd', method: 'post', url: url };

          app.api(data, action, function (rtn) {
              app.hideLoading();
              if (rtn.hasOwnProperty('type') && rtn.type == 'SUCCESS') {
                  app.showToast('保存成功', 'success', 'icon');
                  that.setData({
                      curr_value: '',
                      new_value: '',
                      confirm_value: ''
                  });
              }
              else {
                  app.showToast('保存失败', '../../assets/images/warn_fill.png', 'img');
              }
              that.setData({
                  disabled: false
              });
          });
      }, login_url);
  }
})