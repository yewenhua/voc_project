<template>
    <div class="contentWrapper hp-used">
        <div class="n-title">
            <div class="p1">各行各业都在使用</div>
            <div class="p2">亦余心之所善兮，虽九死其犹未悔</div>
        </div>
        <div class="used-wrap flex">
            <div class="used-box">
                <a href="/index.php?title=share_economy/sharebike" target="_blank" id="count-sharebike">
                    <div class="used-box-pic">
                        <img src="../../assets/img/hp-use11.png" class="img2">
                        <img src="../../assets/img/hp-use1.png" class="img1">
                    </div>
                    <div class="used-box-text">
                        <div class="title">
                            <h2>共享出行</h2>
                        </div>
                        <p>帮助共享出行用户快速集成地图能力，迅速拓展市场。</p>
                    </div>
                </a>
            </div>
            <div class="used-box">
                <a href="/index.php?title=open/o2o1" target="_blank" id="count-fw">
                    <div class="used-box-pic">
                        <img src="../../assets/img/hp-use77.png" class="img2">
                        <img src="../../assets/img/hp-use7.png" class="img1">
                    </div>
                    <div class="used-box-text">
                        <div class="title">
                            <h2>上门服务</h2>
                        </div>
                        <p>介绍上门服务通用LBS解决方案，帮助O2O开发者快速清晰地构建系统。</p>
                    </div>
                </a>
            </div>
            <div class="used-box">
                <a href="http://jiaotong.baidu.com/" target="_blank">
                    <div class="used-box-pic">
                        <img src="../../assets/img/hp-use33.png" class="img2">
                        <img src="../../assets/img/hp-use3.png" class="img1">
                    </div>
                    <div class="used-box-text">
                        <div class="title">
                            <h2>智慧交通</h2>
                        </div>
                        <p>互联网+智慧交通，共建交通大数据生态。</p>
                    </div>
                </a>
            </div>
            <div class="used-box">
                <a href="/index.php?title=open/logistics" target="_blank">
                    <div class="used-box-pic">
                        <img src="../../assets/img/hp-use11.png" class="img2">
                        <img src="../../assets/img/hp-use1.png" class="img1">
                    </div>
                    <div class="used-box-text">
                        <div class="title">
                            <h2>快递物流</h2>
                        </div>
                        <p>结合通用物流配送场景，介绍地图产品如何帮助开发者快速搭建物流系统。</p>
                    </div>
                </a>
            </div>
            <div class="used-box">
                <a href="/index.php?title=open/case" target="_blank">
                    <div class="used-box-pic">
                        <img src="../../assets/img/hp-use11.png" class="img2">
                        <img src="../../assets/img/hp-use1.png" class="img1">
                    </div>
                    <div class="used-box-text">
                        <div class="title">
                            <h2>房产行业</h2>
                        </div>
                        <p>结合房产类用户使用场景，介绍地图服务在房产类产品中的应用。</p>
                    </div>
                </a>
            </div>
            <div class="used-box">
                <a href="http://huiyan.baidu.com/" target="_blank" id="count-sy">
                    <div class="used-box-pic">
                        <img src="../../assets/img/hp-use11.png" class="img2">
                        <img src="../../assets/img/hp-use1.png" class="img1">
                    </div>
                    <div class="used-box-text">
                        <div class="title">
                            <h2>商业地理</h2>
                        </div>
                        <p>勾勒顾客画像，展现顾客轨迹；竞品分析对比，客流来源去向。</p>
                    </div>
                </a>
            </div>
        </div>
        <div class="bookWrapper">
            <figure class="book">
                <!-- Front -->
                <ul class="hardcover_front">
                    <li>
                        <img src="../../assets/img/cover.jpg" alt="" width="100%" height="100%">
                    </li>
                    <li></li>
                </ul>

                <!-- Pages -->
                <ul class="page">
                    <li></li>
                    <li>
                        <a class="btn download" href="#">Download</a>
                    </li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>

                <!-- Back -->
                <ul class="hardcover_back">
                    <li></li>
                    <li></li>
                </ul>
                <ul class="book_spine">
                    <li></li>
                    <li></li>
                </ul>
            </figure>

            <figure class="book">
                <!-- Front -->
                <ul class="hardcover_front">
                    <li>
                        <div class="coverDesign yellow">
                            <span class="ribbon">NEW</span>
                            <h1>CSS</h1>
                            <p>TRANSFORM</p>
                        </div>
                    </li>
                    <li></li>
                </ul>

                <!-- Pages -->
                <ul class="page">
                    <li></li>
                    <li>
                        <a class="btn download" href="#">Download</a>
                    </li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>

                <!-- Back -->
                <ul class="hardcover_back">
                    <li></li>
                    <li></li>
                </ul>
                <ul class="book_spine">
                    <li></li>
                    <li></li>
                </ul>
            </figure>

            <figure class="book">
                <!-- Front -->
                <ul class="paperback_front red">
                    <li></li>
                    <li></li>
                </ul>

                <!-- Pages -->
                <ul class="ruled_paper">
                    <li></li>
                    <li>
                        <a class="btn2" href="#">PREVIEW</a>
                    </li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>

                <!-- Back -->
                <ul class="paperback_back red">
                    <li></li>
                    <li></li>
                </ul>
            </figure>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                list: [
                    {name: '', src: ''},
                    {name: '', src: ''},
                    {name: '', src: ''},
                    {name: '', src: ''},
                    {name: '', src: ''},
                    {name: '', src: ''},
                ]
            }
        }
    }
