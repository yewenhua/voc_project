<template>
    <div class="demo-content">
        <div class="content demo-content-padding" :class="active ? 'active' : ''">
            <div class="n-title">
                <div class="p1">APP/网站经典案例</div>
                <div class="p2">公司拥有超过5个主流开发平台，100人以上的App开发/网站制作团队，服务超过120家企业</div>
            </div>
            <div class="appcase-con" id="appcase-con">
                <ul class="appcase-con-list clearfix" :style="{left: caseLeft + 'px'}">
                    <li class="appcase-con-item">
                        <div class="appcase-con-img">
                            <a href="http://www.sunnsoft.com/appcase-13.html">
                                <img src="http://img.sunnsoft.com/c/290x240/uploads/2014-11-29/f15id39EIS.jpg" width="100%" height="100%" alt="医疗卫生app开发案例">
                            </a>
                            <span></span>
                        </div>
                        <div class="appcase-con-bottom">
                            <div class="appcase-con-title"><span>名称：</span><a href="http://www.sunnsoft.com/appcase-13.html" title="微寻医疗社交APP开发案例">微寻医疗社交APP开发</a></div>
                            <div class="appcase-content"><span class="label">类型：</span><span class="con">社交类APP</span>
                            </div>
                            <div class="appcase-content"><span class="label">功能：</span><span class="con">会员系统、双用户界面（医生端、用户端）、预约系统、医院搜索</span>
                            </div>
                        </div>
                    </li>
                    <li class="appcase-con-item">
                        <div class="appcase-con-img">
                            <a href="http://www.sunnsoft.com/appcase-10.html">
                                <img src="http://img.sunnsoft.com/c/290x240/uploads/2014-11-29/FKg6y8cYn4.jpg" width="100%" height="100%" alt="春暖医生医疗app开发案例">
                            </a>
                            <span></span>
                        </div>
                        <div class="appcase-con-bottom">
                            <div class="appcase-con-title"><span>名称：</span><a href="http://www.sunnsoft.com/appcase-10.html" title="春暖医生医疗平台APP案例">春暖医生医疗平台APP</a></div>
                            <div class="appcase-content"><span class="label">类型：</span><span class="con">社交类APP</span>
                            </div>
                            <div class="appcase-content"><span class="label">功能：</span><span class="con">GPS定位、天气预报、积分系统、会员系统</span>
                            </div>
                        </div>
                    </li>
                    <li class="appcase-con-item">
                        <div class="appcase-con-img">
                            <a href="http://www.sunnsoft.com/appcase-9.html">
                                <img src="http://img.sunnsoft.com/c/290x240/uploads/2014-11-29/cViDb01KIp.jpg" width="100%" height="100%" alt="恒大集体app开发案例">
                            </a>
                            <span></span>
                        </div>
                        <div class="appcase-con-bottom">
                            <div class="appcase-con-title"><span>名称：</span><a href="http://www.sunnsoft.com/appcase-9.html" title="恒大新闻资讯APP制作案例">恒大新闻资讯APP制作</a></div>
                            <div class="appcase-content"><span class="label">类型：</span><span class="con">新闻类APP</span>
                            </div>
                            <div class="appcase-content"><span class="label">功能：</span><span class="con">新闻阅读、点赞、新闻评论、新闻转发分享</span>
                            </div>
                        </div>
                    </li>
                    <li class="appcase-con-item">
                        <div class="appcase-con-img">
                            <a href="http://www.sunnsoft.com/appcase-12.html">
                                <img src="http://img.sunnsoft.com/c/290x240/uploads/2014-11-29/QPeYxcALP5.jpg" width="100%" height="100%" alt="广校通教育社交app开发案例">
                            </a>
                            <span></span>
                        </div>
                        <div class="appcase-con-bottom">
                            <div class="appcase-con-title"><span>名称：</span><a href="http://www.sunnsoft.com/appcase-12.html" title="广校通教育社交APP定制案例">广校通教育社交APP定制</a></div>
                            <div class="appcase-content"><span class="label">类型：</span><span class="con">社交类APP</span>
                            </div>
                            <div class="appcase-content"><span class="label">功能：</span><span class="con">校友圈、即时聊天、校园商城</span>
                            </div>
                        </div>
                    </li>
                    <li class="appcase-con-item">
                        <div class="appcase-con-img">
                            <a href="http://www.sunnsoft.com/appcase-13.html">
                                <img src="http://img.sunnsoft.com/c/290x240/uploads/2014-11-29/f15id39EIS.jpg" width="100%" height="100%" alt="医疗卫生app开发案例">
                            </a>
                            <span></span>
                        </div>
                        <div class="appcase-con-bottom">
                            <div class="appcase-con-title"><span>名称：</span><a href="http://www.sunnsoft.com/appcase-13.html" title="微寻医疗社交APP开发案例">微寻医疗社交APP开发</a></div>
                            <div class="appcase-content"><span class="label">类型：</span><span class="con">社交类APP</span>
                            </div>
                            <div class="appcase-content"><span class="label">功能：</span><span class="con">会员系统、双用户界面（医生端、用户端）、预约系统、医院搜索</span>
                            </div>
                        </div>
                    </li>
                    <li class="appcase-con-item">
                        <div class="appcase-con-img">
                            <a href="http://www.sunnsoft.com/appcase-10.html">
                                <img src="http://img.sunnsoft.com/c/290x240/uploads/2014-11-29/FKg6y8cYn4.jpg" width="100%" height="100%" alt="春暖医生医疗app开发案例">
                            </a>
                            <span></span>
                        </div>
                        <div class="appcase-con-bottom">
                            <div class="appcase-con-title"><span>名称：</span><a href="http://www.sunnsoft.com/appcase-10.html" title="春暖医生医疗平台APP案例">春暖医生医疗平台APP</a></div>
                            <div class="appcase-content"><span class="label">类型：</span><span class="con">社交类APP</span>
                            </div>
                            <div class="appcase-content"><span class="label">功能：</span><span class="con">GPS定位、天气预报、积分系统、会员系统</span>
                            </div>
                        </div>
                    </li>
                    <li class="appcase-con-item">
                        <div class="appcase-con-img">
                            <a href="http://www.sunnsoft.com/appcase-9.html">
                                <img src="http://img.sunnsoft.com/c/290x240/uploads/2014-11-29/cViDb01KIp.jpg" width="100%" height="100%" alt="恒大集体app开发案例">
                            </a>
                            <span></span>
                        </div>
                        <div class="appcase-con-bottom">
                            <div class="appcase-con-title"><span>名称：</span><a href="http://www.sunnsoft.com/appcase-9.html" title="恒大新闻资讯APP制作案例">恒大新闻资讯APP制作</a></div>
                            <div class="appcase-content"><span class="label">类型：</span><span class="con">新闻类APP</span>
                            </div>
                            <div class="appcase-content"><span class="label">功能：</span><span class="con">新闻阅读、点赞、新闻评论、新闻转发分享</span>
                            </div>
                        </div>
                    </li>
                    <li class="appcase-con-item">
                        <div class="appcase-con-img">
                            <a href="http://www.sunnsoft.com/appcase-12.html">
                                <img src="http://img.sunnsoft.com/c/290x240/uploads/2014-11-29/QPeYxcALP5.jpg" width="100%" height="100%" alt="广校通教育社交app开发案例">
                            </a>
                            <span></span>
                        </div>
                        <div class="appcase-con-bottom">
                            <div class="appcase-con-title"><span>名称：</span><a href="http://www.sunnsoft.com/appcase-12.html" title="广校通教育社交APP定制案例">广校通教育社交APP定制</a></div>
                            <div class="appcase-content"><span class="label">类型：</span><span class="con">社交类APP</span>
                            </div>
                            <div class="appcase-content"><span class="label">功能：</span><span class="con">校友圈、即时聊天、校园商城</span>
                            </div>
                        </div>
                    </li>
                    <li class="appcase-con-item">
                        <div class="appcase-con-img">
                            <a href="http://www.sunnsoft.com/appcase-20.html">
                                <img src="http://img.sunnsoft.com/c/290x240/uploads/2014-12-12/Sj5GTeWEx8.jpg" width="100%" height="100%" alt="爱上设计微信开发案例">
                            </a>
                            <span></span>
                        </div>
                        <div class="appcase-con-bottom">
                            <div class="appcase-con-title"><span>名称：</span><a href="http://www.sunnsoft.com/appcase-20.html" title="爱上设计微信开发案例">爱上设计微信开发</a></div>
                            <div class="appcase-content"><span class="label">类型：</span><span class="con">企业展示类APP</span>
                            </div>
                            <div class="appcase-content"><span class="label">功能：</span><span class="con">html5动态动画效果</span>
                            </div>
                        </div>
                    </li>
                    <li class="appcase-con-item">
                        <div class="appcase-con-img">
                            <a href="http://www.sunnsoft.com/appcase-19.html">
                                <img src="http://img.sunnsoft.com/c/290x240/uploads/2014-12-13/nk33p3NlnY.jpg" width="100%" height="100%" alt="东风日产微信定制开发案例">
                            </a>
                            <span></span>
                        </div>
                        <div class="appcase-con-bottom">
                            <div class="appcase-con-title"><span>名称：</span><a href="http://www.sunnsoft.com/appcase-19.html" title="东风日产本色圈微信开发案例">东风日产本色圈微信开发</a></div>
                            <div class="appcase-content"><span class="label">类型：</span><span class="con">社交类APP</span>
                            </div>
                            <div class="appcase-content"><span class="label">功能：</span><span class="con">手指涂抹刮卡效果、点赞、转发</span>
                            </div>
                        </div>
                    </li>
                    <li class="appcase-con-item">
                        <div class="appcase-con-img">
                            <a href="http://www.sunnsoft.com/appcase-22.html">
                                <img src="http://img.sunnsoft.com/c/290x240/uploads/2015-04-29/Tlkjl3btEf.jpg" width="100%" height="100%" alt="iexplore新闻资讯APP应用开发案例">
                            </a>
                            <span></span>
                        </div>
                        <div class="appcase-con-bottom">
                            <div class="appcase-con-title"><span>名称：</span><a href="http://www.sunnsoft.com/appcase-22.html" title="iexplore新闻资讯APP应用开发案例">iexplore新闻资讯APP应用开发</a></div>
                            <div class="appcase-content"><span class="label">类型：</span><span class="con">新闻类APP</span>
                            </div>
                            <div class="appcase-content"><span class="label">功能：</span><span class="con">新闻阅读、收藏、点评、分享</span>
                            </div>
                        </div>
                    </li>
                    <li class="appcase-con-item">
                        <div class="appcase-con-img">
                            <a href="http://www.sunnsoft.com/appcase-6.html">
                                <img src="http://img.sunnsoft.com/c/290x240/uploads/2014-11-29/ShSBvMYBy0.jpg" width="100%" height="100%" alt="皮尔卡丹网站开发">
                            </a>
                            <span></span>
                        </div>
                        <div class="appcase-con-bottom">
                            <div class="appcase-con-title"><span>名称：</span><a href="http://www.sunnsoft.com/appcase-6.html" title="皮尔卡丹品牌官网、企业App案例">皮尔卡丹品牌官网、企业App</a></div>
                            <div class="appcase-content"><span class="label">类型：</span><span class="con">企业展示类APP</span>
                            </div>
                            <div class="appcase-content"><span class="label">功能：</span><span class="con">企业产品展示、企业品牌宣传</span>
                            </div>
                        </div>
                    </li>
                    <li class="appcase-con-item">
                        <div class="appcase-con-img">
                            <a href="http://www.sunnsoft.com/appcase-20.html">
                                <img src="http://img.sunnsoft.com/c/290x240/uploads/2014-12-12/Sj5GTeWEx8.jpg" width="100%" height="100%" alt="爱上设计微信开发案例">
                            </a>
                            <span></span>
                        </div>
                        <div class="appcase-con-bottom">
                            <div class="appcase-con-title"><span>名称：</span><a href="http://www.sunnsoft.com/appcase-20.html" title="爱上设计微信开发案例">爱上设计微信开发</a></div>
                            <div class="appcase-content"><span class="label">类型：</span><span class="con">企业展示类APP</span>
                            </div>
                            <div class="appcase-content"><span class="label">功能：</span><span class="con">html5动态动画效果</span>
                            </div>
                        </div>
                    </li>
                    <li class="appcase-con-item">
                        <div class="appcase-con-img">
                            <a href="http://www.sunnsoft.com/appcase-19.html">
                                <img src="http://img.sunnsoft.com/c/290x240/uploads/2014-12-13/nk33p3NlnY.jpg" width="100%" height="100%" alt="东风日产微信定制开发案例">
                            </a>
                            <span></span>
                        </div>
                        <div class="appcase-con-bottom">
                            <div class="appcase-con-title"><span>名称：</span><a href="http://www.sunnsoft.com/appcase-19.html" title="东风日产本色圈微信开发案例">东风日产本色圈微信开发</a></div>
                            <div class="appcase-content"><span class="label">类型：</span><span class="con">社交类APP</span>
                            </div>
                            <div class="appcase-content"><span class="label">功能：</span><span class="con">手指涂抹刮卡效果、点赞、转发</span>
                            </div>
                        </div>
                    </li>
                    <li class="appcase-con-item">
                        <div class="appcase-con-img">
                            <a href="http://www.sunnsoft.com/appcase-22.html">
                                <img src="http://img.sunnsoft.com/c/290x240/uploads/2015-04-29/Tlkjl3btEf.jpg" width="100%" height="100%" alt="iexplore新闻资讯APP应用开发案例">
                            </a>
                            <span></span>
                        </div>
                        <div class="appcase-con-bottom">
                            <div class="appcase-con-title"><span>名称：</span><a href="http://www.sunnsoft.com/appcase-22.html" title="iexplore新闻资讯APP应用开发案例">iexplore新闻资讯APP应用开发</a></div>
                            <div class="appcase-content"><span class="label">类型：</span><span class="con">新闻类APP</span>
                            </div>
                            <div class="appcase-content"><span class="label">功能：</span><span class="con">新闻阅读、收藏、点评、分享</span>
                            </div>
                        </div>
                    </li>
                    <li class="appcase-con-item">
                        <div class="appcase-con-img">
                            <a href="http://www.sunnsoft.com/appcase-6.html">
                                <img src="http://img.sunnsoft.com/c/290x240/uploads/2014-11-29/ShSBvMYBy0.jpg" width="100%" height="100%" alt="皮尔卡丹网站开发">
                            </a>
                            <span></span>
                        </div>
                        <div class="appcase-con-bottom">
                            <div class="appcase-con-title"><span>名称：</span><a href="http://www.sunnsoft.com/appcase-6.html" title="皮尔卡丹品牌官网、企业App案例">皮尔卡丹品牌官网、企业App</a></div>
                            <div class="appcase-content"><span class="label">类型：</span><span class="con">企业展示类APP</span>
                            </div>
                            <div class="appcase-content"><span class="label">功能：</span><span class="con">企业产品展示、企业品牌宣传</span>
                            </div>
                        </div>
                    </li>
                    <li class="appcase-con-item">
                        <div class="appcase-con-img">
                            <a href="http://www.sunnsoft.com/appcase-7.html">
                                <img src="http://img.sunnsoft.com/c/290x240/uploads/2014-11-29/6WQ6ckk8xF.jpg" width="100%" height="100%" alt="张小盒企业网站">
                            </a>
                            <span></span>
                        </div>
                        <div class="appcase-con-bottom">
                            <div class="appcase-con-title"><span>名称：</span><a href="http://www.sunnsoft.com/appcase-7.html" title="张小盒企业展示APP开发案例">张小盒企业展示APP开发</a></div>
                            <div class="appcase-content"><span class="label">类型：</span><span class="con">企业展示类APP</span>
                            </div>
                            <div class="appcase-content"><span class="label">功能：</span><span class="con">漫画阅读器</span>
                            </div>
                        </div>
                    </li>
                    <li class="appcase-con-item">
                        <div class="appcase-con-img">
                            <a href="http://www.sunnsoft.com/appcase-4.html">
                                <img src="http://img.sunnsoft.com/c/290x240/uploads/2014-11-29/E16r7fRiJz.jpg" width="100%" height="100%" alt="蚁族众筹网站开发案例">
                            </a>
                            <span></span>
                        </div>
                        <div class="appcase-con-bottom">
                            <div class="appcase-con-title"><span>名称：</span><a href="http://www.sunnsoft.com/appcase-4.html" title="蚁族众筹网案例">蚁族众筹网</a></div>
                            <div class="appcase-content"><span class="label">类型：</span><span class="con">商城类APP</span>
                            </div>
                            <div class="appcase-content"><span class="label">功能：</span><span class="con">项目发起、项目审核、用户中心、在线支付</span>
                            </div>
                        </div>
                    </li>
                    <li class="appcase-con-item">
                        <div class="appcase-con-img">
                            <a href="http://www.sunnsoft.com/appcase-5.html">
                                <img src="http://img.sunnsoft.com/c/290x240/uploads/2014-11-29/5hoPmhbUmv.png" width="100%" height="100%" alt="南方设计院企业官网">
                            </a>
                            <span></span>
                        </div>
                        <div class="appcase-con-bottom">
                            <div class="appcase-con-title"><span>名称：</span><a href="http://www.sunnsoft.com/appcase-5.html" title="南方设计院企业官网">南方设计院企业官网</a></div>
                            <div class="appcase-content"><span class="label">类型：</span><span class="con">企业展示类APP</span>
                            </div>
                            <div class="appcase-content"><span class="label">功能：</span><span class="con">企业形象展示</span>
                            </div>
                        </div>
                    </li>
                    <li class="appcase-con-item">
                        <div class="appcase-con-img">
                            <a href="http://www.sunnsoft.com/appcase-17.html">
                                <img src="http://img.sunnsoft.com/c/290x240/uploads/2014-11-29/GlpPwFZtyw.jpg" width="100%" height="100%" alt="智能家居APP开发案例">
                            </a>
                            <span></span>
                        </div>
                        <div class="appcase-con-bottom">
                            <div class="appcase-con-title"><span>名称：</span><a href="http://www.sunnsoft.com/appcase-17.html" title="智能家居App开发案例">智能家居App开发</a></div>
                            <div class="appcase-content"><span class="label">类型：</span><span class="con">智能硬件类APP</span>
                            </div>
                            <div class="appcase-content"><span class="label">功能：</span><span class="con">情景模式设置</span>
                            </div>
                        </div>
                    </li>
                    <div class="clear"></div>
                </ul>
                <div class="case-more">
                    <span class="prev" @click="prev"></span><!-- --><span class="next" @click="next"></span>
                </div>
            </div>
        </div>
        <div class="mobile-content">
            <div class="n-title">
                <div class="p1">案例中心</div>
                <div class="p2">秉承专注创新的民族精神</div>
            </div>
            <ul class="news-ul">
                <li class="n-item">
                    <div>
                        <a href="#">
                            <img src="http://img.sunnsoft.com/c/290x240/uploads/2014-11-29/f15id39EIS.jpg" width="100%" height="100%" alt="医疗卫生app开发案例">
                        </a>
                        <span></span>
                    </div>
                    <div class="mobile-appcase-con-bottom">
                        <div class="mobile-appcase-con-title"><span>名称：</span><a href="http://www.sunnsoft.com/appcase-13.html" title="微寻医疗社交APP开发案例">微寻医疗社交APP开发案例</a></div>
                        <div class="mobile-appcase-content"><span class="label">类型：</span><span class="con">社交类APP</span>
                        </div>
                        <div class="mobile-appcase-content"><span class="label">功能：</span><span class="con">会员系统、双用户界面（医生端、用户端）、预约系统、医院搜索</span>
                        </div>
                    </div>
                </li>
                <li class="n-item">
                    <div>
                        <a href="#">
                            <img src="http://img.sunnsoft.com/c/290x240/uploads/2014-11-29/QPeYxcALP5.jpg" width="100%" height="100%" alt="医疗卫生app开发案例">
                        </a>
                        <span></span>
                    </div>
                    <div class="mobile-appcase-con-bottom">
                        <div class="mobile-appcase-con-title"><span>名称：</span><a href="http://www.sunnsoft.com/appcase-13.html" title="微寻医疗社交APP开发案例">微寻医疗社交APP开发案例</a></div>
                        <div class="mobile-appcase-content"><span class="label">类型：</span><span class="con">社交类APP</span>
                        </div>
                        <div class="mobile-appcase-content"><span class="label">功能：</span><span class="con">会员系统、双用户界面（医生端、用户端）、预约系统、医院搜索</span>
                        </div>
                    </div>
                </li>
                <li class="n-item">
                    <div>
                        <a href="#">
                            <img src="http://img.sunnsoft.com/c/290x240/uploads/2014-11-29/FKg6y8cYn4.jpg" width="100%" height="100%" alt="医疗卫生app开发案例">
                        </a>
                        <span></span>
                    </div>
                    <div class="mobile-appcase-con-bottom">
                        <div class="mobile-appcase-con-title"><span>名称：</span><a href="http://www.sunnsoft.com/appcase-13.html" title="微寻医疗社交APP开发案例">微寻医疗社交APP开发案例</a></div>
                        <div class="mobile-appcase-content"><span class="label">类型：</span><span class="con">社交类APP</span>
                        </div>
                        <div class="mobile-appcase-content"><span class="label">功能：</span><span class="con">会员系统、双用户界面（医生端、用户端）、预约系统、医院搜索</span>
                        </div>
                    </div>
                </li>
                <li class="n-item">
                    <div>
                        <a href="#">
                            <img src="http://img.sunnsoft.com/c/290x240/uploads/2014-11-29/cViDb01KIp.jpg" width="100%" height="100%" alt="医疗卫生app开发案例">
                        </a>
                        <span></span>
                    </div>
                    <div class="mobile-appcase-con-bottom">
                        <div class="mobile-appcase-con-title"><span>名称：</span><a href="http://www.sunnsoft.com/appcase-13.html" title="微寻医疗社交APP开发案例">微寻医疗社交APP开发案例</a></div>
                        <div class="mobile-appcase-content"><span class="label">类型：</span><span class="con">社交类APP</span>
                        </div>
                        <div class="mobile-appcase-content"><span class="label">功能：</span><span class="con">会员系统、双用户界面（医生端、用户端）、预约系统、医院搜索</span>
                        </div>
                    </div>
                </li>
                <div class="clear"></div>
            </ul>
        </div>
    </div>
