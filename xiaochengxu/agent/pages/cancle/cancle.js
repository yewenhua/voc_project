var app = getApp();
Page({
  data: {
    orderid: ''
  },
  onLoad: function (options) {
    this.setData({
      orderid: options.oid
    });

    app.checkSession();
    app.checkLogin(function () {
      
    });
  },

  formsubmit: function (e) {
    var postdata = e.detail.value;
    var login_session = app.globalData.login_session;
    var that = this;

    if (postdata.content) {
        wx.showActionSheet({
          itemList: ['确定'],
          success: function (res) {
              if (res.tapIndex == 0) {
                  app.api('cancel', { uid: login_session.id, orderid: that.data.orderid, content: postdata.content }, function (rtn) {
                      app.hideLoading();
                      if (rtn.code == 0) {
                          app.showToast('操作成功', 'success');
                          var tt = setTimeout(function () {
                            wx.reLaunch({
                                url: '../index/index'
                            });
                          }, 1500);
                      }
                      else {
                          app.showToast('操作失败', '../../images/error.png', 'img');
                      }
                  });
              }
          }
        });
    }
    else {
        app.showToast('理由不能为空', '../../images/error.png', 'img');
    }
  }
});