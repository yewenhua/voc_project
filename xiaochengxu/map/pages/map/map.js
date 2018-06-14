var app = getApp();

Page({
   data: {
       check: false,
       markers: [
            {
               iconPath: "../../images/mobai.png",
                id: 0,
                latitude: 23.099994,
                longitude: 113.324520,
                width: 30,
                height: 30,
                title: 'VOC'
            },
            {
                iconPath: "../../images/mobai.png",
                id: 0,
                latitude: 23.099046609668168,
                longitude: 113.32743824340818,
                width: 30,
                height: 30,
                callout: {
                    content: 'HELLO',
                    color: '#ffffff',
                    borderRadius: 3,
                    bgColor: '#ff0000',
                    padding: 5,
                    textAlign: 'center'
                }
            },
            {
                iconPath: "../../images/mobai.png",
                id: 0,
                latitude: 23.09636230077776,
                longitude: 113.33121479370115,
                width: 30,
                height: 30
            },
            {
                iconPath: "../../images/mobai.png",
                id: 0,
                latitude: 23.097467610934107,
                longitude: 113.31988514282224,
                width: 30,
                height: 30
            },
            {
                iconPath: "../../images/mobai.png",
                id: 0,
                latitude: 23.10480979753762,
                longitude: 113.31979931213377,
                width: 30,
                height: 30
            },
            {
                iconPath: "../../images/mobai.png",
                id: 0,
                latitude: 23.103388760485267,
                longitude: 113.32640827514646,
                width: 30,
                height: 30
            },
            {
                iconPath: "../../images/mobai.png",
                id: 0,
                latitude: 23.10591503818292,
                longitude: 113.33018482543943,
                width: 30,
                height: 30
            },
            {
                iconPath: "../../images/mobai.png",
                id: 0,
                latitude: 23.10496768961528,
                longitude: 113.33645046569822,
                width: 30,
                height: 30
            },
            {
                iconPath: "../../images/mobai.png",
                id: 0,
                latitude: 23.09502012621996,
                longitude: 113.3119887194824,
                width: 30,
                height: 30
            }
            
       ]
   },
   onReady: function (e) {
       // 使用 wx.createMapContext 获取 map 上下文
       this.mapCtx = wx.createMapContext('myMap')
   },
   onLoad: function (options) {
       //this.check();
   },

   onShow: function () {
       //this.check();
   },

   check(){
       var that = this;
       app.checkLogin(function () {
           that.setData({
               check: true
           });
       });
   },
   getCenterLocation: function () {
       this.mapCtx.getCenterLocation({
           success: function (res) {
               console.log(res.longitude);
               console.log(res.latitude);
               wx.openLocation({
                   latitude: res.latitude,
                   longitude: res.longitude
               });
           }
       })
   },
   moveToLocation: function () {
       this.mapCtx.moveToLocation()
   },
   translateMarker: function () {
       this.mapCtx.translateMarker({
           markerId: 0,
           autoRotate: true,
           duration: 1000,
           destination: {
               latitude: 23.10229,
               longitude: 113.3345211,
           },
           animationEnd() {
               console.log('animation end')
           }
       })
   },
   includePoints: function () {
       this.mapCtx.includePoints({
           padding: [10],
           points: [{
               latitude: 23.10229,
               longitude: 113.3345211,
           }, {
               latitude: 23.00229,
               longitude: 113.3345211,
           }]
       })
   },
   openMap(){
       wx.chooseLocation({
           success: function(res){

           }
       });
   },

   danmu(){
       wx.navigateTo({
           url: '../video/video'
       });
   }
});