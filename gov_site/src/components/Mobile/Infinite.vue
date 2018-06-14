<template>
    <div id="app">
        <div v-for="(item,key) in list" :key="key">
            <vue-pull-refresh :on-refresh="onRefresh" v-if="key == 0">
                <touch-ripple>
                    <p class="line">
                        Line:
                        <span v-text="item"></span>
                    </p>
                </touch-ripple>
            </vue-pull-refresh>
            <touch-ripple>
                <p class="line" v-if="key != 0">
                    Line:
                    <span v-text="item"></span>
                </p>
            </touch-ripple>
        </div>
        <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading"></infinite-loading>
    </div>
</template>
<script>
    import InfiniteLoading from 'vue-infinite-loading';
    import VuePullRefresh from 'vue-pull-refresh';
    import { touchRipple } from 'vue-touch-ripple';
    require('vue-touch-ripple/component.css');

    export default {
        data(){
            return {
                list: [],
            }
        },
        components: {
            InfiniteLoading,
            VuePullRefresh,
            touchRipple
        },
        methods: {
            onInfinite() {
                setTimeout(() => {
                    const temp = [];
                    for (let i = this.list.length + 1; i <= this.list.length + 10; i++) {
                        temp.push(i);
                    }
                    this.list = this.list.concat(temp);
                    this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
                }, 1000);
            },
            onRefresh: function() {
                return new Promise(function (resolve, reject) {
                    setTimeout(function () {
                        resolve();
                    }, 1000);
                });
            }
        },
    }

</script>
<style>
    html,body{
        height: 100%;
        width: 100%;
        overflow: auto;
        -webkit-overflow-scrolling : touch;
    }
    #app{
        height: 100%;
        width: 100%;
        overflow: auto;
        -webkit-overflow-scrolling : touch;
    }
    .line{
        border-bottom: 1px solid #9ed99d;
        overflow: hidden;
        height: 45px;
        line-height: 45px;
    }
</style>