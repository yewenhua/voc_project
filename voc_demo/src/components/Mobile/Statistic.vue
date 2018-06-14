<template>
    <div class="echarts">
        <IEcharts :option="bar" :loading="loading"></IEcharts>
    </div>
</template>

<script type="text/babel">
    import IEcharts from 'vue-echarts-v3/src/full.vue';
    export default {
        name: 'view',
        components: {
            IEcharts
        },
        props: {
        },
        data: () => ({
            loading: false,
            bar: {
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    data:['百度','谷歌','必应','其他']
                },

                xAxis : [
                    {
                        type : 'category',
                        data : ['周一','周二','周三','周四','周五','周六','周日']
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'百度',
                        type:'bar',
                        barWidth : 20,
                        stack: '搜索引擎',
                        data:[620, 732, 701, 734, 1090, 1130, 1120]
                    },
                    {
                        name:'谷歌',
                        type:'bar',
                        stack: '搜索引擎',
                        data:[120, 132, 1101, 134, 290, 830, 220]
                    },
                    {
                        name:'必应',
                        type:'bar',
                        stack: '搜索引擎',
                        data:[620, 572, 671, 374, 190, 130, 510]
                    },
                    {
                        name:'其他',
                        type:'bar',
                        stack: '搜索引擎',
                        data:[262, 182, 931, 384, 169, 910, 420]
                    }
                ]
            }
        }),
        methods: {

        }
    };
</script>

<style scoped>
    .echarts {
        margin-top: 30px;
        width: 400px;
        height: 400px;
    }
</style>