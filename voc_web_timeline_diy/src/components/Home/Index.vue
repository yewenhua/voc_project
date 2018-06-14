<template>
    <div id="home">
        <div class="page-menu">
            <ul class="drawer-menu">
                <li><div :class="status ? 'open-state' : ''">关于我们</div></li>
                <li><div :class="status ? 'open-state' : ''">产品中心</div></li>
                <li><div :class="status ? 'open-state' : ''">服务支持</div></li>
                <li><div :class="status ? 'open-state' : ''">联系我们</div></li>
                <li><div :class="status ? 'open-state' : ''">人才招聘</div></li>
                <li><div :class="status ? 'open-state' : ''">新闻中心</div></li>
                <li><div :class="status ? 'open-state' : ''">软件下载</div></li>
            </ul>
        </div>
        <div class="page-main" :class="status ? 'c-state' : ''" @click.stop="close()">
            <div class="mask" v-if="status"></div>
            <div class="header">
                <div class="logo">
                    <img :src="require('../../assets/img/logo.png')"/>
                </div>
                <div class="menu" @click.stop="open()">
                    <img :src="require('../../assets/img/menu.png')"/>
                </div>
            </div>
            <div class="content">
                <div class="banner">
                    <el-carousel>
                        <el-carousel-item v-for="(item, key) in list" :key="key">
                            <img :src="item.src"/>
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <div class="nav">
                    <ul class="series">
                        <li>
                            <div class="desc">

                            </div>
                            <div class="name">V7智能锁系列</div>
                        </li>
                        <li>
                            <div class="desc">

                            </div>
                            <div class="name">V7智能锁系列</div>
                        </li>
                        <li>
                            <div class="desc">

                            </div>
                            <div class="name">V7智能锁系列</div>
                        </li>
                        <div class="clear"></div>
                    </ul>
                </div>
                <div class="about">
                    <div class="n-title">
                        <div class="p1">关于VOC</div>
                        <div class="p2">亦余心之所善兮，虽九死其犹未悔</div>
                    </div>
                    <div class="content">
                        <ul>
                            <li>瑞典VOC指纹锁品牌授权合作制造商，旗下授权制造或合作生产VOC体系中的：智能锁（VOC smart lock）、智能门（VOC Door）、磁锁（VOC Magnetic lock）、指纹柜（VOC smart Safes）、守护系统（VOC | GS），5大系列产品。</li>
                            <li>亚合大继续沿用和参与VOC特色的极具创新的协同开发体系，其体系利用互联网协同设计、开发、改进VOC产品。至今已有15个国家和地区中的1700余人有偿无偿地参与VOC产品的开发与改进。仅本企业每年有近70项专利产生。</li>
                            <li>作为新兴工业设计倡导者，VOC产品造型简洁优雅，注重形式美感，不依赖装饰；倡导功能简单易用，追求苛刻的用户体验感。致力于为用户提供高端的易用的智能产品。</li>
                        </ul>
                    </div>
                </div>
                <div class="news">
                    <div class="n-title">
                        <div class="p1">新闻中心</div>
                        <div class="p2">秉承专注创新的民族精神</div>
                    </div>
                    <ul class="news-ul">
                        <li class="n-item" v-for="item in 4" :key="item">
                            <div class="pic-content">
                                <div class="pic">
                                    <img :src="require('../../assets/img/banner1.jpg')"/>
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
            </div>
            <div class="footer">
                <div class="extra">©2017 亚合大机电科技有限公司 All Rights Reserved.<br>10044221号-1 网站建设：<a href="http://voc.so" target="_blank" title="网站建设">太阳科技</a></div>
            </div>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue'
    import { Carousel, CarouselItem } from 'element-ui'

    Vue.use(Carousel)
    Vue.use(CarouselItem)

    export default {
        data(){
            return {
                list: [
                    {src: require('../../assets/img/banner1.jpg')},
                    {src: require('../../assets/img/banner2.jpg')},
                    {src: require('../../assets/img/banner3.png')},
                    {src: require('../../assets/img/banner4.png')}
                ],
                status: false
            }
        },
        methods: {
            open(){
                if (this.status) {
                    this.status = false;
                } else {
                    this.status = true;
                }
            },
            close(){
                if (this.status) {
                    this.status = false;
                }
            }
        },
    }

