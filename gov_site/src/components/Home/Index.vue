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
                <div class="name">瓯柑科技</div>
                <div class="menu" @click.stop="open()">
                    <img :src="require('../../assets/img/menu.png')"/>
                </div>
            </div>
            <div class="pc_header">
                <div class="pc_header_top_bg">
                    <ul class="pc_nav_top">
                        <li><div>关于我们</div></li>
                        <li><div>产品中心</div></li>
                        <li><div>服务支持</div></li>
                        <li><div>联系我们</div></li>
                        <div class="clear"></div>
                    </ul>
                </div>
                <div class="pc_header_bg">
                    <div class="logo">
                        <img :src="require('../../assets/img/logo.png')"/>
                    </div>
                    <div class="name">瓯柑科技</div>
                    <div class="pc_nav_bg">
                        <ul class="pc_nav">
                            <li class="m-r-zero">
                                <div class="hwrapper">
                                    <div class="first">软件下载</div>
                                    <div class="second">DOWNLOAD</div>
                                </div>
                            </li>
                            <li>
                                <div class="hwrapper">
                                    <div class="first">新闻中心</div>
                                    <div class="second">NEWS</div>
                                </div>
                            </li>
                            <li>
                                <div class="hwrapper">
                                    <div class="first">人才招聘</div>
                                    <div class="second">JOIN US</div>
                                </div>
                            </li>
                            <li>
                                <div class="hwrapper">
                                    <div class="first">联系我们</div>
                                    <div class="second">CONTACT</div>
                                </div>
                            </li>
                            <li class="pmenu" @mouseenter="enter" @mouseleave="leave">
                                <div class="hwrapper">
                                    <div class="first">产品中心</div>
                                    <div class="second">PRODUCT</div>
                                </div>
                                <div class="plist" :class="pshow ? 'active' : ''"></div>
                            </li>
                            <li class="last">
                                <div class="hwrapper">
                                    <div class="first">关于我们</div>
                                    <div class="second">ABOUT US</div>
                                </div>
                            </li>
                            <div class="clear"></div>
                        </ul>
                    </div>
                    <div class="clear"></div>
                </div>
            </div>
            <div class="content">
                <div class="banner">
                    <Banner :list="list"></Banner>
                </div>
                <div class="bg_grey">
                    <div class="service">
                        <Service></Service>
                    </div>
                </div>
                <div class="bg_white">
                    <div class="case">
                        <Case></Case>
                    </div>
                </div>

                <div class="bg_grey">
                    <div class="news">
                        <News></News>
                    </div>
                </div>

                <div class="bg_white">
                    <div class="news">
                        <HoverEffect></HoverEffect>
                    </div>
                </div>

                <div class="about bg_grey" :class="aboutActive ? 'active' : ''">
                    <div class="content">
                        <div class="n-title">
                            <div class="p1">关于我们9</div>
                            <div class="p2">亦余心之所善兮，虽九死其犹未悔</div>
                        </div>
                        <div class="detail">
                            <ul>
                                <li>瑞典VOC指纹锁品牌授权合作制造商，旗下授权制造或合作生产VOC体系中的：智能锁（VOC smart lock）、智能门（VOC Door）、磁锁（VOC Magnetic lock）、指纹柜（VOC smart Safes）、守护系统（VOC | GS），5大系列产品。</li>
                                <li>亚合大继续沿用和参与VOC特色的极具创新的协同开发体系，其体系利用互联网协同设计、开发、改进VOC产品。至今已有15个国家和地区中的1700余人有偿无偿地参与VOC产品的开发与改进。仅本企业每年有近70项专利产生。</li>
                                <li>作为新兴工业设计倡导者，VOC产品造型简洁优雅，注重形式美感，不依赖装饰；倡导功能简单易用，追求苛刻的用户体验感。致力于为用户提供高端的易用的智能产品。</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-outer">
                <Foot></Foot>
            </div>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue'
    import Banner from './Banner.vue'
    import Case from './Case.vue'
    import News from './News.vue'
    import Service from './Service.vue'
    import Foot from './Foot.vue'
    import HoverEffect from './HoverEffect.vue'

    export default {
        data(){
            return {
                list: [
                    {src: require('../../assets/img/banner1.jpg'), desc: '', name: 'item 1'},
                    {src: require('../../assets/img/banner2.jpg'), desc: '', name: 'item 2'},
                    {src: require('../../assets/img/banner3.jpg'), desc: '', name: 'item 3'},
                    {src: require('../../assets/img/banner4.jpg'), desc: '', name: 'item 4'}
                ],
                status: false,
                pshow: false,
                aboutActive: false
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
            },
            enter(){
                this.pshow = true;
            },
            leave(){
                this.pshow = false;
            },
            scroll(){
                let obj = document.querySelector(".page-main");
                let swidth = document.body.clientWidth;
                let screenHeight = obj.offsetHeight;   //屏幕可见高度
                let scrollTop = obj.scrollTop;   //滚动条距离顶部高度

                let contentObj = document.querySelector(".content");
                let aboutObj = document.querySelector(".about");
                let aboutObjH= aboutObj.offsetHeight;
                let aboutObjT= aboutObj.offsetTop + contentObj.offsetTop;

                if(swidth >= 678){
                    /**
                     * aboutObjT < (scrollTop + screenHeight) 元素顶部可见   从上往下滚动
                     * (aboutObjT + aboutObjH) > scrollTop元素底部可见   从下往上滚动
                     */
                    if((aboutObjT + aboutObjH) >= scrollTop && aboutObjT < (scrollTop + screenHeight)){
                        this.aboutActive = true;
                    }
                    else{
                        this.aboutActive = false;
                    }
                }
            }
        },
        components: {
            Banner,
            Case,
            News,
            Service,
            Foot,
            HoverEffect
        },
        mounted() {
            var contentObj = document.querySelector(".page-main");
            contentObj.addEventListener('scroll', this.scroll);
        }
    }

</script>
<style>
    ul{
        list-style: none;
        padding: 0px;
        margin: 0px;
    }
    a {
        color: #363f44;
        text-decoration: none;
        cursor: pointer;
    }
    a:hover,
    a:focus {
        color: #141719;
        text-decoration: none;
    }

    @import '../../assets/css/home.css';
</style>