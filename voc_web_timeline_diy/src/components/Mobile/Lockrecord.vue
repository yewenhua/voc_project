<template>
    <div class="content lockpage">
        <div class="loading" v-if="isLoading">
            <mt-spinner type="fading-circle" :size="40" color="#fff"></mt-spinner>
        </div>
        <div class="lockrecord">
            <div class="fixtitle">07月08日</div>
            <article class="timeheader" v-for="(v, k) in dataList" :key="k">
                <h3 class="timetitle" v-for="(item, key) in v" :key="key">{{key}}</h3>
                <div v-for="(detail, index) in v" :key="index">
                    <section v-for="(item, kk) in detail" :key="kk">
                        <span class="point-time">
                            <img v-if="item.deviceOpenType == 'FINGER'" src="../../assets/img/icon_fingerprint@2x.png"/>
                            <img v-if="item.deviceOpenType == 'PWD'" src="../../assets/img/icon_password@2x.png"/>
                            <img v-if="item.deviceOpenType == 'CARD'" src="../../assets/img/icon_card@2x.png"/>
                            <img v-if="item.deviceOpenType == 'BLUE'" src="../../assets/img/blue.png"/>
                            <img v-if="item.deviceOpenType == 'WIFI'" src="../../assets/img/sound_light.png"/>
                            <img v-if="item.deviceOpenType == 'LOCK'" src="../../assets/img/my.png"/>
                        </span>
                        <time>
                            <span>{{item.dateObj.hour_min}}</span>
                        </time>
                        <div class="headerimg">
                            <img :src="item.headIcon"/>
                        </div>
                        <aside>
                            <p class="things">{{item.account ? item.account : '--'}}</p>
                            <p class="brief"><span :class="item.deviceOpenType == 'FINGER' ? 'text-finger' : item.deviceOpenType == 'PWD' ? 'text-pwd' : item.deviceOpenType == 'CARD' ? 'text-card' : (item.deviceOpenType == 'BLUE' || item.deviceOpenType == 'WIFI') ? 'text-remote' : item.deviceOpenType == 'LOCK' ? 'text-lock' : 'text-finger'">{{item.deviceOpenType == 'BLUE' || item.deviceOpenType == 'WIFI' ? (item.deviceOpenType == 'BLUE' ? '蓝牙' : 'WIFI') + '开锁 （ID:' + item.no + '）' : '--'}}</span></p>
                        </aside>
                    </section>
                </div>
            </article>
            <div v-if="!hasData && !isLoading" class="nodata">
                <div class="img">
                    <img src="../../assets/img/nodata.png"/>
                </div>
                <div>亲，木有数据哦！</div>
            </div>
            <div class="hasbottom" v-if="hasData && !isLoading && page == totalPage && total > 6">
                <span class="left"></span>
                <span>我是有底线的</span>
                <span class="right"></span>
            </div>
        </div>
        <div class="totop" @click="totop" v-if="hastop">
            <img src="../../assets/img/pull_up.png"/>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue'
    import { unixtimefromat } from '../utils'
    import { Spinner  } from 'mint-ui'
    Vue.component(Spinner.name, Spinner);

    export default {
        data(){
            return {
                scrollTop: '',
                isLoading: false,
                page: 1,
                perPage: 10,
                totalPage: 1,
                dataList: [],
                hasData: true,
                total: 1,
                token: '',
                is_init: true,
                url: '',
                hastop: false,
                groupId: '',
                deviceId: ''
            }
        },
        methods: {
            scroll() {
                var obj = document.querySelector(".lockpage");
                var screenHeight = obj.offsetHeight;   //屏幕可见高度
                var scrollHeight = obj.scrollHeight;   //所有内容总高度
                this.scrollTop = document.querySelector(".lockpage").scrollTop;   //滚动条距离顶部高度

                var headerObj = document.getElementsByClassName("timeheader");
                var length = headerObj.length;
                for (var i = length - 1; i >= 0; i--) {
                    if (this.scrollTop > headerObj[i].offsetTop) {
                        var fixtitle = document.getElementsByClassName("timetitle")[i].innerHTML;
                        document.querySelector(".fixtitle").style.display = 'block';
                        document.querySelector(".fixtitle").innerHTML = fixtitle;
                        break;
                    }
                    else if (this.scrollTop < headerObj[0].offsetTop) {
                        document.querySelector(".fixtitle").style.display = 'none';
                    }
                }

                //滚动条触底触发事件
                if(scrollHeight - screenHeight - this.scrollTop < 100){
                    if(!this.isLoading && this.page < this.totalPage) {
                        this.page = this.page + 1;
                        this.getData();
                    }
                }

                if(this.scrollTop > 100){
                    this.hastop = true;
                }
                else{
                    this.hastop = false;
                }
            },

            getData(){
                if(!this.isLoading) {
                    this.isLoading = true;
                    var token = this.token ? this.token : '';
                    var url = this.url + '/deviceOpenRecord/list/' + this.groupId + '/' + this.deviceId + '?access_token=' + token;
                    this.axios({
                        method: 'post',
                        url: url,
                        data: {
                            page: {
                                number: this.page,
                                size: this.perPage
                            }
                        },
                    }).then(function (response) {
                        if(this.page == 1){
                            this.dataList = [];
                        }

                        if (response.status == 200 && typeof(response.data) != 'undefined' && typeof(response.data.type) != 'undefined' && response.data.type == 'SUCCESS' && typeof(response.data.data) != 'undefined' && response.data.data.content.length > 0) {
                            this.totalPage = response.data.data.totalPages;
                            this.total = response.data.data.total;
                            var data = response.data.data.content;
                            var length = data.length;
                            var newData = [];


                            if(this.page == 1) {
                                //first page
                                for (var i = 0; i < length; i++) {
                                    response.data.data.content[i].dateObj = unixtimefromat(data[i].createDate);
                                    if (i == 0) {
                                        var obj = {};
                                        var key = `${response.data.data.content[i].dateObj.zh_short_date}`;
                                        obj[key] = [response.data.data.content[i]];
                                        newData.push(obj);
                                    }
                                    else {
                                        if (response.data.data.content[i].dateObj.zh_short_date == response.data.data.content[i - 1].dateObj.zh_short_date) {
                                            //same day
                                            var temp3 = newData.slice(0);
                                            var key = `${response.data.data.content[i].dateObj.zh_short_date}`;
                                            var index = temp3.length - 1;
                                            var temp4 = temp3[index][key]
                                            temp4.push(response.data.data.content[i]);
                                            newData = temp3.slice(0);
                                        }
                                        else {
                                            //other day
                                            var obj2 = {};
                                            var key = `${response.data.data.content[i].dateObj.zh_short_date}`;
                                            obj2[key] = [response.data.data.content[i]];
                                            var temp2 = newData.slice(0);
                                            temp2.push(obj2)
                                            newData = temp2.slice(0);
                                        }
                                    }
                                }
                                this.dataList = this.dataList.concat(newData);
                                this.hasData = true;
                            }
                            else{
                                var last_data = this.dataList.slice(0);
                                var last_data_last_index = last_data.length - 1;
                                var last_data_last_index_data = last_data[last_data_last_index];
                                var keys_arr = Object.keys(last_data_last_index_data);
                                var first_key = keys_arr[0];
                                var value = last_data_last_index_data[first_key];

                                var data = response.data.data.content;
                                var length = data.length;
                                var newData = [];

                                for (var i = 0; i < length; i++) {
                                    response.data.data.content[i].dateObj = unixtimefromat(data[i].createDate);
                                    if (i == 0) {
                                        if (response.data.data.content[i].dateObj.zh_short_date == first_key) {
                                            //same day
                                            var temp5 = last_data.slice(0);
                                            var key = `${response.data.data.content[i].dateObj.zh_short_date}`;
                                            var index = temp5.length - 1;
                                            var temp6 = temp5[index][key]
                                            temp6.push(response.data.data.content[i]);
                                            newData = temp5.slice(0);
                                        }
                                        else{
                                            //other day
                                            var obj3 = {};
                                            var key = `${response.data.data.content[i].dateObj.zh_short_date}`;
                                            obj3[key] = [response.data.data.content[i]];
                                            var temp7 = newData.slice(0);
                                            temp7.push(obj3)
                                            newData = temp7.slice(0);
                                        }
                                    }
                                    else{
                                        if (response.data.data.content[i].dateObj.zh_short_date == response.data.data.content[i - 1].dateObj.zh_short_date) {
                                            //same day
                                            var temp8 = newData.slice(0);
                                            var key = `${response.data.data.content[i].dateObj.zh_short_date}`;
                                            var index = temp8.length - 1;
                                            var temp9 = temp8[index][key]
                                            temp9.push(response.data.data.content[i]);
                                            newData = temp8.slice(0);
                                        }
                                        else {
                                            //other day
                                            var obj4 = {};
                                            var key = `${response.data.data.content[i].dateObj.zh_short_date}`;
                                            obj4[key] = [response.data.data.content[i]];
                                            var temp3 = newData.slice(0);
                                            temp3.push(obj4)
                                            newData = temp3.slice(0);
                                        }
                                    }
                                }
                                this.dataList = newData.slice(0);
                            }
                        }
                        else{
                            this.hasData = false;
                        }
                        this.isLoading = false;
                        this.interactive(response);
                    }.bind(this)).catch(function (error) {
                        this.isLoading = false;
                        if(this.page == 1){
                            this.dataList = [];
                        }
                        this.interactive(error);
                    }.bind(this));
                }
            },
            init(cb){
                var that = this;
                var u = navigator.userAgent;
                var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
                //注册事件监听
                function setupWebViewJavascriptBridge(callback) {
                    if(isAndroid){
                        if (window.WebViewJavascriptBridge) {
                            callback(WebViewJavascriptBridge)
                        } else {
                            document.addEventListener(
                                'WebViewJavascriptBridgeReady'
                                , function() {
                                    callback(WebViewJavascriptBridge)
                                },
                                false
                            );
                        }
                    }
                    else {
                        if (window.WebViewJavascriptBridge) {
                            return callback(WebViewJavascriptBridge);
                        }
                        if (window.WVJBCallbacks) {
                            return window.WVJBCallbacks.push(callback);
                        }
                        window.WVJBCallbacks = [callback];
                        var WVJBIframe = document.createElement('iframe');
                        WVJBIframe.style.display = 'none';
                        WVJBIframe.src = 'https://__bridge_loaded__';
                        document.documentElement.appendChild(WVJBIframe);
                        setTimeout(function () {
                            document.documentElement.removeChild(WVJBIframe)
                        }, 0)
                    }
                }

                //注册回调函数，第一次连接时调用 初始化函数
                setupWebViewJavascriptBridge(function(bridge) {
                    if(isAndroid) {
                        bridge.init(function (message, responseCallback) {
                            var msgObj = JSON.parse(message);
                            that.is_init = false;
                            that.token = msgObj.token;
                            that.groupId = msgObj.groupId;
                            that.deviceId = msgObj.deviceId;
                            that.url = msgObj.url;
                            cb();
                            responseCallback('success');
                        });
                    }
                    else{
                        bridge.registerHandler('functionInJs', function(data, responseCallback) {
                            that.is_init = false;
                            that.token = data.token;
                            that.url = data.url;
                            that.groupId = data.groupId;
                            that.deviceId = data.deviceId;
                            cb();
                            responseCallback('success');
                        });
                    }
                });
            },
            interactive(data){
                window.WebViewJavascriptBridge.callHandler(
                    'submitFromWeb'
                    ,data
                    , function(responseData) {
                        //来自App的回传数据
                    }
                );
            },
            totop(){
                let contentObj = document.querySelector(".lockpage");
                contentObj.scrollTop = 0;
            }
        },
        mounted() {
            this.init(function(){
                this.getData();
                var contentObj = document.querySelector(".lockpage");
                contentObj.addEventListener('scroll', this.scroll);
            }.bind(this));
        }
    }