</script>
<style>
    #home{
        height: 100%;
        width: 100%;
        overflow: auto;
        -webkit-overflow-scrolling : touch;
    }
    .page-menu{
        height: 100%;
        width: 100%;
        position: fixed;
        background-color: #20a0ff;
        z-index: 0;
    }
    .page-main{
        height: 100%;
        position: fixed;
        width: 100%;
        overflow: auto;
        background-color: #f4f4f4;
        z-index: 0;
        transition: All 0.3s ease;
        -webkit-transition: All 0.3s ease;
    }
    .c-state{
        transform: rotate(0deg) scale(1) translate(75%,0%);
        -webkit-transform: rotate(0deg) scale(1) translate(75%,0%);
    }
    .mask{
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background: black;
        opacity: 0.6;
        z-index: 99;
    }
    .drawer-menu{
        padding:60px 20px 0px 20px;
        text-align: center;
        list-style: none;
        margin: 0px;
        position: absolute;
        left: 0px;
        top:0px;
        width: 75%;
        box-sizing: border-box;
    }
    .drawer-menu li{
        position: relative;
        height: 40px;
        line-height: 40px;
        color: white;
        font-size: 16px;
        border-bottom: 1px solid #ddd;
    }
    .drawer-menu li:last-child{
        border: none;
    }
    .drawer-menu li:hover{
        background: #0bb20c;
    }
    .drawer-menu div{
        position: absolute;
        left: 0px;
        top:0px;
        margin-left: -50px;
        width: 100%;
        -webkit-transition: all .3s;
        -moz-transition: all .3s;
        transition: all .3s;
    }
    .drawer-menu div.open-state{
        margin-left: 0px;
    }

    .header{
        height: 50px;
        background: white;
    }
    .header img{
        border-radius: 50%;
        width: 100%;
    }
    .header .logo{
        position: absolute;
        left: 20px;
        top: 10px;
        height: 30px;
        width: 30px;
    }
    .header .menu{
        position: absolute;
        right: 20px;
        top: 10px;
        height: 30px;
        width: 30px;
    }
    .el-carousel__item img {
        width: 100%;
        height: 100%;
    }
    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }
    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
    .el-carousel__container {
        height: 200px;
    }
    .nav{
        padding-top: 30px;
        padding-bottom: 20px;
    }
    .series{
        list-style: none;
        padding: 0px;
        margin: 0px;
        text-align: center;
    }
    .series li{
        float: left;
        width: 33.3%;
    }
    .series .desc{
        display: inline-block;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: green;
    }
    .clear{
        clear: both;
    }
    .n-title{
        text-align: center;
        color: #666;
        padding-bottom: 5%;
    }
    .n-title .p1{
        font-size: 16px;
        padding-bottom: 4%;
        line-height: 30px;
        background: url(../../assets/img/line.jpg) center bottom no-repeat;
    }
    .n-title .p2{
        font-size: 16px;
        margin-top: 4%;
    }
    .about{
        padding: 20px;
        box-sizing: border-box;
        width: 100%;
        background: #333;
        color: white;
    }
    .about .content{
        min-height: 200px;
    }
    .about .n-title, .about .n-title .p1, .about .n-title .p2{
        color: white;
    }
    .about .content ul{
        list-style: none;
        padding: 0px;
        margin: 0px;
    }
    .about .content ul li{
        padding-bottom: 12px;
        font-size: 13px;
    }
    .about .content ul li:last-child{
        padding-bottom: 0px;
    }
    .news{
        padding: 20px;
        box-sizing: border-box;
        width: 100%;
    }
    .news-ul{
        list-style: none;
        padding: 0px;
        margin: 0px;
        width: 100%;
    }
    .news .n-item{
        background: white;
        min-height: 200px;
        margin-bottom: 15px;
    }
    .news-ul li{
        float: left;
    }
    .news .n-item:last-child{
        margin-bottom: 0px;
    }
    .pic-content{
        position: relative;
        min-height: 120px;
    }
    .pic-content .pic img{
        width: 100%;
    }
    .pic-content .title{
        position: absolute;
        bottom: 0px;
        background: white;
        width: 80%;
        left: 10%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: #80734a;
        font-size: 16px;
    }
    .n-item .sub-title{
        text-align: center;
        color: #4c4c4c;
        line-height: 32px;
        font-size: 16px;
        padding-left: 10%;
        padding-right: 10%;
        margin-top: 5%;
        height: 64px;
    }
    .n-item .desc{
        padding-left: 5%;
        padding-right: 5%;
        margin-top: 5%;
        color: #4c4c4c;
        line-height: 24px;
        text-align: center;
        height: 72px;
        overflow: hidden;
        font-size: 12px;
    }
    .n-item .more{
        padding-bottom: 5%;
        text-align: center;
        color: #80734a;
        font-weight: bold;
        font-size: 16px;
        margin-top: 5%;
    }
    .footer{
        text-align: center;
        background: #313131;
        padding-top: 8px;
        padding-bottom: 8px;
        color: #8c8c8c;
    }
    .footer a {
        color: #8c8c8c;
    }
    .footer .extra{
        font-size: 12px;
    }

    @media (min-width: 375px){
        .header{
            height: 60px;
        }
        .header .logo{
            height: 40px;
            width: 40px;
        }
        .header .menu{
            height: 40px;
            width: 40px;
        }
        .el-carousel__container{
            height: 150px;
        }
        .news-ul li{
            width: 100%;
        }
    }
    @media (min-width: 400px){
        .header{
            height: 65px;
        }
        .header .logo{
            height: 45px;
            width: 45px;
        }
        .header .menu{
            height: 45px;
            width: 45px;
        }
        .el-carousel__container{
            height: 180px;
        }
        .news-ul li{
            width: 100%;
        }
    }
    @media (min-width: 500px){
        .header{
            height: 70px;
        }
        .header .logo{
            height: 50px;
            width: 50px;
        }
        .header .menu{
            height: 50px;
            width: 50px;
        }
        .el-carousel__container{
            height: 200px;
        }
        .news-ul li{
            width: 100%;
        }
    }
    @media (min-width: 768px){
        .header{
            height: 90px;
        }
        .header .logo{
            top: 15px;
            height: 60px;
            width: 60px;
        }
        .header .menu{
            top: 15px;
            height: 60px;
            width: 60px;
        }
        .el-carousel__container{
            height: 300px;
        }
        .news-ul li{
            width: 49%;
        }
        .news-ul li:nth-child(odd){
            margin-right: 2%;
        }
    }
    @media (min-width: 992px){
        .header{
            height: 100px;
        }
        .header .logo{
            top: 15px;
            height: 70px;
            width: 70px;
        }
        .header .menu{
            top: 15px;
            height: 70px;
            width: 70px;
        }
        .el-carousel__container{
            height: 350px;
        }
        .news-ul li{
            width: 49%;
        }
        .news-ul li:nth-child(odd){
            margin-right: 2%;
        }
        .news-ul li:hover{
            transform: translateY(-10px);  -webkit-transform:translateY(-10px);  translate-webkit-transition: all .3s; -moz-transition: all .3s; transition: all .3s;
        }
    }
    @media (min-width: 1200px){
        .header{
            height: 120px;
        }
        .header .logo{
            top: 25px;
            height: 70px;
            width: 70px;
        }
        .header .menu{
            top: 25px;
            height: 70px;
            width: 70px;
        }
        .el-carousel__container{
            height: 400px;
        }
        .news-ul li{
            width: 23.5%;
            margin-right: 1.5%;
        }
    }
</style>