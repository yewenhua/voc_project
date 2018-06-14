<template>
    <div class="page">
        <div class="statistic">
            <h-chart :id="id" :option="option"></h-chart>
        </div>
        <div class="content">
            <div class="fixtitle">07月08日</div>
            <article class="timeheader">
                <section>
                    <span class="point-time point-green"></span>
                    <time datetime="2013-03">
                        <span>10:27</span>
                    </time>
                    <aside>
                        <p class="things">消息</p>
                        <p class="brief"><span class="text-green">指纹开门</span></p>
                    </aside>
                </section>
                <section>
                    <span class="point-time point-green"></span>
                    <time datetime="2012-11">
                        <span>09:27</span>
                    </time>
                    <aside>
                        <p class="things">消息</p>
                        <p class="brief"><span class="text-green">密码开门</span></p>
                    </aside>
                </section>
                <section>
                    <span class="point-time point-red"></span>
                    <time datetime="2012-09">
                        <span>08:27</span>
                    </time>
                    <aside>
                        <p class="things">消息</p>
                        <p class="brief"><span class="text-red">远程开门</span></p>
                    </aside>
                </section>
                <section>
                    <span class="point-time point-blue"></span>
                    <time datetime="2012-08">
                        <span>07:27</span>
                    </time>
                    <aside>
                        <p class="things">消息</p>
                        <p class="brief"><span class="text-blue">蓝牙开门</span></p>
                    </aside>
                </section>
                <section>
                    <span class="point-time point-red"></span>
                    <time datetime="2012-03">
                        <span>06:27</span>
                    </time>
                    <aside>
                        <p class="things">警告</p>
                        <p class="brief"><span class="text-red">暴力开门</span></p>
                    </aside>
                </section>
                <section>
                    <span class="point-time point-blue"></span>
                    <time datetime="2012-02">
                        <span>05:27</span>
                    </time>
                    <aside>
                        <p class="things">警告</p>
                        <p class="brief"><span class="text-blue">刷卡开门</span></p>
                    </aside>
                </section>
            </article>
        </div>
    </div>
</template>

<script>
    // 导入chart组件
    import HChart from './HChart.vue'
    export default {
        name: 'app',
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
                    x: -30,
                    verticalAlign: 'top',
                    y: 25,
                    floating: true,
                    backgroundColor: 'white',
                    borderColor: '#CCC',
                    borderWidth: 1,
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
                series: [{
                    name: '警告消息',
                    data: [5, 3, 4, 1, 2, 5, 3, 4, 7, 2, 1, 3, 4, 2, 2, 3, 3, 4, 1, 7, 2, 3, 4, 2]
                }, {
                    name: '正常消息',
                    data: [2, 2, 3, 6, 1, 2, 2, 1, 2, 1, 2, 2, 7, 2, 1, 2, 2, 3, 2, 1, 2, 5, 3, 2]
                }, {
                    name: '系统消息',
                    data: [3, 4, 7, 2, 5, 3, 1, 4, 2, 5, 3, 2, 4, 2, 7, 3, 4, 4, 2, 6, 3, 4, 4, 2]
                }],
                credits: {
                    enabled: false     //不显示LOGO
                }
            };

            return {
                id: 'stack',
                option: option
            }
        },
        components: {
            HChart
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
        background: #1c87bf;
        margin-left: -4px;
        border-radius: 50%;
        box-shadow: 0 0 0 5px #fff;
    }
    .text-red {
        color: #f6393f;
    }
    .text-blue {
        color: #1c87bf;
    }
    .text-green {
        color: #95c91e;
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
        background-color: #1c87bf;
    }
    .point-green {
        background-color: #95c91e;
    }
    .point-yellow {
        background-color: #ffb902;
    }
    .point-purple {
        background-color: #d32d93;
    }
    .content{
        position: relative;
        margin-top: 10px;
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
</style>