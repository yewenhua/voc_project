<template>
    <div class="x-bar">
        <div :id="id" :option="option"></div>
    </div>
</template>
<script>
    import HighMaps from 'highcharts/highmaps'
    export default {
        // 验证类型
        props: {
            id: {
                type: String
            },
            option: {
                type: Object
            }
        },
        mounted() {
            HighMaps.mapChart(this.id, this.option);
        }
    }
</script>