</script>
<style scoped="scoped">
    .loading{
        position: fixed;
        left: 50%;
        top:50%;
        margin-top: -45px;
        margin-left: -45px;
        background: rgba(0,0,0,0.5);
        padding: 20px;
        border-radius: 5px;
        z-index: 99;
    }
    .lockrecord{
        padding-top: 0.15rem;
    }
    article,section,time,aside{display:block;}
    .point-time {
        content: "";
        position: absolute;
        width: 13px;
        height: 13px;
        top: 17px;
        left: 0.75rem;
        margin-left: -4px;
        border-radius: 50%;
        box-shadow: 0 0 0 5px #fff;
    }
    .point-time img{
        width: 0.3rem;
        height: 0.3rem;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -0.15rem;
        margin-top: -0.15rem;
        opacity: 0.5;
    }
    .text-finger {
        color: #8a8a8a;
    }
    .text-pwd {
        color: #8a8a8a;
    }
    .text-card {
        color: #8a8a8a;
    }
    .text-remote {
        color: #8a8a8a;
    }
    .text-lock {
        color: #8a8a8a;
    }
    .content{
        height: 100%;
        width: 100%;
        overflow: auto;
        -webkit-overflow-scrolling : touch;
        font-size: 0.14rem;
        background: #fff;
    }
    .content article {
        position: relative;
        padding-left: 0.15rem;
    }
    .content article > h3 {
        width: 0.75rem;
        height: 20px;
        line-height: 20px;
        text-align: right;
        font-size: 16px;
        color: #1d1d1d;
        padding: 10px 0 20px;
    }
    .content article section {
        padding: 0 0 0.3rem;
        position: relative;
    }
    .content article section:before {
        content: "";
        width: 1px;
        top: 38px;
        bottom: -10px;
        left: 0.77rem;
        background: #e6e6e6;
        position: absolute;
    }
    .content article section:last-child:before {
        display: none;
    }
    .content article section time {
        width: 0.5rem;
        display: block;
        position: absolute;
        top: 14px;
    }
    .content article section time > span {
        display: block;
        text-align: right;
    }
    .content article section aside {
        color: #3a3a38;
        margin-left: 1.75rem;
        margin-right: 0.15rem;
    }
    .content article section aside p{
        height: 0.25rem;
        line-height: 0.25rem;
    }
    .content article section .brief {
        color: #9f9f9f;
    }
    .content article section .headerimg{
        padding-bottom: 10px;
        position: absolute;
        left: 1.05rem;
        top:-1px;
    }
    .content article section .headerimg img{
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
    }
    .fixtitle{
        position: fixed;
        left:0.9rem;
        top: 0rem;
        margin-left: -0.16rem;
        width: 0.36rem;
        height: 0.36rem;
        line-height: 0.14rem;
        padding: 0.04rem;
        box-sizing: border-box;
        text-align: center;
        background: red;
        color: #fff;
        -webkit-border-radius:50%;
        -moz-border-radius:50%;
        border-radius:50%;
        display: none;
        z-index: 9999;
        font-size: 0.12rem;
    }

    .clear{
        clear: both;
    }
    .nodata{
        position: fixed;
        left: 0px;
        top: 50%;
        margin-top: -120px;
        text-align: center;
        width: 100%;
        font-size: 16px;
        color: #9b9b9b;
    }
    .nodata img{
        width: 1.2rem;
    }
    .hasbottom{
        width:100%;
        text-align: center;
        padding-top: 10px;
        padding-bottom: 15px;
    }
    .hasbottom span{
        display: inline-block;
        margin: 0px 5px;
        color: #999;
    }
    .hasbottom span.left{
        border-bottom: 1px solid #e6e6e6;
        position: relative;
        top:-5px;
        width: 80px;
    }
    .hasbottom span.right{
        border-bottom: 1px solid #e6e6e6;
        position: relative;
        top:-5px;
        width: 80px;
    }
    .totop{
        position: fixed;
        bottom: 0.15rem;
        right: 0.15rem;
        width: 0.4rem;
        height: 0.4rem;
    }
    .totop img{
        width: 100%;
    }
</style>