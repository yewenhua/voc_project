<template>
    <div class="news-content" :class="active ? 'active' : ''">
        <div class="n-title">
            <div class="p1">新闻中心</div>
            <div class="p2">秉承专注创新的民族精神</div>
        </div>
        <ul class="news-ul">
            <li class="n-item" v-for="item in 4" :key="item">
                <div class="pic-content">
                    <div class="pic">
                        <img :src="require('../../assets/img/banner3.jpg')"/>
                    </div>
                    <div class="title">射雕英雄传</div>
                </div>
                <div class="sub-title">“曼”步星空公益计划启动，助力10万自闭症儿童打开心锁</div>
                <div class="desc">我们会联合星缘守护，成立志愿者队伍，接下来会陆续开展自闭症儿童第二课堂、亲近海洋生物等活动，用孩子们比较容易接受的形式，帮助他们打开心锁</div>
                <div class="more">read more</div>
            </li>
            <div class="clear"></div>
        </ul>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                active: false
            }
        },
        methods: {
            scroll(){
                let obj = document.querySelector(".page-main");
                let swidth = document.body.clientWidth;
                let screenHeight = obj.offsetHeight;   //屏幕可见高度
                let scrollTop = obj.scrollTop;   //滚动条距离顶部高度

                let contentObj = document.querySelector(".content");
                let theObj = document.querySelector(".news");
                let theObjH= theObj.offsetHeight;
                let theObjT= theObj.offsetTop + contentObj.offsetTop;
                if(swidth >= 768){
                    /**
                     * objT < (scrollTop + screenHeight) 元素顶部可见   从上往下滚动
                     * (objT + objH) > scrollTop元素底部可见   从下往上滚动
                     */
                    if((theObjT + theObjH) >= scrollTop && theObjT < (scrollTop + screenHeight)){
                        this.active = true;
                    }
                    else{
                        this.active = false;
                    }
                }
            }
        },
        mounted(){
            let contentObj = document.querySelector(".page-main");
            contentObj.addEventListener('scroll', this.scroll);

            this.scroll();
        }
    }
</script>
<style>
    .news-content.active .n-title, .news-content.active .news-ul{
        opacity: 0;
    }
    .news-content.active .n-title, .news-content.active .news-ul{
        animation: fadeIn 1s ease  forwards  alternate;
        -webkit-animation: fadeIn 1s ease  forwards  alternate;
    }
    .news-content.active .news-ul{
        -webkit-animation-delay: 0.3s;
        animation-delay: 0.3s;
    }
</style>