<template>
    <div class="business-content">
        <div class="content business-content-padding" :class="serviceActive ? 'active' : ''">
            <div class="n-title">
                <div class="p1">我们的服务</div>
                <div class="p2 pc">公司拥有超过5个主流开发平台，100人以上的App开发/网站制作团队，服务超过120家企业</div>
                <div class="p2 mobile">100人以上团队，服务超过120家企业</div>
            </div>
            <div class="service-bottom">
                <ul class="service-list clearfix">
                    <li class="service-item">
                        <div class="service-icon">
                            <a href="#" title="IOS APP软件开发" alt="IOS APP软件开发"></a>
                        </div>
                        <h3 class="pc"><a href="#">iOS开发</a></h3>
                        <h3 class="mobile"><a href="#">iOS</a></h3>
                        <p>为您提供一站式的<br>IOS手机app定制开发服务
                        </p>
                    </li>
                    <li class="service-item">
                        <div class="service-icon service-icon-an">
                            <a href="#" title="Android手机app应用开发" alt="Android手机app应用开发"></a>
                        </div>
                        <h3 class="pc"><a href="#">Android开发</a></h3>
                        <h3 class="mobile"><a href="#">Android</a></h3>
                        <p>安卓APP应用软件已经占据国内移动应用市场的50%以上，开发安卓手机<br>app软件的重要性日益凸显
                        </p>
                    </li>
                    <li class="service-item">
                        <div class="service-icon service-icon-wx">
                            <a href="#" title="微信公众平台二次开发" alt="微信公众平台二次开发"></a>
                        </div>
                        <h3 class="pc"><a href="#">微信开发</a></h3>
                        <h3 class="mobile"><a href="#">微信</a></h3>
                        <p>为您提供专业的微信公众平台二次开发以及微信商城网站<br>个性化定制开发服务
                        </p>
                    </li>
                    <li class="service-item">
                        <div class="service-icon service-icon-ht">
                            <a href="#" title="html5 APP开发/手机网站开发" alt="html5 APP开发/手机网站开发"></a>
                        </div>
                        <h3 class="pc"><a href="#">H5手机站开发</a></h3>
                        <h3 class="mobile"><a href="#">H5</a></h3>
                        <p>HTML5是未来网络发展的趋势，可以实现各种多媒体效果，如视频、音频等<br>无需任何插件即可观看收听
                        </p>
                    </li>
                    <li class="service-item">
                        <div class="service-icon service-icon-web">
                            <a href="#" title="web网站制作" alt="web网站制作"></a>
                        </div>
                        <h3 class="pc"><a href="#">WEB网站开发</a></h3>
                        <h3 class="mobile"><a href="#">网站</a></h3>
                        <p>团队拥有多年的网站建设经验，提供高端型网站定制开发服务
                        </p>
                    </li>
                    <div class="clear"></div>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                serviceActive: false
            }
        },
        methods:{
            scroll(){
                let obj = document.querySelector(".page-main");
                let swidth = document.body.clientWidth;
                let screenHeight = obj.offsetHeight;   //屏幕可见高度
                let scrollTop = obj.scrollTop;   //滚动条距离顶部高度

                let contentObj = document.querySelector(".content");
                let serviceObj = document.querySelector(".service");
                let serviceObjH= serviceObj.offsetHeight;
                let serviceObjT= serviceObj.offsetTop + contentObj.offsetTop;

                if(swidth >= 768){
                    /**
                     * objT < (scrollTop + screenHeight) 元素顶部可见   从上往下滚动
                     * (objT + objH) > scrollTop元素底部可见   从下往上滚动
                     */
                    if((serviceObjT + serviceObjH) >= scrollTop && serviceObjT < (scrollTop + screenHeight)){
                        this.serviceActive = true;
                    }
                    else{
                        this.serviceActive = false;
                    }
                }
            }
        },
        mounted() {
            let contentObj = document.querySelector(".page-main");
            contentObj.addEventListener('scroll', this.scroll);

            this.scroll();
        }
    }
