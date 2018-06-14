// list.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
      list: [],
      loading: false,
      init: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      app.checkLogin(function () {
          this.getdata(function () {

          }.bind(this));
      }.bind(this));
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
      this.getdata(function () {
          wx.stopPullDownRefresh();
      }.bind(this));
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
      
  },

  getdata: function(cb){
      if (!this.loading){
            var that = this;
            that.setData({
                loading: true
            });

            app.getAccessToken(function () {
                var access_token = app.globalData.login_session.access_token;
                app.showLoading('加载中…');
                var url = app.globalData.baseurl + '/device/list/wx';
                var data = {}; 
                var param = { access_token: app.globalData.login_session.access_token };
                var query_param = app.paramToQuery(param);
                url = url + query_param;
                var action = { header: 'application/json', method: 'get', url: url };

                app.api(action, data, function (rtn) {
                    app.hideLoading();
                    if (rtn.hasOwnProperty('type') && rtn.type == 'SUCCESS') {
                        if (rtn.data.length > 0){
                            that.setData({
                                list: rtn.data
                            });
                        }
                        else{
                            app.showToast('请先绑定设备', '../../images/cry_white.png', 'img');
                        }
                    }
                    else {
                        if ((rtn.error && rtn.error == 'invalid_token') || (rtn.type && rtn.type == 'ERROR')){
                            wx.removeStorageSync('login_session');
                            wx.removeStorageSync('third_session');
                            wx.redirectTo({
                                url: '../login/login'
                            });
                        }
                        else{
                            app.showToast('获取失败', '../../images/cry_white.png', 'img');
                        }
                    }
                    
                    that.setData({
                        loading: false,
                        init: false
                    });
                    cb();
                });
            });
      }
  },

  goto_url: function(e){
      var index = e.currentTarget.dataset.index;
      var data = this.data.list[index];
      var mid = data.modelName;
      var did = data.id;
      var gid = data.groupId;
      var tk = app.globalData.login_session.access_token;
      var key = data.productKey;
      var card = data.idcard;
      var types = data.communicationType;
      if (types == 'BLUE'){
          wx.navigateTo({
              url: '../index/index?mid=' + mid + '&did=' + did + '&gid=' + gid + '&tk=' + tk
          });
      }
      else if (types == 'WIFI'){
          wx.navigateTo({
              url: '../wifi/wifi?key=' + key + '&card=' + card + '&tk=' + tk
          });
      }
  }
  
})