<template>
    <div class="page">
        <div v-if="isLoading" class="loading">
            <mt-spinner type="fading-circle" :size="40" color="#fff"></mt-spinner>
        </div>
        <div class="sel-data">
            <div class="left" @click="prev"></div>
            <div class="center">{{selectDate}}</div>
            <div class="right" @click="next"></div>
        </div>
        <div v-show="hasData">
            <div class="statistic">
                <h-chart :id="id" :option="option" v-if="hasData"></h-chart>
            </div>
            <div class="empty_data" v-if="hasData"></div>
            <div class="content" v-if="hasData">
                <div class="fixtitle">{{dataList[0].dateObj.zh_short_date}}</div>
                <article class="timeheader">
                    <section v-for="(v, k) in dataList" :key="k">
                        <span class="point-time" :class="v.level == 'NORMAL' ? 'point-green' : v.level == 'PUSH' ? 'point-blue' : v.level == 'WARN' ? 'point-yellow' : v.level == 'DAGER' ? 'point-red' : 'point-green'"></span>
                        <time>
                            <span>{{v.dateObj.hour_min}}</span>
                        </time>
                        <aside>
                            <p class="things">{{v.title ? v.title : '--'}}</p>
                            <p class="brief"><span :class="v.level == 'NORMAL' ? 'text-green' : v.level == 'PUSH' ? 'text-blue' : v.level == 'WARN' ? 'text-yellow' : v.level == 'DAGER' ? 'text-red' : 'text-green'">{{v.content ? v.content : '--'}}</span></p>
                        </aside>
                    </section>
                </article>
            </div>
        </div>
        <div class="nodata-t" v-if="!hasData && !isLoading">
            <div class="nodata-content">
                <ul class="nodata-title">
                    <li><i class="green"></i><span>普通消息</span></li>
                    <li><i class="blue"></i><span>推送消息</span></li>
                    <li><i class="yellow"></i><span>警告消息</span></li>
                    <li><i class="red"></i><span>危险消息</span></li>
                    <div class="clear"></div>
                </ul>
                <ul class="mock-data">
                    <li><span>25</span></li>
                    <li><span>20</span></li>
                    <li><span>15</span></li>
                    <li><span>10</span></li>
                    <li><span>5</span></li>
                    <li><span>0</span></li>
                    <div class="xy-line">
                        <span v-for="(item, index) in 24">{{index}}</span>
                    </div>
                    <div class="xy-v">
                        <span v-for="(item, index) in 24">0</span>
                    </div>
                </ul>
            </div>
        </div>
        <div class="img-info" v-if="!hasData && !isLoading">
            <img src="../../assets/img/nodata.png"/>
            <div class="text">亲，木有数据哦！</div>
            <div class="empty_data_two"></div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    // 导入chart组件
    import HChart from './HChart.vue'
    import { unixtimefromat } from '../utils'
    import { Spinner, Toast } from 'mint-ui'
    Vue.component(Spinner.name, Spinner);

    export default {
        name: 'app',
        computed: {
            selectDate(){
                return unixtimefromat(this.date.getTime()).date;
            }
        },
        data() {
            let option = {
                chart: {
                    type: 'column'
                },
                title: {
                    text: '消息类型统计'
                },
                xAxis: {
                    categories: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: null
                    },
                    stackLabels: {
                        enabled: true,
                        style: {
                            fontWeight: 'bold',
                            color: 'gray'
                        }
                    }
                },
                legend: {
                    align: 'center',
                    x: 30,
                    verticalAlign: 'top',
                    y: 25,
                    floating: true,
                    backgroundColor: 'white',
                    shadow: false
                },
                tooltip: {
                    formatter: function () {
                        return '<b>' + this.x + '</b><br/>' +
                            this.series.name + ': ' + this.y + '<br/>' +
                            '总量: ' + this.point.stackTotal;
                    }
                },
                plotOptions: {
                    column: {
                        stacking: 'normal',
                        dataLabels: {
                            enabled: true,
                            color: 'white',
                            formatter: function() {
                                if(this.y > 0){
                                    return this.y;
                                }
                                else{
                                    return '';
                                }
                            },
                            style: {
                                textShadow: 'none',
                                textOutline: "none"
                            }
                        }
                    }
                },
                colors: ['#90ed7d', '#7cb5ec', '#C3A150', '#f6393f'],
                series: [{
                    name: '普通消息',
                    data: []
                }, {
                    name: '推送消息',
                    data: []
                }, {
                    name: '警告消息',
                    data: []
                }, {
                    name: '危险消息',
                    data: []
                }],
                credits: {
                    enabled: false     //不显示LOGO
                }
            };

            return {
                id: 'stack',
                option: option,
                isLoading: false,
                dataList: [],
                hasData: false,
                token: '',
                date: new Date(),
                graph: null,
                url: ''
            }
        },
        components: {
            HChart
        },
        methods: {
            getData(){
                let graph = {
                    normal: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    push: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    warn: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    danger: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
                };
                if(!this.isLoading) {
                    this.isLoading = true;
                    this.graph = graph;
                    var token = this.token ? this.token : '';
                    var url = this.url + '/message/list?access_token=' + token;
                    this.axios({
                        method: 'post',
                        url: url,
                        data: {
                            searchMap: {
                                createDate_eq: [this.selectDate ? this.selectDate : '']
                            }
                        },
                    }).then(function (response) {
                        this.isLoading = false;
                        if (response.status == 200 && typeof(response.data) != 'undefined' && typeof(response.data.type) != 'undefined' && response.data.type == 'SUCCESS' && typeof(response.data.data) != 'undefined' && response.data.data.length > 0){
                            this.hasData = true;

                            for(var i=0; i<response.data.data.length; i++){
                                response.data.data[i].dateObj = unixtimefromat(response.data.data[i].createDate);
                                var index = response.data.data[i].dateObj.int_hour;
                                if(response.data.data[i].level == 'NORMAL'){
                                    var temp = this.graph.normal.slice(0);
                                    temp[index]++;
                                    this.graph.normal = temp;
                                }
                                else if(response.data.data[i].level == 'PUSH'){
                                    var temp2 = this.graph.push.slice(0);
                                    temp2[index]++;
                                    this.graph.push = temp2;
                                }
                                else if(response.data.data[i].level == 'WARN'){
                                    var temp3 = this.graph.warn.slice(0);
                                    temp3[index]++;
                                    this.graph.warn = temp3;
                                }
                                else if(response.data.data[i].level == 'DANGER'){
                                    var temp4 = this.graph.danger.slice(0);
                                    temp4[index]++;
                                    this.graph.danger = temp4;
                                }
                            }

                            this.option.series[0].data = this.graph.normal.slice(0);
                            this.option.series[1].data = this.graph.push.slice(0);
                            this.option.series[2].data = this.graph.warn.slice(0);
                            this.option.series[3].data = this.graph.danger.slice(0);

                            this.dataList = this.dataList.concat(response.data.data);
                            setTimeout(function () {
                                document.querySelector(".statistic").scrollLeft = 220;
                            }, 100);
                        }
                        else{
                            this.hasData = false;
                        }
                        this.interactive(response);
                    }.bind(this)).catch(function (error) {
                        this.isLoading = false;
                        this.hasData = false;
                        this.dataList = [];
                        this.interactive(error);
                    }.bind(this));
                }
            },
            openPicker(){
                this.$refs.picker.open();
            },
            prev(){
                var timestamp = this.date.getTime() - 24 * 60 * 60 * 1000;
                var newDate = new Date();
                newDate.setTime(timestamp);
                this.date = newDate;
            },
            next(){
                var today = new Date();
                var today_timestamp = today.getTime();
                var timestamp = this.date.getTime() + 24 * 60 * 60 * 1000;
                if(timestamp <= today_timestamp) {
                    var newDate = new Date();
                    newDate.setTime(timestamp);
                    this.date = newDate;
                }
                else{
                    Toast('已经到今天了');
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
                            that.token = msgObj.token;
                            that.url = msgObj.url;
                            cb();
                            responseCallback('success');
                        });
                    }
                    else{
                        bridge.registerHandler('functionInJs', function(data, responseCallback) {
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
            }
        },
        mounted(){
            this.init(function(){
                this.dataList = [];
                this.getData();
            }.bind(this));
        },
        watch: {
            'selectDate'(newVal, oldVal){
                if(newVal != oldVal){
                    this.option.series[0].data = [];
                    this.option.series[1].data = [];
                    this.option.series[2].data = [];
                    this.option.series[3].data = [];
                    this.dataList = [];
                    this.hasData = false;
                    this.getData();
                }
            }
        }
    }