</script>
<style scoped>
    .business-content{
        width:100%;
    }
    .business-content-padding{
        padding-top:50px;
        padding-bottom:75px;
    }
    .business-content-padding .n-title, .business-content-padding .service-bottom{
        opacity: 0;
    }
    .business-content-padding.active .n-title, .business-content-padding.active .service-bottom{
        animation: fadeIn 1s ease  forwards  alternate;
        -webkit-animation: fadeIn 1s ease  forwards  alternate;
    }
    .business-content-padding.active .service-bottom{
        -webkit-animation-delay: 0.3s;
        animation-delay: 0.3s;
    }

    .service-bottom .service-list{
        overflow: hidden;
    }
    .service-bottom .service-list .service-item {
        width: 20%;
        float: left;
        text-align: center;
    }
    .service-bottom .service-list .service-item .service-icon {
        text-align: center;
    }
    .service-bottom .service-list .service-item h3 {
        margin: 25px 0 15px;
    }
    .service-bottom .service-list .service-item h3 a {
        color: #3f3f3f;
        font-size: 20px;
        font-weight: 600;
    }
    .service-bottom .service-list .service-item p {
        color: #888888;
        font-size: 12px;
        line-height: 18px;
        padding: 0 10px;
        text-align: center;
    }
    .service-bottom .service-list .service-item .service-icon a {
        display: inline-block;
        height: 100px;
        width: 100px;
        margin: 0 auto;
        background: url("../../assets/img/service01.png") no-repeat center;
    }
    .service-bottom .service-list .service-item .service-icon-an a {
        background: url("../../assets/img/service02.png") no-repeat center;
    }
    .service-bottom .service-list .service-item .service-icon-wx a {
        background: url("../../assets/img/service03.png") no-repeat center;
    }
    .service-bottom .service-list .service-item .service-icon-ht a {
        background: url("../../assets/img/service04.png") no-repeat center;
    }
    .service-bottom .service-list .service-item .service-icon-web a {
        background: url("../../assets/img/service05.png") no-repeat center;
    }
    .service-bottom .service-list .service-item:hover .service-icon a {
        background: url("../../assets/img/service01-h.png") no-repeat center;
    }
    .service-bottom .service-list .service-item:hover .service-icon-an a {
        background: url("../../assets/img/service02-h.png") no-repeat center;
    }
    .service-bottom .service-list .service-item:hover .service-icon-wx a {
        background: url("../../assets/img/service03-h.png") no-repeat center;
    }
    .service-bottom .service-list .service-item:hover .service-icon-ht a {
        background: url("../../assets/img/service04-h.png") no-repeat center;
    }
    .service-bottom .service-list .service-item:hover .service-icon-web a {
        background: url("../../assets/img/service05-h.png") no-repeat center;
    }
    @media (min-width: 300px){
        .business-content-padding .n-title, .business-content-padding .service-bottom{
            opacity: 1;
        }
        .service-bottom .service-list .service-item .service-icon a {
            height: 45px;
            width: 45px;
            background-size: 45px 45px;
        }
        .service-bottom .service-list .service-item p{
            display: none;
        }
        .service-bottom .service-list .service-item h3 a{
            font-size:14px;
        }
        .pc{
            display: none;
        }
        .mobile{
            display:block;
        }
        .service-bottom .service-list .service-item h3{
            margin: 10px 0px;
        }
        .business-content-padding{
            padding-top: 20px;
            padding-bottom: 20px;
        }
    }
    @media (min-width: 400px){
        .service-bottom .service-list .service-item .service-icon a {
            height: 55px;
            width: 55px;
            background-size: 55px 55px;
        }
        .service-bottom .service-list .service-item h3 a{
            font-size:15px;
        }
    }
    @media (min-width: 500px){
        .service-bottom .service-list .service-item .service-icon a {
            height: 65px;
            width: 65px;
            background-size: 65px 65px;
        }
        .service-bottom .service-list .service-item h3 a{
            font-size:16px;
        }
    }
    @media (min-width: 768px){
        .business-content-padding .n-title, .business-content-padding .service-bottom{
            opacity: 0;
        }
        .service-bottom .service-list .service-item .service-icon a {
            height: 100px;
            width: 100px;
            background-size: 100px 100px;
        }
        .service-bottom .service-list .service-item p{
            display: block;
        }
        .service-bottom .service-list .service-item h3 a{
            font-size:20px;
        }
        .pc{
            display: block;
        }
        .mobile{
            display:none;
        }
        .service-bottom .service-list .service-item h3{
            margin: 20px 0px;
        }
        .business-content-padding{
            padding-top: 50px;
            padding-bottom: 50px;
        }
    }
</style>