var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
      value: '',
      disabled: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  input: function(e){
      var that = this;
      if (e.detail.value) {
          this.setData({
              value: e.detail.value,
              disabled: false
          });
      }
      else {
          this.setData({
              value: '',
              disabled: true
          });
      }
  },
  save: function(){
      var that = this;
      var login_url = '../../login/login';
      app.showLoading('提交中…');
      that.setData({
          disabled: true
      });

      app.getAccessToken(function () {
            var url = app.globalData.baseurl + '/group/update';            
            var data = {
                id: app.globalData.groupid, 
                name: that.data.value
            };
            var param = { access_token: app.globalData.login_session.access_token };
            var query_param = app.paramToQuery(param);
            url = url + query_param;
            var action = { action: 'updateGroup', method: 'post', url: url };

            app.api(data, action, function (rtn) {
                app.hideLoading();
                that.setData({
                    disabled: false
                });

                if (rtn.hasOwnProperty('type') && rtn.type == 'SUCCESS') {
                    app.showToast('修改成功', 'success', 'icon');
                }
                else {
                    app.showToast('提交失败', '../../assets/images/warn_fill.png', 'img');
                }
            });
      }, login_url);
  }
  
})