</script>
<style>
    .contentWrapper{

    }
    .hp-used .used-wrap {
        margin: 0 auto;
        padding-bottom: 60px;
        padding-right: 6px;
        padding-left: 6px;
        flex-wrap: wrap;
        justify-content: space-between;
        overflow: hidden;
    }
    .flex {
        display: -moz-box;
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
    }
    .hp-used .used-wrap .used-box {
        float: left;
        width: 290px;
        height: 374px;
        background: #f4f6f8;
        margin-bottom: 14px;
        transition: all .4s ease 0s;
    }
    a {
        background: transparent;
        text-decoration: none;
        color: #08c;
    }
    .hp-used .used-wrap .used-box .used-box-pic {
        position: relative;
        transition: all .4s ease 0s;
        height: 215px;
        overflow: hidden;
    }
    .hp-used .used-wrap .used-box .used-box-pic img {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 290px;
        height: 215px;
        transition: all .4s;
    }
    .hp-used .used-wrap .used-box .used-box-pic .img1 {
        transition: all .4s ease 0s;
        opacity: 1;
    }
    .hp-used .used-wrap .used-box .used-box-text {
        padding: 5px 15px 0px 15px;
        box-sizing: border-box;
    }
    .hp-used .used-wrap .used-box .used-box-text .title {
        text-align: center;
        padding-top: 50px;
    }
    .hp-used .used-wrap .used-box .used-box-text .title h2 {
        font-size: 18px;
        color: #333;
        margin-bottom: 4px;
    }
    .hp-used .used-wrap .used-box .used-box-text p {
        font-size: 12px;
        color: #999;
        height: 45px;
        overflow: hidden;
        text-align: center;
    }
    .hp-used .used-wrap .used-box:hover{box-shadow:0px 0px 9px #ccc}
    .hp-used .used-wrap .used-box:hover .used-box-pic .img1{opacity:0}
    .hp-used .used-wrap .used-box:hover .used-box-pic img{transform:scale(1.15) translateZ(0)}
    @media (min-width: 1200px){
        .used-wrap{
            width: 900px;
        }
        .hp-used .used-wrap .used-box {
            width: 290px;
        }
        .hp-used .used-wrap .used-box .used-box-pic img{
            width: 290px;
            height: 215px;
        }
    }
    @media (min-width: 1500px){
        .used-wrap{
            width: 1200px;
        }
        .hp-used .used-wrap .used-box {
            width: 385px;
            margin-bottom: 20px;
        }
        .hp-used .used-wrap .used-box .used-box-pic img{
            width: 385px;
            height: 310px;
        }
    }
    @media (min-width: 1800px){
        .used-wrap{
            width: 1500px;
        }
        .hp-used .used-wrap .used-box {
            width: 485px;
            margin-bottom: 25px;
        }
        .hp-used .used-wrap .used-box .used-box-pic img{
            width: 485px;
            height: 410px;
        }
    }



    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    li::before, li::after {
        content: "";
    }
    .bookWrapper{
        width: 1000px;
        min-height: 300px;
        margin: 30px auto;
        padding: 0 0 0 60px;
        vertical-align: top;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .btn {
        display: inline-block;
        text-transform: uppercase;
        border: 2px solid #2c3e50;
        margin-top: 100px;
        font-size: 0.7em;
        font-weight: 700;
        padding: 0.1em 0.4em;
        text-align: center;
        -webkit-transition: color 0.3s, border-color 0.3s;
        -moz-transition: color 0.3s, border-color 0.3s;
        transition: color 0.3s, border-color 0.3s;
    }
    .btn:hover {
        border-color: #16a085;
        color: #16a085;
    }
    .download{
        margin-left: 30px;
    }
    .book {
        position: relative;
        width: 160px;
        height: 220px;
        -webkit-perspective: 1000px;
        -moz-perspective: 1000px;
        perspective: 1000px;
        -webkit-transform-style: preserve-3d;
        -moz-transform-style: preserve-3d;
        transform-style: preserve-3d;
    }
    .hardcover_front li:first-child {
        background-color: #eee;
        -webkit-backface-visibility: hidden;
        -moz-backface-visibility: hidden;
        backface-visibility: hidden;
    }
    .hardcover_front li:last-child {
        background: #fffbec;
    }
    .hardcover_back li:first-child {
        background: #fffbec;
    }
    .hardcover_back li:last-child {
        background: #fffbec;
    }
    .book_spine li:first-child {
        background: #eee;
    }
    .book_spine li:last-child {
        background: #333;
    }
    .hardcover_front li:first-child:after,
    .hardcover_front li:first-child:before,
    .hardcover_front li:last-child:after,
    .hardcover_front li:last-child:before,
    .hardcover_back li:first-child:after,
    .hardcover_back li:first-child:before,
    .hardcover_back li:last-child:after,
    .hardcover_back li:last-child:before,
    .book_spine li:first-child:after,
    .book_spine li:first-child:before,
    .book_spine li:last-child:after,
    .book_spine li:last-child:before {
        background: #999;
    }
    .page > li {
        background: -webkit-linear-gradient(left, #e1ddd8 0%, #fffbf6 100%);
        background: -moz-linear-gradient(left, #e1ddd8 0%, #fffbf6 100%);
        background: -ms-linear-gradient(left, #e1ddd8 0%, #fffbf6 100%);
        background: linear-gradient(left, #e1ddd8 0%, #fffbf6 100%);
        box-shadow: inset 0px -1px 2px rgba(50, 50, 50, 0.1), inset -1px 0px 1px rgba(150, 150, 150, 0.2);
        border-radius: 0px 5px 5px 0px;
    }
    .hardcover_front {
        -webkit-transform: rotateY(-34deg) translateZ(8px);
        -moz-transform: rotateY(-34deg) translateZ(8px);
        transform: rotateY(-34deg) translateZ(8px);
        z-index: 100;
    }
    .hardcover_back {
        -webkit-transform: rotateY(-15deg) translateZ(-8px);
        -moz-transform: rotateY(-15deg) translateZ(-8px);
        transform: rotateY(-15deg) translateZ(-8px);
    }
    .page li:nth-child(1) {
        -webkit-transform: rotateY(-28deg);
        -moz-transform: rotateY(-28deg);
        transform: rotateY(-28deg);
    }
    .page li:nth-child(2) {
        -webkit-transform: rotateY(-30deg);
        -moz-transform: rotateY(-30deg);
        transform: rotateY(-30deg);
    }
    .page li:nth-child(3) {
        -webkit-transform: rotateY(-32deg);
        -moz-transform: rotateY(-32deg);
        transform: rotateY(-32deg);
    }
    .page li:nth-child(4) {
        -webkit-transform: rotateY(-34deg);
        -moz-transform: rotateY(-34deg);
        transform: rotateY(-34deg);
    }
    .page li:nth-child(5) {
        -webkit-transform: rotateY(-36deg);
        -moz-transform: rotateY(-36deg);
        transform: rotateY(-36deg);
    }
    .hardcover_front,
    .hardcover_back,
    .book_spine,
    .hardcover_front li,
    .hardcover_back li,
    .book_spine li {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        -webkit-transform-style: preserve-3d;
        -moz-transform-style: preserve-3d;
        transform-style: preserve-3d;
    }
    .hardcover_front,
    .hardcover_back {
        -webkit-transform-origin: 0% 100%;
        -moz-transform-origin: 0% 100%;
        transform-origin: 0% 100%;
    }
    .hardcover_front {
        -webkit-transition: all 0.8s ease, z-index 0.6s;
        -moz-transition: all 0.8s ease, z-index 0.6s;
        transition: all 0.8s ease, z-index 0.6s;
    }
    .hardcover_front li:first-child {
        cursor: default;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
        -webkit-transform: translateZ(2px);
        -moz-transform: translateZ(2px);
        transform: translateZ(2px);
    }
    .hardcover_front li:last-child {
        -webkit-transform: rotateY(180deg) translateZ(2px);
        -moz-transform: rotateY(180deg) translateZ(2px);
        transform: rotateY(180deg) translateZ(2px);
    }
    .hardcover_back li:first-child {
        -webkit-transform: translateZ(2px);
        -moz-transform: translateZ(2px);
        transform: translateZ(2px);
    }
    .hardcover_back li:last-child {
        -webkit-transform: translateZ(-2px);
        -moz-transform: translateZ(-2px);
        transform: translateZ(-2px);
    }
    .hardcover_front li:first-child:after,
    .hardcover_front li:first-child:before,
    .hardcover_front li:last-child:after,
    .hardcover_front li:last-child:before,
    .hardcover_back li:first-child:after,
    .hardcover_back li:first-child:before,
    .hardcover_back li:last-child:after,
    .hardcover_back li:last-child:before,
    .book_spine li:first-child:after,
    .book_spine li:first-child:before,
    .book_spine li:last-child:after,
    .book_spine li:last-child:before {
        position: absolute;
        top: 0;
        left: 0;
    }
    .hardcover_front li:first-child:after,
    .hardcover_front li:first-child:before {
        width: 4px;
        height: 100%;
    }
    .hardcover_front li:first-child:after {
        -webkit-transform: rotateY(90deg) translateZ(-2px) translateX(2px);
        -moz-transform: rotateY(90deg) translateZ(-2px) translateX(2px);
        transform: rotateY(90deg) translateZ(-2px) translateX(2px);
    }
    .hardcover_front li:first-child:before {
        -webkit-transform: rotateY(90deg) translateZ(158px) translateX(2px);
        -moz-transform: rotateY(90deg) translateZ(158px) translateX(2px);
        transform: rotateY(90deg) translateZ(158px) translateX(2px);
    }
    .hardcover_front li:last-child:after,
    .hardcover_front li:last-child:before {
        width: 4px;
        height: 160px;
    }
    .hardcover_front li:last-child:after {
        -webkit-transform: rotateX(90deg) rotateZ(90deg) translateZ(80px) translateX(-2px) translateY(-78px);
        -moz-transform: rotateX(90deg) rotateZ(90deg) translateZ(80px) translateX(-2px) translateY(-78px);
        transform: rotateX(90deg) rotateZ(90deg) translateZ(80px) translateX(-2px) translateY(-78px);
    }
    .hardcover_front li:last-child:before {
        box-shadow: 0px 0px 30px 5px #333;
        -webkit-transform: rotateX(90deg) rotateZ(90deg) translateZ(-140px) translateX(-2px) translateY(-78px);
        -moz-transform: rotateX(90deg) rotateZ(90deg) translateZ(-140px) translateX(-2px) translateY(-78px);
        transform: rotateX(90deg) rotateZ(90deg) translateZ(-140px) translateX(-2px) translateY(-78px);
    }
    .hardcover_back li:first-child:after,
    .hardcover_back li:first-child:before {
        width: 4px;
        height: 100%;
    }
    .hardcover_back li:first-child:after {
        -webkit-transform: rotateY(90deg) translateZ(-2px) translateX(2px);
        -moz-transform: rotateY(90deg) translateZ(-2px) translateX(2px);
        transform: rotateY(90deg) translateZ(-2px) translateX(2px);
    }
    .hardcover_back li:first-child:before {
        -webkit-transform: rotateY(90deg) translateZ(158px) translateX(2px);
        -moz-transform: rotateY(90deg) translateZ(158px) translateX(2px);
        transform: rotateY(90deg) translateZ(158px) translateX(2px);
    }
    .hardcover_back li:last-child:after,
    .hardcover_back li:last-child:before {
        width: 4px;
        height: 160px;
    }
    .hardcover_back li:last-child:after {
        -webkit-transform: rotateX(90deg) rotateZ(90deg) translateZ(80px) translateX(2px) translateY(-78px);
        -moz-transform: rotateX(90deg) rotateZ(90deg) translateZ(80px) translateX(2px) translateY(-78px);
        transform: rotateX(90deg) rotateZ(90deg) translateZ(80px) translateX(2px) translateY(-78px);
    }
    .hardcover_back li:last-child:before {
        box-shadow: 10px -1px 80px 20px #666;
        -webkit-transform: rotateX(90deg) rotateZ(90deg) translateZ(-140px) translateX(2px) translateY(-78px);
        -moz-transform: rotateX(90deg) rotateZ(90deg) translateZ(-140px) translateX(2px) translateY(-78px);
        transform: rotateX(90deg) rotateZ(90deg) translateZ(-140px) translateX(2px) translateY(-78px);
    }
    .book_spine {
        -webkit-transform: rotateY(60deg) translateX(-5px) translateZ(-12px);
        -moz-transform: rotateY(60deg) translateX(-5px) translateZ(-12px);
        transform: rotateY(60deg) translateX(-5px) translateZ(-12px);
        width: 16px;
        z-index: 0;
    }
    .book_spine li:first-child {
        -webkit-transform: translateZ(2px);
        -moz-transform: translateZ(2px);
        transform: translateZ(2px);
    }
    .book_spine li:last-child {
        -webkit-transform: translateZ(-2px);
        -moz-transform: translateZ(-2px);
        transform: translateZ(-2px);
    }
    .book_spine li:first-child:after,
    .book_spine li:first-child:before {
        width: 4px;
        height: 100%;
    }
    .book_spine li:first-child:after {
        -webkit-transform: rotateY(90deg) translateZ(-2px) translateX(2px);
        -moz-transform: rotateY(90deg) translateZ(-2px) translateX(2px);
        transform: rotateY(90deg) translateZ(-2px) translateX(2px);
    }
    .book_spine li:first-child:before {
        -webkit-transform: rotateY(-90deg) translateZ(-12px);
        -moz-transform: rotateY(-90deg) translateZ(-12px);
        transform: rotateY(-90deg) translateZ(-12px);
    }
    .book_spine li:last-child:after,
    .book_spine li:last-child:before {
        width: 4px;
        height: 16px;
    }
    .book_spine li:last-child:after {
        -webkit-transform: rotateX(90deg) rotateZ(90deg) translateZ(8px) translateX(2px) translateY(-6px);
        -moz-transform: rotateX(90deg) rotateZ(90deg) translateZ(8px) translateX(2px) translateY(-6px);
        transform: rotateX(90deg) rotateZ(90deg) translateZ(8px) translateX(2px) translateY(-6px);
    }
    .book_spine li:last-child:before {
        box-shadow: 5px -1px 100px 40px rgba(0, 0, 0, 0.2);
        -webkit-transform: rotateX(90deg) rotateZ(90deg) translateZ(-210px) translateX(2px) translateY(-6px);
        -moz-transform: rotateX(90deg) rotateZ(90deg) translateZ(-210px) translateX(2px) translateY(-6px);
        transform: rotateX(90deg) rotateZ(90deg) translateZ(-210px) translateX(2px) translateY(-6px);
    }
    .page,
    .page > li {
        position: absolute;
        top: 0;
        left: 0;
        -webkit-transform-style: preserve-3d;
        -moz-transform-style: preserve-3d;
        transform-style: preserve-3d;
    }
    .page {
        width: 100%;
        height: 98%;
        top: 1%;
        left: 3%;
        z-index: 10;
    }
    .page > li {
        width: 100%;
        height: 100%;
        -webkit-transform-origin: left center;
        -moz-transform-origin: left center;
        transform-origin: left center;
        -webkit-transition-property: transform;
        -moz-transition-property: transform;
        transition-property: transform;
        -webkit-transition-timing-function: ease;
        -moz-transition-timing-function: ease;
        transition-timing-function: ease;
    }
    .page > li:nth-child(1) {
        -webkit-transition-duration: 0.6s;
        -moz-transition-duration: 0.6s;
        transition-duration: 0.6s;
    }
    .page > li:nth-child(2) {
        -webkit-transition-duration: 0.6s;
        -moz-transition-duration: 0.6s;
        transition-duration: 0.6s;
    }
    .page > li:nth-child(3) {
        -webkit-transition-duration: 0.4s;
        -moz-transition-duration: 0.4s;
        transition-duration: 0.4s;
    }
    .page > li:nth-child(4) {
        -webkit-transition-duration: 0.5s;
        -moz-transition-duration: 0.5s;
        transition-duration: 0.5s;
    }
    .page > li:nth-child(5) {
        -webkit-transition-duration: 0.6s;
        -moz-transition-duration: 0.6s;
        transition-duration: 0.6s;
    }
    .book:hover > .hardcover_front {
        -webkit-transform: rotateY(-145deg) translateZ(0);
        -moz-transform: rotateY(-145deg) translateZ(0);
        transform: rotateY(-145deg) translateZ(0);
        z-index: 0;
    }
    .book:hover > .page li:nth-child(1) {
        -webkit-transform: rotateY(-30deg);
        -moz-transform: rotateY(-30deg);
        transform: rotateY(-30deg);
        -webkit-transition-duration: 1.5s;
        -moz-transition-duration: 1.5s;
        transition-duration: 1.5s;
    }
    .book:hover > .page li:nth-child(2) {
        -webkit-transform: rotateY(-35deg);
        -moz-transform: rotateY(-35deg);
        transform: rotateY(-35deg);
        -webkit-transition-duration: 1.8s;
        -moz-transition-duration: 1.8s;
        transition-duration: 1.8s;
    }
    .book:hover > .page li:nth-child(3) {
        -webkit-transform: rotateY(-118deg);
        -moz-transform: rotateY(-118deg);
        transform: rotateY(-118deg);
        -webkit-transition-duration: 1.6s;
        -moz-transition-duration: 1.6s;
        transition-duration: 1.6s;
    }
    .book:hover > .page li:nth-child(4) {
        -webkit-transform: rotateY(-130deg);
        -moz-transform: rotateY(-130deg);
        transform: rotateY(-130deg);
        -webkit-transition-duration: 1.4s;
        -moz-transition-duration: 1.4s;
        transition-duration: 1.4s;
    }
    .book:hover > .page li:nth-child(5) {
        -webkit-transform: rotateY(-140deg);
        -moz-transform: rotateY(-140deg);
        transform: rotateY(-140deg);
        -webkit-transition-duration: 1.2s;
        -moz-transition-duration: 1.2s;
        transition-duration: 1.2s;
    }
    .coverDesign {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        overflow: hidden;
        z-index: 1;
        -webkit-backface-visibility: hidden;
        -moz-backface-visibility: hidden;
        backface-visibility: hidden;
    }
    .coverDesign::after {
        background-image: -webkit-linear-gradient( -135deg, rgba(255, 255, 255, 0.45) 0%, transparent 100%);
        background-image: -moz-linear-gradient( -135deg, rgba(255, 255, 255, 0.45) 0%, transparent 100%);
        background-image: linear-gradient( -135deg, rgba(255, 255, 255, 0.45) 0%, transparent 100%);
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
    .coverDesign h1 {
        color: #fff;
        font-size: 2.2em;
        letter-spacing: 0.05em;
        text-align: center;
        margin: 54% 0 0 0;
        text-shadow: -1px -1px 0 rgba(0,0,0,0.1);
    }
    .coverDesign p {
        color: #f8f8f8;
        font-size: 1em;
        text-align: center;
        text-shadow: -1px -1px 0 rgba(0,0,0,0.1);
    }
    .yellow {
        background-color: #f1c40f;
        background-image: -webkit-linear-gradient(top, #f1c40f 58%, #e7ba07 0%);
        background-image: -moz-linear-gradient(top, #f1c40f 58%, #e7ba07 0%);
        background-image: linear-gradient(top, #f1c40f 58%, #e7ba07 0%);
    }
    .blue {
        background-color: #3498db;
        background-image: -webkit-linear-gradient(top, #3498db 58%, #2a90d4 0%);
        background-image: -moz-linear-gradient(top, #3498db 58%, #2a90d4 0%);
        background-image: linear-gradient(top, #3498db 58%, #2a90d4 0%);
    }
    .grey {
        background-color: #f8e9d1;
        background-image: -webkit-linear-gradient(top, #f8e9d1 58%, #e7d5b7 0%);
        background-image: -moz-linear-gradient(top, #f8e9d1 58%, #e7d5b7 0%);
        background-image: linear-gradient(top, #f8e9d1 58%, #e7d5b7 0%);
    }
    .ribbon {
        background: #c0392b;
        color: #fff;
        display: block;
        font-size: 0.7em;
        position: absolute;
        top: 11px;
        right: 1px;
        width: 40px;
        height: 20px;
        line-height: 20px;
        letter-spacing: 0.15em;
        text-align: center;
        -webkit-transform: rotateZ(45deg) translateZ(1px);
        -moz-transform: rotateZ(45deg) translateZ(1px);
        transform: rotateZ(45deg) translateZ(1px);
        -webkit-backface-visibility: hidden;
        -moz-backface-visibility: hidden;
        backface-visibility: hidden;
        z-index: 10;
    }
    .ribbon::before,
    .ribbon::after{
        content: "";
        position: absolute;
        top: -20px;
        width: 0;
        height: 0;
        border-bottom: 20px solid #c0392b;
        border-top: 20px solid transparent;
    }
    .ribbon::before{
        left: -20px;
        border-left: 20px solid transparent;
    }
    .ribbon::after{
        right: -20px;
        border-right: 20px solid transparent;
    }





    .btn2 {
        display: inline-block;
        margin-top: 100px;
        margin-left: 30px;
        font-size: 1.2em;
        font-weight: 700;
        padding: 0.1em 0.8em;
        text-align: center;
        -webkit-transform: rotate(20deg);
        -moz-transform: rotate(20deg);
        transform: rotate(20deg);
        font-family: "Indie Flower", serif;
        -webkit-transition: color 0.3s;
        -moz-transition: color 0.3s;
        transition: color 0.3s;
    }
    .btn2:hover {
        color: #16a085;
    }
    /* HARDCOVER FRONT */
    .paperback_front {
        background-color: #000;
    }
    .paperback_front::after{
        background-image: -webkit-linear-gradient( -135deg, rgba(255, 255, 255, 0.45) 0%, transparent 100%);
        background-image: -moz-linear-gradient( -135deg, rgba(255, 255, 255, 0.45) 0%, transparent 100%);
        background-image: linear-gradient( -135deg, rgba(255, 255, 255, 0.45) 0%, transparent 100%);
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
    .paperback_back {
        background-color: #333;
    }

    /* page */
    .ruled_paper > li {
        background-color: #fff;
        background-image: -webkit-linear-gradient(rgba(200, 200, 200, 0.1) 0.1em, transparent 0.1em), -webkit-linear-gradient(left, #e1ddd8 0%, #fffbf6 100%);
        background-image: -moz-linear-gradient(rgba(200, 200, 200, 0.1) 0.1em, transparent 0.1em), -moz-linear-gradient(left, #e1ddd8 0%, #fffbf6 100%);
        background-image: -ms-linear-gradient(rgba(200, 200, 200, 0.1) 0.1em, transparent 0.1em), -moz-linear-gradient(left, #e1ddd8 0%, #fffbf6 100%);
        background-image: linear-gradient(rgba(200, 200, 200, 0.1) 0.1em, transparent 0.1em), linear-gradient(left, #e1ddd8 0%, #fffbf6 100%);
        background-size: 100% 0.6em;
        box-shadow: inset 0px -1px 2px rgba(50, 50, 50, 0.1), inset -1px 0px 1px rgba(150, 150, 150, 0.2);
        border-radius: 0px 10px 10px 0px;
    }
    .paperback_front {
        -webkit-transform: rotateY(-38deg) translateZ(0px);
        -moz-transform: rotateY(-38deg) translateZ(0px);
        transform: rotateY(-38deg) translateZ(0px);
        z-index: 100;
    }
    .paperback_back {
        -webkit-transform: rotateY(-25deg);
        -moz-transform: rotateY(-25deg);
        transform: rotateY(-25deg);
    }
    .ruled_paper li:nth-child(1) {
        -webkit-transform: rotateY(-27deg);
        -moz-transform: rotateY(-27deg);
        transform: rotateY(-27deg);
    }
    .ruled_paper li:nth-child(2) {
        -webkit-transform: rotateY(-29deg);
        -moz-transform: rotateY(-29deg);
        transform: rotateY(-29deg);
    }
    .ruled_paper li:nth-child(3) {
        -webkit-transform: rotateY(-31deg);
        -moz-transform: rotateY(-31deg);
        transform: rotateY(-31deg);
    }
    .ruled_paper li:nth-child(4) {
        -webkit-transform: rotateY(-33deg);
        -moz-transform: rotateY(-33deg);
        transform: rotateY(-33deg);
    }
    .ruled_paper li:nth-child(5) {
        -webkit-transform: rotateY(-35deg);
        -moz-transform: rotateY(-35deg);
        transform: rotateY(-35deg);
    }
    .paperback_front,
    .paperback_back,
    .paperback_front li,
    .paperback_back li {
        border-radius: 2px 8px 8px 2px;
        position: absolute;
        top: 0;
        left: 0px;
        width: 100%;
        height: 100%;
        -webkit-transform-style: preserve-3d;
        -moz-transform-style: preserve-3d;
        transform-style: preserve-3d;
    }
    .paperback_front,
    .paperback_back {
        -webkit-transform-origin: 0% 100%;
        -moz-transform-origin: 0% 100%;
        transform-origin: 0% 100%;
    }
    .paperback_front{
        -webkit-transition: all 0.5s ease, z-index 0.6s;
        -moz-transition: all 0.5s ease, z-index 0.6s;
        transition: all 0.5s ease, z-index 0.6s;
    }
    .paperback_front li img,
    .paperback_back li img {
        border-radius: 2px 8px 8px 2px;
        position: absolute;
        top: 0;
        left: 0;
    }
    .ruled_paper,
    .ruled_paper > li {
        position: absolute;
        -webkit-transform-style: preserve-3d;
        -moz-transform-style: preserve-3d;
        transform-style: preserve-3d;
    }
    .ruled_paper {
        width: 98%;
        height: 98%;
        top: 1%;
        left: 1%;
        z-index: 10;
    }
    .ruled_paper > li {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .ruled_paper > li {
        -webkit-transform-origin: left center;
        -moz-transform-origin: left center;
        transform-origin: left center;
        -webkit-transition-property: transform;
        -moz-transition-property: transform;
        transition-property: transform;
        -webkit-transition-timing-function: ease;
        -moz-transition-timing-function: ease;
        transition-timing-function: ease;
    }
    .ruled_paper li:nth-child(1) {
        -webkit-transition-duration: 0.6s;
        -moz-transition-duration: 0.6s;
        transition-duration: 0.6s;
    }
    .ruled_paper li:nth-child(2) {
        -webkit-transition-duration: 0.6s;
        -moz-transition-duration: 0.6s;
        transition-duration: 0.6s;
    }
    .ruled_paper li:nth-child(3) {
        -webkit-transition-duration: 0.4s;
        -moz-transition-duration: 0.4s;
        transition-duration: 0.4s;
    }
    .ruled_paper li:nth-child(4) {
        -webkit-transition-duration: 0.5s;
        -moz-transition-duration: 0.5s;
        transition-duration: 0.5s;
    }
    .ruled_paper li:nth-child(5) {
        -webkit-transition-duration: 0.5s;
        -moz-transition-duration: 0.5s;
        transition-duration: 0.5s;
    }
    .book:hover > .paperback_front {
        -webkit-transform: rotateY(-125deg) translateZ(0px);
        -moz-transform: rotateY(-125deg) translateZ(0px);
        transform: rotateY(-125deg) translateZ(0px);
        z-index: 0;
    }
    .book:hover > .ruled_paper li:nth-child(1) {
        -webkit-transform: rotateY(-30deg);
        -moz-transform: rotateY(-30deg);
        transform: rotateY(-30deg);
        -webkit-transition-duration: 1.5s;
        -moz-transition-duration: 1.5s;
        transition-duration: 1.5s;
    }
    .book:hover > .ruled_paper li:nth-child(2) {
        -webkit-transform: rotateY(-35deg);
        -moz-transform: rotateY(-35deg);
        transform: rotateY(-35deg);
        -webkit-transition-duration: 1.8s;
        -moz-transition-duration: 1.8s;
        transition-duration: 1.8s;
    }
    .book:hover > .ruled_paper li:nth-child(3) {
        -webkit-transform: rotateY(-110deg);
        -moz-transform: rotateY(-110deg);
        transform: rotateY(-110deg);
        -webkit-transition-duration: 2.2s;
        -moz-transition-duration: 2.2s;
        transition-duration: 2.2s;
    }
    .book:hover > .ruled_paper li:nth-child(4) {
        -webkit-transform: rotateY(-115deg);
        -moz-transform: rotateY(-115deg);
        transform: rotateY(-115deg);
        -webkit-transition-duration: 1.8s;
        -moz-transition-duration: 1.8s;
        transition-duration: 1.8s;
    }
    .book:hover > .ruled_paper li:nth-child(5) {
        -webkit-transform: rotateY(-120deg);
        -moz-transform: rotateY(-120deg);
        transform: rotateY(-120deg);
        -webkit-transition-duration: 1.2s;
        -moz-transition-duration: 1.2s;
        transition-duration: 1.2s;
    }
    .green {
        background: #2ecc71;
    }
    .red {
        background: #cb0000;
    }
</style>