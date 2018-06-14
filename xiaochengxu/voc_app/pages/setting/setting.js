// setting.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      alertLevelItems: [
          { name: '不提醒', value: '0', desc: '所有信息都不提醒' },
          { name: '正常', value: '1', desc: '重要信息提醒，普通信息不提醒' },
          { name: '所有', value: '2', desc: '所有信息都提醒', checked: true }
      ],
      alertTypeItems: [
          { name: '震动和声音', value: '0' },
          { name: '震动', value: '1' },
          { name: '声音', value: '2', checked: true },
          { name: '无', value: '3' }
      ],
      settingItems: [
          { name: '消息提醒设置', url: '../login/login' },
          { name: '指纹登录设置', url: '../regist/regist' },
          { name: '阿猫阿狗设置', url: '../forget/forget' },
      ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  bindRegistTap: function () {
      wx.navigateTo({
          url: '../regist/regist'
      });
  },
  bindForgetTap: function () {
      wx.navigateTo({
          url: '../forget/forget'
      });
  },
  levelChange: function (e) {
      console.log('radio发生change事件，携带value值为：', e.detail.value);

      var alertLevelItems = this.data.alertLevelItems;
      for (var i = 0, len = alertLevelItems.length; i < len; ++i) {
          alertLevelItems[i].checked = alertLevelItems[i].value == e.detail.value;
      }

      this.setData({
          alertLevelItems: alertLevelItems
      });
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
  switchChange: function(){
      
  }
})