</script>

<style scoped>
    .page{
        width:100%;
        height: 100%;
        overflow: auto;
        -webkit-overflow-scrolling : touch;
        background: white;
        font-size: 0.14rem;
        box-sizing: border-box;
    }
    .sel-data{
        height: 45px;
        line-height:45px;
        border-bottom: 1px solid #f4f4f4;
        text-align: center;
        background: white;
        position: relative;
    }
    .sel-data:before{
        content:" ";
        display:inline-block;
        height:6px;
        width:6px;
        border-width:0px 0px 2px 2px;
        border-color:#C8C8CD;
        border-style:solid;
        -webkit-transform:matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
        transform:matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
        top:-2px;
        position:absolute;
        top:50%;
        margin-top:-4px;
        left:0.8rem;
    }
    .sel-data:after{
        content:" ";
        display:inline-block;
        height:6px;
        width:6px;
        border-width:2px 2px 0 0;
        border-color:#C8C8CD;
        border-style:solid;
        -webkit-transform:matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
        transform:matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
        top:-2px;
        position:absolute;
        top:50%;
        margin-top:-4px;
        right:0.8rem;
    }
    .sel-data .left{
        position: absolute;
        left: 0px;
        top:0px;
        height: 100%;
        z-index: 9;
        width: 40%;
    }
    .sel-data .right{
        position: absolute;
        right: 0px;
        top:0px;
        height: 100%;
        width: 40%;
        z-index: 9;
    }
    .highcharts-title{
        visibility: hidden;
    }
    .statistic{
        width:100%;
        overflow: auto;
        background: white;
        -webkit-overflow-scrolling : touch;
    }
    #stack {
        width: 200%;
        height: 100%;
        margin-top: -0.15rem;
    }
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
        position: relative;
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
        margin-left: 0.59rem;
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
        z-index: 9999;
        font-size: 0.12rem;
    }
    .nodata-t{
        width: 100%;
        overflow: auto;
    }
    .nodata-content{
        width: 200%;
        min-height: 3rem;
        text-align: center;
        overflow: hidden;
        background: white;
    }
    .nodata-title{
        text-align: center;
        list-style: none;
        margin: 0.15rem 0rem;
        margin-left: 0.4rem;
        padding: 0px;
    }
    .nodata-title li{
        margin: 0px 0.1rem;
        font-size: 0.12rem;
        float: left;
    }
    .nodata-title li span{
        display: inline-block;
    }
    .nodata-title li i{
        background: red;
        width: 0.12rem;
        height: 0.12rem;
        border-radius: 50%;
        display: inline-block;
        margin-right: 0.1rem;
    }
    .nodata-title li i.red{
        background: #f6393f;
    }
    .nodata-title li i.blue{
        background: #7cb5ec;
    }
    .nodata-title li i.green{
        background: #90ed7d;
    }
    .nodata-title li i.yellow{
        background: #C3A150;
    }
    .clear{
        clear: both;
    }
    .img-info{
        width: 100%;
        text-align: center;
        margin-top: 0.1rem;
    }
    .img-info img{
        width: 1.2rem;
    }
    .img-info .text{
        color: #666;
        margin-top: 0.1rem;
    }
    .mock-data{
        list-style: none;
        padding: 0px;
        margin: 0px;
        position: relative;
    }
    .mock-data li{
        height: 0.55rem;
        position: relative;
        text-align: left;
    }
    .mock-data li:before{
        content: "";
        width: 100%;
        left: 0.4rem;
        top: 0px;
        background: #eee;
        position: absolute;
        height: 1px;
        transform: scaleY(0.5);
    }
    .mock-data li span{
        position: absolute;
        left: 0.15rem;
        top: -0.1rem;
        font-size: 12px;
    }
    .xy-line{
        position: absolute;
        bottom: 0.32rem;
        left: 0.26rem;
        width: 100%;
    }
    .xy-line span{
        width: 4%;
        height:0.15rem;
        border-left: 1px solid #eee;
        display: inline-block;
        font-size: 12px;
        padding-top: 0.05rem;
        box-sizing: border-box;
    }
    .xy-v{
        position: absolute;
        bottom: 0.32rem;
        left: 0.4rem;
        width: 100%;
    }
    .xy-v span{
        width: 4%;
        height:0.15rem;
        display: inline-block;
        font-size: 12px;
        position: relative;
        left: -0.14rem;
        bottom: 0.3rem;
    }
    .empty_data{
        height: 10px;
        width: 100%;
    }
    .empty_data_two{
        height: 25px;
        width: 100%;
    }
</style>