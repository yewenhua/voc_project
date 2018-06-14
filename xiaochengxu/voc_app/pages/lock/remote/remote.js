// remote.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      open: false,
      windowHeight: wx.getSystemInfoSync().windowHeight,
      translate: '',
      list: [
          { focus: false, num: '' },
          { focus: false, num: '' },
          { focus: false, num: '' },
          { focus: false, num: '' },
          { focus: false, num: '' },
          { focus: false, num: '' }
      ],
      grids: [1, 2, 3, 4, 5, 6, 7 ,8, 9]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  open: function (e) {
      if (this.data.open) {
          this.setData({
              open: false
          })
      } else {
          this.setData({
              open: true
          })
      }
  },
  input: function(e){
      var data = this.data.list;
      var num = e.currentTarget.dataset.index;
      for (var i = 0; i < this.data.list.length; i++){
          if (this.data.list[i].focus && this.data.list[i].num){
              continue;
          }
          else{
              data[i].num = num;
              data[i].focus = true;
              break;
          }
      }
      this.setData({
          list: data
      });
  },
  deleteinput: function(e){
      var data = this.data.list;
      var num = e.currentTarget.dataset.index;
      var length = this.data.list.length;
      for (var i = length-1; i>=0; i--) {
          if (this.data.list[i].focus && this.data.list[i].num) {
              data[i].num = '';
              data[i].focus = false;
              break;
          }
          else {
              continue;
          }
      }
      this.setData({
          list: data
      });
  }
})