</template>
<script>
    import store from '../../store/'
    export default {
        data(){
            return {
                caseLeft: 0,
                active: false
            }
        },
        methods: {
            prev(){
                if(this.caseLeft < 0){
                    let obj = document.querySelector(".appcase-con-item");
                    let style = window.getComputedStyle(obj, null);
                    let strLength = style['marginRight'].length;
                    let itemWidth = obj.offsetWidth + Number(style['marginLeft'].substring(0, strLength-2)) + Number(style['marginRight'].substring(0, strLength-2));
                    this.caseLeft = this.caseLeft + itemWidth * 4;
                }
            },
            next(){
                let obj = document.querySelector(".appcase-con-item");
                let style = window.getComputedStyle(obj, null);
                let strLength = style['marginRight'].length;
                let itemWidth = obj.offsetWidth + Number(style['marginLeft'].substring(0, strLength-2)) + Number(style['marginRight'].substring(0, strLength-2));
                let size = document.querySelectorAll(".appcase-con-item").length;
                if(this.caseLeft > -(size-4)*itemWidth){
                    this.caseLeft = this.caseLeft - itemWidth * 4;
                }
            },
            scroll(){
                let obj = document.querySelector(".page-main");
                let swidth = document.body.clientWidth;
                let screenHeight = obj.offsetHeight;   //屏幕可见高度
                let scrollTop = obj.scrollTop;   //滚动条距离顶部高度

                let contentObj = document.querySelector(".content");
                let theObj = document.querySelector(".case");
                let theObjH= theObj.offsetHeight;
                let theObjT= theObj.offsetTop + contentObj.offsetTop;

                if(swidth >= 678){
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
            //全局只能监听一个onresize事件
            window.onresize = function(){
                this.caseLeft = 0;

                //控制轮播图按钮是否显示
                let swidth = document.body.clientWidth;
                if(swidth >= 678){
                    store.dispatch('showSwiperBtn');
                }
                else{
                    store.dispatch('hideSwiperBtn');
                }
            }.bind(this);

            let contentObj = document.querySelector(".page-main");
            contentObj.addEventListener('scroll', this.scroll);

            this.scroll();
        }
    }
</script>
<style scoped>
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
    .demo-content{
        width:100%;
    }
    .demo-content-padding{
        padding-top:75px;
        padding-bottom:75px;
    }
    .demo-content-padding.active .n-title, .demo-content-padding.active .appcase-con{
        opacity: 0;
    }
    .demo-content-padding.active .n-title, .demo-content-padding.active .appcase-con{
        animation: fadeIn 1s ease  forwards  alternate;
        -webkit-animation: fadeIn 1s ease  forwards  alternate;
    }
    .demo-content-padding.active .appcase-con{
        -webkit-animation-delay: 0.3s;
        animation-delay: 0.3s;
    }

    .demo-content .detail{
        min-height:100px;
    }
    .appcase-con {
        width: 1200px;
        overflow: hidden;
    }
    .appcase-con .appcase-con-list {
        width: 9999px;
        position: relative;
        transition: All 0.3s ease;
        -webkit-transition: All 0.3s ease;
    }
    .appcase-con .appcase-con-list .appcase-con-item {
        float: left;
        width: 290px;
        margin-left: 5px;
        margin-right: 5px;
    }
    .appcase-con .appcase-con-list .appcase-con-item .appcase-con-img {
        width: 290px;
        height: 240px;
        position: relative;
    }
    .appcase-con .appcase-con-list .appcase-con-item .appcase-con-img a img {
        width: 100%;
        vertical-align: middle;
    }
    .appcase-con .appcase-con-list .appcase-con-item .appcase-con-img span {
        display: inline-block;
        position: absolute;
        bottom: 0;
        right: 33px;
        width: 18px;
        height: 9px;
        background: url("../../assets/img/case-ch-icon.png") no-repeat center;
    }
    .appcase-con .appcase-con-list .appcase-con-item .appcase-con-bottom {
        padding: 10px 0 15px 20px;
        border: 1px solid #dcdcdc;
        background-color: #ffffff;
        border-top: none;
    }
    .appcase-con .appcase-con-list .appcase-con-item .appcase-con-bottom .appcase-con-title span {
        display: inline-block;
        vertical-align: top;
        height: 30px;
        line-height: 29px;
        color: #888888;
        font-size: 12px;
    }
    .appcase-con .appcase-con-list .appcase-con-item .appcase-con-bottom .appcase-con-title a {
        font-size: 14px;
        line-height: 29px;
        width: 220px;
        font-weight: bold;
        border-bottom: 1px solid #dcdcdc;
        display: inline-block;
        vertical-align: top;
        height: 30px;
        overflow: hidden;
    }
    .appcase-con .appcase-con-list .appcase-con-item .appcase-con-bottom .appcase-content {
        margin-top: 5px;
    }
    .appcase-con .appcase-con-list .appcase-con-item .appcase-con-bottom .appcase-content .label {
        display: inline-block;
        vertical-align: top;
        color: #888888;
        font-size: 12px;
        line-height: 22px;
    }
    .appcase-con .appcase-con-list .appcase-con-item .appcase-con-bottom .appcase-content .con {
        height: 44px;
        line-height: 22px;
        font-size: 12px;
        color: #888888;
        width: 220px;
        border-bottom: 1px solid #dcdcdc;
        display: inline-block;
        vertical-align: top;
        padding-bottom: 5px;
    }
    .appcase-con .case-more {
        padding-top: 40px;
        text-align: center;
    }
    .appcase-con .case-more .prev {
        background: url("../../assets/img/case-prev.png") no-repeat center;
        background-color: #9d9d9d;
    }
    .appcase-con .case-more span {
        display: inline-block;
        height: 32px;
        width: 32px;
        cursor: pointer;
    }
    .appcase-con .case-more .next {
        /* margin-left: -5px; */
        background: url("../../assets/img/case-next.png") no-repeat center;
        background-color: #9d9d9d;
    }
    .appcase-con .case-more .prev:hover {
        background-color: #fe7100;
    }
    .appcase-con .case-more .next:hover {
        background-color: #fe7100;
    }
    .appcase-con .appcase-con-list .appcase-con-item:hover .appcase-con-bottom {
        background-color: #e5e5e5;
    }
    .appcase-con .appcase-con-list .appcase-con-item:hover .appcase-con-img span {
        background: url("../../assets/img/case-ch-icon-h.png") no-repeat center;
    }
    .appcase-con-title a:hover{
        color:#ff7852
    }
    .content{
        display: none;
    }
    .mobile-content{
        display: block;
        background: #fff;
        padding: 20px;
    }
    .mobile-appcase-con-bottom{
        padding-top: 10px;
        padding-bottom: 20px;
        font-size: 14px;
        text-align: center;
    }
    .mobile-appcase-con-title, .mobile-appcase-con-title a{
        color: #80734a;
        font-size: 16px;
        height: 25px;
        line-height: 25px;
    }
    .mobile-appcase-content{
        font-size: 12px;
        height: 20px;
        line-height: 20px;
    }
    .bg-white{
        background: #fff;
    }
    .mobile-content .n-item {
        margin-bottom: 15px;
        background: #fff;
    }
    @media (min-width: 768px){
        .mobile-content{
            padding-top: 45px;
            padding-bottom: 45px;
        }
    }
    @media (min-width: 1200px){
        .content{
            display: block;
        }
        .mobile-content{
            display: none;
        }
        .n-title .p1 {
            padding-bottom: 25px;
            font-size: 30px;
        }
        .appcase-con {
            width: 1100px;
        }
        .appcase-con .appcase-con-list .appcase-con-item {
            width: 265px;
            margin-left: 5px;
            margin-right: 5px;
        }
        .appcase-con .appcase-con-list .appcase-con-item .appcase-con-img {
            width: 265px;
            height: 240px;
        }
        .appcase-con .appcase-con-list .appcase-con-item .appcase-con-bottom .appcase-con-title a, .appcase-con .appcase-con-list .appcase-con-item .appcase-con-bottom .appcase-content .con{
            width: 190px;
        }
        .demo-content-padding{
            padding-top: 50px;
            padding-bottom: 50px;
        }
    }
    @media (min-width: 1500px){
        .news-ul, .about .content, .nav, .pc_header_bg, .case{
            width: 1300px;
            margin: 0px auto;
        }
        .appcase-con {
            width: 1300px;
        }
        .appcase-con .appcase-con-list .appcase-con-item {
            width: 305px;
            margin-left: 10px;
            margin-right: 10px;
        }
        .appcase-con .appcase-con-list .appcase-con-item .appcase-con-img {
            width: 305px;
            height: 280px;
        }
        .appcase-con .appcase-con-list .appcase-con-item .appcase-con-bottom .appcase-con-title a, .appcase-con .appcase-con-list .appcase-con-item .appcase-con-bottom .appcase-content .con{
            width: 220px;
        }
    }
    @media (min-width: 1800px){
        .news-ul, .about .content, .nav, .pc_header_bg, .case{
            width: 1500px;
            margin: 0px auto;
        }
        .appcase-con {
            width: 1500px;
        }
        .appcase-con .appcase-con-list .appcase-con-item {
            width: 345px;
            margin-left: 15px;
            margin-right: 15px;
        }
        .appcase-con .appcase-con-list .appcase-con-item .appcase-con-img {
            width: 345px;
            height: 320px;
        }
        .appcase-con .appcase-con-list .appcase-con-item .appcase-con-bottom .appcase-con-title a, .appcase-con .appcase-con-list .appcase-con-item .appcase-con-bottom .appcase-content .con{
            width: 250px;
        }
    }
</style>