<template>
    <div class="footer-bg">
        <div class="footer mobile">
            <div class="extra">©2017 瓯柑科技有限公司 All Rights Reserved.<br>10044221号-1 网站建设：<a href="http://voc.so" target="_blank" title="网站建设">瓯柑科技</a></div>
        </div>
        <div class="footer pc">

            <div class="contact-content-detail" :class="active ? 'active' : ''">
                <div class="left">
                    <div class="left-content">
                        <div class="site-name">瓯柑科技</div>
                        <ul class="footer-menu">
                            <li>留言/需求提交</li>
                            <li>在线咨询</li>
                            <li>服务热线</li>
                            <li>公众账号</li>
                            <li>APP</li>
                            <div class="clear"></div>
                        </ul>
                        <div class="other-info">这个网站很棒</div>
                        <div class="other-info">友情链接：alibaba科技有限公司</div>
                        <div class="other-info">我能帮到您什么吗？</div>
                        <div class="other-info">梦想是什么？</div>
                        <div class="company-info">Copy Right© 温州瓯柑科技有限公司 2012-2015 保留一切权利 <br/>Email：service@zhiyu.com 粤ICP备1000000000号</div>
                    </div>
                </div>
                <div class="right">
                    <div class="right-content">
                        <img src="../../assets/img/hst_erweima.jpg"/>
                        <p class="text">扫一扫，关注微信公众号</p>
                    </div>
                </div>
                <div class="clear"></div>
            </div>

            <div class="tel-kf-share-top" v-if="sidemenu">
                <ul>
                    <li class="item clearfix" @mouseenter="enterPhone" @mouseleave="leavePhone">
                        <span class="item-wrap">
                            <span class="icon">
                               <img src="../../assets/img/tel-icon.png">
                            </span>
                            <span :style="{left: phoneLeft + 'px'}" class="text phone">4008&nbsp;020&nbsp;023</span>
                        </span>
                    </li>
                    <li class="item clearfix" @mouseenter="enterQQ" @mouseleave="leaveQQ">
                        <a rel="nofollow" href="http://wpa.qq.com/msgrd?v=3&amp;uin=2957005832&amp;site=qq&amp;menu=yes" target="_blank" class="item-wrap">
                            <span class="icon">
                               <img src="../../assets/img/qq-icon.png">
                            </span>
                            <span :style="{left: qqLeft + 'px'}" class="text qq">在线客服</span>
                        </a>
                    </li>
                    <li class="top clearfix" @click="totop">
                        <span></span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                active: false,
                sidemenu: false,
                phoneLeft: 0,
                qqLeft: 0
            }
        },
        methods:{
            scroll(){
                let obj = document.querySelector(".page-main");
                let swidth = document.body.clientWidth;
                let screenHeight = obj.offsetHeight;   //屏幕可见高度
                let scrollTop = obj.scrollTop;   //滚动条距离顶部高度

                let contentObj = document.querySelector(".content");
                let theObj = document.querySelector(".contact-content-detail");
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

                if(scrollTop > 200){
                    this.sidemenu = true;
                }
                else{
                    this.sidemenu = false;
                }
            },
            totop(){
                let obj = document.querySelector(".page-main");
                obj.scrollTop = 0;
            },
            enterPhone(){
                this.phoneLeft = -120;
            },
            leavePhone(){
                this.phoneLeft = 0;
            },
            enterQQ(){
                this.qqLeft = -83;
            },
            leaveQQ(){
                this.qqLeft = 0;
            }
        },
        mounted() {
            var contentObj = document.querySelector(".page-main");
            contentObj.addEventListener('scroll', this.scroll);

            this.scroll();
        }
    }
</script>
<style>
    .tel-kf-share-top {
        position: fixed;
        top: 275px;
        right: 15px;
        z-index: 9999;
    }
    .tel-kf-share-top ul li {
        margin-top: 1px;
        height: 50px;
        width: 50px;
    }
    .tel-kf-share-top ul li .item-wrap {
        display: block;
        width: 150px;
        height: 50px;
        position: relative;
    }
    .tel-kf-share-top ul li .item-wrap .icon {
        display: inline-block;
        height: 50px;
        width: 50px;
        background-color: #848484;
        text-align: center;
        vertical-align: middle;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
        cursor: pointer;
        opacity: 0.5;
        filter: alpha(opacity=50);
    }
    .tel-kf-share-top ul li .item-wrap .text {
        display: inline-block;
        padding-left: 15px;
        padding-right: 15px;
        height: 50px;
        line-height: 50px;
        background-color: #ff7852;
        color: #ffffff;
        vertical-align: middle;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 9;
        opacity: 0;
        filter: alpha(opacity=0);
        cursor: pointer;
        transition: All 0.3s ease;
        -webkit-transition: All 0.3s ease;
    }
    .tel-kf-share-top ul .top span {
        background: url(../../assets/img/to-top-icon.png) no-repeat center #848484;
        display: inline-block;
        height: 50px;
        width: 50px;
        float: right;
        cursor: pointer;
    }
    .tel-kf-share-top ul .top span:hover {
        opacity: 0.8;
        filter: alpha(opacity=80);
    }
    .tel-kf-share-top ul li:hover .item-wrap .icon {
        background-color: #ff7852;
        opacity: 1;
        filter: alpha(opacity=100);
    }
    .tel-kf-share-top ul li:hover .item-wrap .text {
        opacity: 1;
        filter: alpha(opacity=100);
    }

    .contact-content-detail .left, .contact-content-detail .right{
        opacity: 0;
    }
    .contact-content-detail.active .left, .contact-content-detail.active .right{
        opacity: 0;
    }
    .contact-content-detail.active .left, .contact-content-detail.active .right{
        animation: fadeIn 1s ease  forwards  alternate;
        -webkit-animation: fadeIn 1s ease  forwards  alternate;
    }
    .contact-content-detail.active .right{
        -webkit-animation-delay: 0.3s;
        animation-delay: 0.3s;
    }
    .footer .right-content:before{
        content: " ";
        top: 0%;
        left: 0%;
        width: 1px;
        height: 100%;
        margin-top: 0px;
        position: absolute;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scaleX(.2);
        transform: scaleX(.2);
        background: #cdcdcd;
    }
</style>