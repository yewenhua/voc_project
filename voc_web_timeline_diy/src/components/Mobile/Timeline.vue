<template>
    <div class="content">
        <div v-if="isLoading" class="loading">
            <mt-spinner type="fading-circle" :size="40" color="#fff"></mt-spinner>
        </div>
        <mt-datetime-picker ref="picker" type="date" :endDate="enddate" v-model="datetime" year-format="{value} 年" month-format="{value} 月" date-format="{value} 日" @confirm="handleConfirm"></mt-datetime-picker>
        <div class="top-h-bg">
            <div class="top-h">
                <ul>
                    <li @click="clickMsg">{{msgType}}</li>
                    <li @click="openPicker">{{selectDate ? selectDate : '请选择时间'}}<img v-if="selectDate" @click.stop="clear" src="../../assets/img/close.png"/></li>
                    <div class="clear"></div>
                </ul>
            </div>
            <div class="top-h-msg" :class="{ mshow: msgshow }">
                <ul>
                    <li v-for="(v, k) in msglist" :class="{ active: v.selected }" @click="selectMsg(k)">{{v.name}}</li>
                </ul>
            </div>
        </div>
        <div id="log_msg"></div>
        <div class="detail-content timeline-page" @click="closeMsg">
            <div class="fixtitle">07月08日</div>
            <article class="timeheader" v-for="(v, k) in dataList" :key="k">
                <h3 class="timetitle" v-for="(item, key) in v" :key="key">{{key}}</h3>
                <div v-for="(detail, index) in v" :key="index">
                    <section v-for="(item, kk) in detail" :key="kk">
                        <span class="point-time" :class="item.level == 'NORMAL' ? 'point-green' : item.level == 'PUSH' ? 'point-blue' : item.level == 'WARN' ? 'point-yellow' : item.level == 'DAGER' ? 'point-red' : 'point-green'"></span>
                        <time>
                            <span>{{item.dateObj.hour_min}}</span>
                        </time>
                        <aside>
                            <p class="things">{{item.title ? item.title : '--'}}</p>
                            <p class="brief"><span :class="item.level == 'NORMAL' ? 'text-green' : item.level == 'PUSH' ? 'text-blue' : item.level == 'WARN' ? 'text-yellow' : item.level == 'DAGER' ? 'text-red' : 'text-green'">{{item.content ? item.content : '--'}}</span></p>
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
    </div>
