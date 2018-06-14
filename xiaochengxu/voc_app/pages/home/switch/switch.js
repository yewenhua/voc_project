// switch.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      userInfo: {},
      list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that = this;
      app.getUserInfo(function (userInfo) {
          //更新数据
          that.setData({
              userInfo: userInfo
          })
      });
      this.getList();
  },
  getList: function () {
      var that = this;
      var login_url = '../../login/login';
      app.showLoading('请求中…');

      app.getAccessToken(function () {
          var url = app.globalData.baseurl + '/group/list';
          var data = {};
          var param = { access_token: app.globalData.login_session.access_token };
          var query_param = app.paramToQuery(param);
          url = url + query_param;
          var action = { action: 'homeList', method: 'get', url: url };

          app.api(data, action, function (rtn) {
              app.hideLoading();
              if (rtn.hasOwnProperty('type') && rtn.type == 'SUCCESS') {
                  for (var i = 0; i < rtn.data.length; i++){
                      if (rtn.data[i].id == app.globalData.groupid){
                          rtn.data[i].isMain = true;
                      }
                      else{
                          rtn.data[i].isMain = false;
                      }
                  }

                  that.setData({
                      list: rtn.data
                  });
              }
              else {
                  app.showToast('数据请求失败', '../../../assets/images/warn_fill.png', 'img');
              }
          });
      }, login_url);
  },
  change: function(e){
      var that = this;
      var login_url = '../../login/login';
      var groupid = e.currentTarget.dataset.group;
      if (groupid != app.globalData.groupid){
            app.showLoading('切换中…');
            app.getAccessToken(function () {
                var url = app.globalData.baseurl + '/group/select/' + groupid;
                var data = {};
                var param = { access_token: app.globalData.login_session.access_token };
                var query_param = app.paramToQuery(param);
                url = url + query_param;
                var action = { action: 'changeGroup', method: 'get', url: url };

                app.api(data, action, function (rtn) {
                    app.hideLoading();
                    if (rtn.hasOwnProperty('type') && rtn.type == 'SUCCESS') {
                        var list = that.data.list;
                        for (var i = 0; i < list.length; i++) {
                            if (list[i].id == groupid) {
                                list[i].isMain = true;
                            }
                            else {
                                list[i].isMain = false;
                            }
                        }

                        that.setData({
                            list: list
                        });
                        app.globalData.groupid = groupid;
                        app.showToast('切换成功', 'success', 'icon');
                    }
                    else {
                        app.showToast('切换失败', '../../../assets/images/warn_fill.png', 'img');
                    }
                });
            }, login_url);
      }
  }
})