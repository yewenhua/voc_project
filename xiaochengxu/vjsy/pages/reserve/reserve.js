// pages/reserve/reserve.js
var app = getApp();
Page({
  data: {
    goodsid: 0,
    goods: '',
    businessname: '',
    businesscity: '',
    selectprovince: '请选择省份',
    selectcity: '请选择城市',
    procity: [],
    city: [],
    province: [],
    disabled: false
  },
  onLoad: function (options) {
    var that = this;
    app.checkSession(function(){
      var voc_session = wx.getStorageSync('voc_session');
      that.setData({
        voc_session: voc_session
      });
    });
    
    // 页面初始化 options为页面跳转所带来的参数
    var province = [];
    var city = [];
    app.apiData('procity', {}, function (data) {
      for (var i = 0; i < data.length; i++) {
        if (province.indexOf(data[i].province) == -1) {
          province.push(data[i].province);
        }
        city.push(data[i].city);
      }
      that.setData({
        goodsid: options.id,
        goods: options.goods,
        procity: data,
        province: province,
        city: city
      })
    });
  },
  pickchange: function (e) {
    // 页面渲染完成
    var index = e.detail.value;
    this.setData({
      pickvalue: this.data.business[index].id,
      picktitle: this.data.business[index].title,
      pickmobile: this.data.business[index].mobile
    });
  },
  provincechange: function (e) {
    var index = e.detail.value;
    this.setData({
      selectprovince: this.data.province[index],
      selectcity: '请选择城市'
    })
    var city = [];
    for (var i = 0; i < this.data.procity.length; i++) {
      if (this.data.procity[i].province == this.data.selectprovince) {
        city.push(this.data.procity[i].city);
      }
    }

    this.setData({
      city: city
    })
  },
  citychange: function (e) {
    var index = e.detail.value;
    this.setData({
      selectcity: this.data.city[index]
    })
    for (var i = 0; i < this.data.procity.length; i++) {
      if (this.data.procity[i].city == this.data.selectcity) {
        this.setData({
          businessname: this.data.procity[i].title,
          businessmobile: this.data.procity[i].mobile,
          businesscity: this.data.procity[i].city,
          selectprovince: this.data.procity[i].province,
          businessid: this.data.procity[i].id
        })
        break;
      }
    }
  },
  onUnload: function () {
    // 页面关闭
  },
  formsubmit: function (e) {
    var that = this;
    var postdata = e.detail.value;
    var name = postdata.name;
    var phone = postdata.phone;
    var businessid = postdata.businessid;
    var content = postdata.content;
    postdata['orderid'] = app.getOrderId();
    postdata['goodsid'] = that.data.goodsid;
    postdata['goods'] = that.data.goods;
    postdata['business'] = that.data.businessname;
    postdata['businessmobile'] = that.data.businessmobile;
    postdata['city'] = that.data.businesscity;
    postdata['formid'] = e.detail.formId;
    postdata['voc_session'] = that.data.voc_session;
    
    var cnreg = /[^\u4E00-\u9FA5]/g;
    var mobilereg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    if (name.trim() == '' || phone.trim() == '') {
      app.showResult('fail', '请填写完整信息');
      return false;
    } else if (cnreg.test(name)) {
      app.showResult('fail', '姓名有误');
      return false;
    } else if (phone.length != 11 || !mobilereg.test(phone)) {
      app.showResult('fail', '手机号有误');
      return false;
    } else if (businessid == null || businessid == 0) {
      app.showResult('fail', '请选择省份城市');
      return false;
    } else {
      postdata['selectprovince'] = that.data.selectprovince;
      postdata['selectcity'] = that.data.selectcity;
      that.setData({
        disabled: true
      });

      app.apiData('order', postdata, function (data) {
        if (data.msg == 'success') {
          app.showResult('success', '提交成功');

          var smsdata = { business: that.data.businessname, user: name, phone: phone, orderid: postdata['orderid'], mobile: that.data.businessmobile };
          app.apiData('sms', smsdata, function (data) {
            
          });
        } else {
          app.showResult('fail', '提交失败');
        }
      });

      setTimeout(function () {
        wx.navigateBack();
      }, 2000);
    }
  }
})