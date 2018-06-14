// statusupdate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      alertTypeItems: [
          { name: '在家', value: '0' },
          { name: '离家', value: '1' },
          { name: '睡眠', value: '2', checked: true },
      ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  typeChange: function (e) {
      var alertTypeItems = this.data.alertTypeItems;
      for (var i = 0, len = alertTypeItems.length; i < len; ++i) {
          alertTypeItems[i].checked = alertTypeItems[i].value == e.detail.value;
      }

      this.setData({
          alertTypeItems: alertTypeItems
      });
  },
})