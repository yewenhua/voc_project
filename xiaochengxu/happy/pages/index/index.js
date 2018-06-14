var app = getApp();
var show = true;

Page({
   data: {
       file: '',
       list: [],
       inputShowed: false,
       inputVal: "",
       loading: true,
       page: 1,
       size: 10,
       hasMore: false,
       baseurl: app.globalData.baseurl
   },
   
   onLoad: function (options) {
       show = false;
       this.getData();
   },

   onShow: function (options) {
       if (show){
           show = false;
           this.setData({
               loading: true,
               list: [],
               page: 1
           });

           this.getData();
       }
   },

   detail(e){
       var idx = e.currentTarget.dataset.idx;
       var data = [];
       for (var i = 0; i < this.data.list.length; i++){
           var url = app.globalData.baseurl + this.data.list[i].path;
           data.push(url);
       }
       wx.previewImage({
           current: app.globalData.baseurl + this.data.list[idx].path,
           urls: data
       });
   },

   getData() {
       var that = this;
       if(this.data.page == 1){
           app.showLoading('加载中…');
       }
       
       var url = app.globalData.baseurl + '/api/documents';
       var data = {
           size: this.data.size,
           page: this.data.page,
           ftype: 'img',
           searchkey: this.data.inputVal
       };
       var action = { header: 'application/json', method: 'post', url: url };

       app.api(action, data, function (rtn) {
           if (rtn.code == 0) {
               if (that.data.page == 1) {
                   app.hideLoading();
               }
               
               var now_num = that.data.size * that.data.page;
               if (now_num < rtn.data.count){
                   that.setData({
                       list: that.data.list.concat(rtn.data.data),
                       hasMore: true,
                       loading: false
                   });
               }
               else{
                   that.setData({
                       list: that.data.list.concat(rtn.data.data),
                       hasMore: false,
                       loading: false
                   });
               }
           }
           else {
               if (that.data.page == 1) {
                   app.hideLoading();
               }
               that.setData({
                   loading: false
               });

               setTimeout(function () {
                   if (that.data.page != 1) {
                       app.showToast('没有数据', '../../images/cry_white.png', 'img');
                   }
               }, 300);
           }
       });
   },

   lower: function () {
       if (this.data.hasMore && !this.data.loading) {
           this.setData({
               loading: true,
               page: this.data.page + 1
           });

           this.getData();
       }
   },

   search(){
        this.setData({
            loading: true,
            list: [],
            page: 1
        });

        this.getData();
   },

   showInput: function () {
       this.setData({
           inputShowed: true
       });
   },
   hideInput: function () {
       this.setData({
           inputVal: "",
           inputShowed: false
       });
   },
   clearInput: function () {
       this.setData({
           inputVal: ""
       });
   },
   inputTyping: function (e) {
       this.setData({
           inputVal: e.detail.value
       });
   },

   select_pic(){
       var that = this;
       wx.chooseImage({
           count: 1, // 默认9
           sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
           sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
           success: function (res) {
               // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
               var tempFilePaths = res.tempFilePaths;
               app.globalData.prelist = tempFilePaths;

               that.setData({
                   file: tempFilePaths[0]
               });

               if (tempFilePaths.length > 0){
                   show = true;
                   wx.navigateTo({
                       url: '../upimg/upimg'
                   });
               }
           }
       });
   }

});