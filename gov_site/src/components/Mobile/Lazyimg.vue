<template>
    <div>
        <div class="hello">
            <ul>
                <li v-for="item in imgUrl" class="img">
                    <img v-lazy="item.src" alt="" width="300" height="150"/>
                </li>
            </ul>
        </div>

    </div>
</template>
<script>
    import Vue from 'vue'
    import VueLazyload from 'vue-lazyload'
    Vue.use(VueLazyload, {
        preLoad: 1.3,
        error: require('../../assets/img/banner1.jpg'),
        loading: 'dist/loading-spin.svg',
        attempt: 1,
        scale:2,
        listenEvents: [ 'scroll', 'mousewheel' ]
    });

    export default {
        data(){
            return {
                imgUrl: [
                    {src: require('../../assets/img/banner1.jpg')},
                    {src: require('../../assets/img/banner2.jpg')},
                    {src: require('../../assets/img/banner3.jpg')},
                    {src: require('../../assets/img/banner4.jpg')},
                    {src: require('../../assets/img/banner5.jpg')},
                    {src: 'http://pic.58pic.com/58pic/11/25/25/46j58PICKMh.jpg'},
                    {src: 'http://pic.58pic.com/58pic/11/25/25/46j58PICKMh.jpg'},
                    {src: 'http://pic.58pic.com/58pic/11/25/25/46j58PICKMh.jpg'}
                ]
            }
        },
        methods: {

        }
    }

</script>
<style>
    html,body{
        height: 100%;
        width: 100%;
        overflow: auto;
    }
    img[lazy=loading]{
        width: 40px!important;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -20px;
        margin-top: -20px;
    }
    img[lazy=loaded]{
        animation:fade 0.5s;
    }
    @keyframes fade {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }
    .img{
        width: 100%;
    }
    .img img{
        width: 100%;
        position: relative;
    }
</style>