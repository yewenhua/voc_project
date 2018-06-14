<template>
    <div class="page">
        <Loading v-if="isLoading"></Loading>
        <div v-if="hasData">
            <div class="statistic">
                <h-chart :id="id" :option="option"></h-chart>
            </div>
            <div class="content">
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
        <div v-if="!hasData && !isLoading" class="nodata">
            <div class="img">
                <img src="../../assets/img/nodata.png"/>
            </div>
            <div>亲，今天还木有数据哦！</div>
        </div>
    </div>
</template>

<script>
    // 导入chart组件
    import HChart from './HChart.vue'
    import { unixtimefromat } from '../utils'

    export default {
        name: 'app',
        data() {
            let option = {
                chart: {
                    type: 'column'
                },
                title: {
                    text: '消息类型统计',
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
                    align: 'left',
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
                            style: {
                                textShadow: '0 0 3px black'
                            }
                        }
                    }
                },
                colors: ['#90ed7d', '#7cb5ec', '#ffb902', '#f6393f'],
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
                graph: {
                    normal: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    push: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    warn: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    danger: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
                }
            }
        },
        components: {
            HChart
        },
        methods: {
            getData(){
                if(!this.isLoading) {
                    this.isLoading = true;
                    var url = this.axios.defaults.baseURL + '/message/list?access_token=096fd2192b770efc5e344264a0cbe73a';
                    this.axios({
                        method: 'post',
                        url: url,
                        data: {
                            searchMap: {
                                createDate_eq: ['']
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
                        }
                        else{
                            this.hasData = false;
                        }
                    }.bind(this)).catch(function (error) {
                        this.isLoading = false;
                        this.hasData = false;
                    }.bind(this));
                }
            }
        },
        mounted(){
            this.getData();
        }
    }
</script>

<style>
    .page{
        width:100%;
        height: 100%;
        overflow: auto;
        -webkit-overflow-scrolling : touch;
        background: white;
    }
    .statistic{
        width:100%;
        overflow: auto;
        background: white;
        padding-top: 10px;
        -webkit-overflow-scrolling : touch;
    }
    #stack {
        width: 200%;
        height: 100%;
    }
    article,section,time,aside{display:block;}
    .point-time {
        content: "";
        position: absolute;
        width: 13px;
        height: 13px;
        top: 17px;
        left: 1rem;
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
        color: #ffb902;
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
        background-color: #ffb902;
    }
    .point-purple {
        background-color: #d32d93;
    }
    .content{
        position: relative;
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
        left: 1rem;
        background: #e6e6e6;
        position: absolute;
    }
    .content article section:last-child:before {
        display: none;
    }
    .content article section time {
        width: 0.75rem;
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
        margin-left: 1.3rem;
        padding-bottom: 10px;
    }
    .content article section .brief {
        color: #9f9f9f;
    }
    .fixtitle{
        margin-left: 0.84rem;
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
</style>