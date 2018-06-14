// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      startY: 0,
      animationData: {},
      animationLoad: {},
      animationImg: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.animation = wx.createAnimation({
          duration: 0,
          timingFunction: 'ease',
      });

      this.animateLoad = wx.createAnimation({
          duration: 0,
          timingFunction: 'ease',
      });

      this.animationImg = wx.createAnimation({
          duration: 0,
          timingFunction: 'ease',
      });
  },

  touchS: function (e) {
      if (e.touches.length == 1) {
          this.setData({
              //设置触摸起始点水平方向位置  
              startY: e.touches[0].clientY
          });
      }
  },
  touchM: function (e) {
      var that = this;
      this.animation = wx.createAnimation({
          duration: 0,
          timingFunction: 'ease',
      });

      if (e.touches.length == 1) {
          //手指移动时水平方向位置  
          var moveY = e.touches[0].clientY; //单位px
          //手指起始点位置与移动期间的差值  
          var disY = moveY - that.data.startY;
          var dmostHeight = 300; //参考单位rpx
          var animation = "";
          var animateLoad = "";
          var animateImg = "";
          if (disY > 0) {//移动距离大于0，文本层bottom值等于手指移动距离  
              if (disY >= dmostHeight / 2) {
                  //控制手指移动距离最大值 
                  animation = dmostHeight / 2;
              }
              else {
                  animation = disY;
              }

              //loading
              if (disY > 25 && disY <= 50) {
                  that.animateLoad = wx.createAnimation({
                      duration: 0,
                      timingFunction: 'ease',
                  });
                  animateLoad = disY;
                  that.animateLoad.height(animateLoad).step();
                  that.setData({
                      animationLoad: that.animateLoad.export()
                  });

                  that.animationImg = wx.createAnimation({
                      duration: 0,
                      timingFunction: 'ease',
                  });
                  animateImg = that.computer(disY);
                  console.log(animateImg);
                  that.animationImg.opacity(1).scale(animateImg).step();
                  that.setData({
                      animationImg: that.animationImg.export()
                  });
              }
          }

          that.animation.translateY(animation).step();
          that.setData({
              animationData: that.animation.export()
          });
      }
  },

  touchE: function (e) {
      var that = this;
      var animation = "";
      var animateLoad = "";
      var animateImg = "";

      if (e.changedTouches.length == 1) {
          //手指移动结束后水平位置  
          var endY = e.changedTouches[0].clientY; //单位px
          //触摸开始与结束，手指移动的距离  
          var disY = endY - this.data.startY;
          var dmostHeight = 300; //参考单位rpx
          //如果距离小于基准的1/2，恢复  
          if (disY > dmostHeight / 2){
              animation = dmostHeight/4;
              this.animation = wx.createAnimation({
                  duration: 300,
                  timingFunction: 'ease',
              });

              this.animation.translateY(animation).step();
              this.setData({
                  animationData: this.animation.export()
              });

              setTimeout(function () {
                  animation = 0;
                  this.animation = wx.createAnimation({
                      duration: 1000,
                      timingFunction: 'ease',
                  });

                  this.animation.translateY(animation).step();
                  this.setData({
                      animationData: this.animation.export()
                  });

                  //loading
                  this.animateLoad = wx.createAnimation({
                      duration: 1000,
                      timingFunction: 'ease',
                  });
                  animateLoad = 0;
                  this.animateLoad.height(animateLoad).step();
                  this.setData({
                      animationLoad: this.animateLoad.export()
                  });

                  this.animationImg = wx.createAnimation({
                      duration: 1000,
                      timingFunction: 'ease',
                  });
                  animateImg = 0;
                  this.animationImg.opacity(0).scale(animateImg).step();
                  this.setData({
                      animationImg: this.animationImg.export()
                  });
              }.bind(this), 1000);
          }
          else{
              animation = 0;
              this.animation = wx.createAnimation({
                  duration: 500,
                  timingFunction: 'ease',
              });

              this.animation.translateY(animation).step();
              this.setData({
                  animationData: this.animation.export()
              });
          }
      }
  },

  computer(v){
      return ((1.5* 100)/(50-25))*(v-25)*0.01;
  }
})