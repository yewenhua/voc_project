var app = getApp();
var num = 0;

Page({
   data: {
       check: true,
       shakeData: {
           x: 0,
           y: 0,
           z: 0
       },
       shakeEnabled: true,
       shakeMusic: 'https://share.voc.so/wx_app_shake.mp3',
       audiosrc: 'https://share.voc.so/shake_over.mp3',
       audioCtx: null,
       animationData: {},
       showModalStatus: false,
       rewardList: [],
       animalList: [
           '../../images/animal/all_03.png',
           '../../images/animal/banma.png',
           '../../images/animal/dw_10.png',
           '../../images/animal/eyu.png',
           '../../images/animal/gui.png',
           '../../images/animal/haishi.png',
           '../../images/animal/hd_06.png',
           '../../images/animal/hd_09.png',
           '../../images/animal/hd_12.png',
           '../../images/animal/hd_19.png',
           '../../images/animal/hd_24.png',
           '../../images/animal/hd_26.png',
           '../../images/animal/hd_32.png',
           '../../images/animal/hd_35.png',
           '../../images/animal/hd_41.png',
           '../../images/animal/hd_44.png',
           '../../images/animal/hd_47.png',
           '../../images/animal/houzi.png',
           '../../images/animal/kq_03.png',
           '../../images/animal/lj_02.png',
           '../../images/animal/lj_05.png',
           '../../images/animal/shizi.png',
           '../../images/animal/lj_17.png',
           '../../images/animal/mao_03.png',
           '../../images/animal/mj_03.png',
           '../../images/animal/niu.png',
           '../../images/animal/ow_03.png',
           '../../images/animal/ow_06.png',
           '../../images/animal/ow_09.png',
           '../../images/animal/ow_13.png',
           '../../images/animal/ow_17.png',
           '../../images/animal/ow_20.png',
           '../../images/animal/ow_27.png',
           '../../images/animal/ow_29.png',
           '../../images/animal/ow_32.png',
           '../../images/animal/shizi2.png',
           '../../images/animal/shu.png',
           '../../images/animal/star_03.png',
           '../../images/animal/xiaolu.png',
           '../../images/animal/yezhu.png',
           '../../images/animal/zmg_03.png',
           '../../images/animal/zmg_04.png',
           '../../images/animal/zmg_07.png',
           '../../images/animal/zmg_14.png',
           '../../images/animal/zmg_18.png',
           '../../images/animal/zmg_21.png',
           '../../images/animal/zmg_26.png'
       ],
       numList: [
           '../../images/num/1.png',
           '../../images/num/2.png',
           '../../images/num/3.png',
           '../../images/num/4.png',
           '../../images/num/5.png',
           '../../images/num/6.png',
           '../../images/num/7.png',
           '../../images/num/8.png',
           '../../images/num/9.png',
           '../../images/num/10.png'
       ],
       charList: [
           '../../images/char/a_03.png',
           '../../images/char/b_03.png',
           '../../images/char/c_03.png',
           '../../images/char/d_03.png',
           '../../images/char/e_03.png',
           '../../images/char/f_03.png',
           '../../images/char/g_03.png',
           '../../images/char/h_03.png',
           '../../images/char/i_03.png',
           '../../images/char/j_03.png',
           '../../images/char/k_03.png',
           '../../images/char/l_03.png',
           '../../images/char/m_03.png',
           '../../images/char/n_03.png',
           '../../images/char/o_03.png',
           '../../images/char/p_03.png',
           '../../images/char/q_03.png',
           '../../images/char/r_03.png',
           '../../images/char/s_03.png',
           '../../images/char/t_03.png',
           '../../images/char/u_03.png',
           '../../images/char/v_03.png',
           '../../images/char/w_03.png',
           '../../images/char/x_03.png',
           '../../images/char/y_03.png',
           '../../images/char/z_03.png'
       ],
       reward:'../../images/animal/all_03.png',
       hblist: [],
       windowWidth: 375,
       windowHeight: 667
   },
   onReady: function () {
       this.audioCtx = wx.createAudioContext('myAudio');
   },
   onLoad: function (options) {
       this.change();
       this.shake();
   },

   shake(){
       var that = this;
       wx.onAccelerometerChange(function (res) {
           var x = res.x.toFixed(4);
           var y = res.y.toFixed(4);
           var z = res.z.toFixed(4);
           var flagX = that.countFlag(x, that.data.shakeData.x);
           var flagY = that.countFlag(y, that.data.shakeData.y);
           var flagZ = that.countFlag(z, that.data.shakeData.z);

           that.setData({
               shakeData: {
                   x: x,
                   y: y,
                   z: z
               }
           });

           if ((flagX && flagY) || (flagY && flagZ) || (flagX && flagZ)){
               if (that.data.shakeEnabled){
                   that.setData({
                       shakeEnabled: false
                   });
                   that.playMusic();
               }
           }
       });
   },

   countFlag(val1, val2){
       return (Math.abs(val1 - val2) > 1);
   },

   playMusic(){
       var that = this;
       wx.playBackgroundAudio({
           dataUrl: that.data.shakeMusic
       });

       wx.onBackgroundAudioStop(function(){
           that.shakeResult();
       });
   },

   shakeResult: function () {
       var that = this;
       var length = that.data.rewardList.length;
       var target = Math.floor(Math.random() * length);
       that.setData({
           reward: that.data.rewardList[target]
       });
       
       setTimeout(function(){
           that.audioCtx.play();
           that.popup('open');
       }, 1000);
   },

   change(){
       var random = Math.floor(Math.random() * 3);   //生成的0-2之间的随机数
       if (random == 0){
           var tmp = this.data.animalList.slice(0); 
       }
       else if (random == 1) {
           var tmp = this.data.numList.slice(0);
       }
       else if (random == 2) {
           var tmp = this.data.charList.slice(0);
       }
       else{
           var tmp = this.data.animalList.slice(0); 
       }

       this.setData({
           rewardList: tmp
       });
   },

   switchPop: function (e) {
       var currentStatus = e.currentTarget.dataset.status;
       this.popup(currentStatus);
   },
   popup: function (currentStatus) {
       /* 动画部分 */
       // 第1步：创建动画实例 
       var animation = wx.createAnimation({
           duration: 200, //动画时长 
           timingFunction: "linear", //线性 
           delay: 0 //0则不延迟 
       });

       // 第2步：这个动画实例赋给当前的动画实例 
       this.animation = animation;

       // 第3步：执行第一组动画 
       animation.opacity(0).rotateX(-90).scale(0).step();

       // 第4步：导出动画对象赋给数据对象储存 
       this.setData({
           animationData: animation.export()
       });

       // 第5步：设置定时器到指定时候后，执行第二组动画 
       setTimeout(function () {
           // 执行第二组动画 
           animation.opacity(1).rotateX(0).scale(1).step();
           // 给数据对象储存的第一组动画，更替为执行完第二组动画的动画对象 
           this.setData({
               animationData: animation
           });

           //关闭 
           if (currentStatus == "close") {
               this.setData(
                   {
                       showModalStatus: false,
                       shakeEnabled: true
                   }
               );
           }
       }.bind(this), 200);

       // 显示 
       if (currentStatus == "open") {
           this.setData(
               {
                   showModalStatus: true,
                   shakeEnabled: false
               }
           );
       }
   }
});