</template>
<script>
    import Vue from 'vue'
    import { unixtimefromat } from '../utils'
    import { DatetimePicker, Spinner  } from 'mint-ui'

    Vue.component(DatetimePicker.name, DatetimePicker);
    Vue.component(Spinner.name, Spinner);

    export default {
        computed: {
            selectDate(){
                return this.date ? unixtimefromat(this.date.getTime()).date : '';
            }
        },
        data(){
            return {
                scrollTop: '',
                date: '',
                datetime: new Date(),
                enddate: new Date(),
                msglist: [
                    {name: '全部消息', selected: true, type: ''},
                    {name: '业务消息', selected: false, type: 'BUSINESS'},
                    {name: '设备消息', selected: false, type: 'DEVICE'},
                    {name: '家庭消息', selected: false, type: 'FAMILY'}
                ],
                msgType: '全部消息',
                msgshow: false,
                searchKey: '',
                isLoading: false,
                page: 1,
                perPage: 10,
                totalPage: 1,
                dataList: [],
                hasData: true,
                total: 1,
                token: '',
                is_init: true,
                url: ''
            }
        },
        methods: {
            menu() {
                var menuObj = document.querySelector(".top-h-bg");
                var menuH = menuObj.offsetHeight;
                var obj = document.querySelector(".timeline-page");
                var screenHeight = obj.offsetHeight;   //屏幕可见高度
                var scrollHeight = obj.scrollHeight;   //所有内容总高度
                this.scrollTop = document.querySelector(".timeline-page").scrollTop;   //滚动条距离顶部高度

                var headerObj = document.getElementsByClassName("timeheader");
                var length = headerObj.length;
                for (var i = length - 1; i >= 0; i--) {
                    if (this.scrollTop > headerObj[i].offsetTop - menuH) {
                        var fixtitle = document.getElementsByClassName("timetitle")[i].innerHTML;
                        document.querySelector(".fixtitle").style.display = 'block';
                        document.querySelector(".fixtitle").innerHTML = fixtitle;
                        break;
                    }
                    else if (this.scrollTop < headerObj[0].offsetTop - menuH) {
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
            },
            selectMsg(index){
                for (var i = 0; i < this.msglist.length; i++) {
                    if (index == i) {
                        this.msglist[i].selected = true;
                        this.msgType = this.msglist[i].name;
                        this.searchKey = this.msglist[i].type;
                    }
                    else {
                        this.msglist[i].selected = false;
                    }
                }
                this.msgshow = false;
            },
            clickMsg(){
                this.msgshow = !this.msgshow;
            },
            closeMsg(){
                this.msgshow = false;
            },
            getData(){
                if(!this.isLoading) {
                    this.isLoading = true;
                    var token = this.token ? this.token : '';
                    var url = this.url + '/message/page?access_token=' + token;
                    this.axios({
                        method: 'post',
                        url: url,
                        data: {
                            searchMap: {
                                source_eq: [this.searchKey],
                                createDate_eq: [this.selectDate ? this.selectDate : '']
                            },
                            page: {
                                number: this.page, //page
                                size: this.perPage   //perpage
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
                            if(this.page == 1) {
                                this.hasData = false;
                            }
                        }
                        this.isLoading = false;
                        this.interactive(response);
                    }.bind(this)).catch(function (error) {
                        this.isLoading = false;
                        if(this.page == 1){
                            this.hasData = false;
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
            openPicker(){
                this.closeMsg();
                this.datetime = this.date ? this.date : this.datetime;
                this.$refs.picker.open();
            },
            handleConfirm(value){
                this.date = value;
            },
            clear(){
                this.date = '';
                this.datetime = new Date();
            }
        },
        mounted() {
            this.init(function(){
                this.getData();
                var contentObj = document.querySelector(".timeline-page");
                contentObj.addEventListener('scroll', this.menu);
            }.bind(this));
        },
        watch: {
            'searchKey'(newVal, oldVal){
                if(newVal != oldVal && !this.is_init){
                    this.page = 1;
                    this.totalPage = 1;
                    document.querySelector(".timeline-page").scrollTop = 0;
                    this.scrollTop = 0;
                    this.getData();
                }
            },
            'date'(newVal, oldVal){
                if(newVal != oldVal && !this.is_init){
                    this.page = 1;
                    this.totalPage = 1;
                    document.querySelector(".timeline-page").scrollTop = 0;
                    this.scrollTop = 0;
                    this.getData();
                }
            }
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
    article,section,time,aside{display:block;}
    .point-time {
        content: "";
        position: absolute;
        width: 13px;
        height: 13px;
        top: 17px;
        left: 0.75rem;
        background: #7cb5ec;
        margin-left: -4px;
        border-radius: 50%;
        box-shadow: 0 0 0 5px #fff;
    }
    .text-red {
        color: #f6393f;
    }
    .text-blue {
        color: #7cb5ec;
    }
    .text-green {
        color: #90ed7d;
    }
    .text-yellow {
        color: #C3A150;
    }
    .text-purple {
        color: #d32d93;
    }
    .point-red {
        background-color: #f6393f;
    }
    .point-blue {
        background-color: #7cb5ec;
    }
    .point-green {
        background-color: #90ed7d;
    }
    .point-yellow {
        background-color: #C3A150;
    }
    .point-purple {
        background-color: #d32d93;
    }
    .content{
        height: 100%;
        width: 100%;
        overflow: hidden;
        font-size: 0.14rem;
    }
    .content article {
        position: relative;
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
        padding: 0 0 17px;
        position: relative;
    }
    .content article section:before {
        content: "";
        width: 5px;
        top: 17px;
        bottom: -17px;
        left: 0.75rem;
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
        margin-left: 1.05rem;
        margin-right: 0.15rem;
        padding-bottom: 10px;
    }
    .content article section .brief {
        color: #9f9f9f;
    }
    .fixtitle{
        position: fixed;
        left:0.75rem;
        top: 47px;
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
    .top-h{
        border-top: 1px solid #e6e6e6;
        border-bottom: 1px solid #e6e6e6;
        z-index: 999;
    }
    .top-h ul{
        padding: 0px;
        margin: 0px;
        list-style: none;
        background: #fff;
    }
    .top-h li:first-child{
        list-style: none;
        border-right: 1px solid #e6e6e6;
    }
    .top-h li{
        float: left;
        width: 50%;
        text-align: center;
        box-sizing: border-box;
        height: 40px;
        line-height: 40px;
        color: #5F5F5F;
        font-size: 14px;
        position: relative;
    }
    .top-h li img{
        position: absolute;
        right: 0.2rem;
        top: 50%;
        transform: translateY(-50%);
        width: 0.15rem;
        height: 0.15rem;
    }
    .clear{
        clear: both;
    }
    .detail-content{
        position: absolute;
        top: 45px;
        width: 100%;
        overflow: auto;
        -webkit-overflow-scrolling : touch;
        height: calc( 100% - 45px );
    }
    .top-h-bg{
        position: absolute;
        left:0px;
        top:0px;
        z-index: 9999999;
        width: 100%;
    }
    .top-h-msg{
        position: absolute;
        left:0px;
        top: 42px;
        background: #fff;
        z-index: 99;
        width: 100%;
        height: 0px;
        overflow: hidden;
        transition: all 0.2s ease-in-out;
        box-shadow: 0px 2px 5px rgba(0,0,0,0.2);
    }
    .top-h-msg ul{
        list-style: none;
        margin: 0px;
        padding: 0px;
        width: 100%;
    }
    .top-h-msg li{
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        position: relative;
    }
    .top-h-msg li:before{
        content: "";
        width: 100%;
        height: 1px;
        bottom: 0px;
        left: 0px;
        background: #eee;
        position: absolute;
    }
    .top-h-msg li.active{
        background: #eee;
    }
    .mshow{
        height: 160px;
    }
    .nodata{
        position: absolute;
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
</style>