<template>
    <div>
       <!--头部-->
        <header id="header" class="mui-bar mui-bar-nav">

            <h1 class="mui-title">导航栏</h1>
            <button class="mui-action-back mui-btn mui-btn-blue mui-btn-link mui-btn-nav mui-pull-left">
                <span class="mui-icon mui-icon-left-nav"></span>首页
            </button><a class="mui-icon mui-icon-bars mui-pull-right"></a>
        </header>
        <!--轮播图-->

       <div class="content">
           <div class="banner">
               <mt-swipe :auto="3000">
                   <mt-swipe-item><img src="./static/images/dnfbanner3.jpg" alt=""></mt-swipe-item>
                   <mt-swipe-item><img src="./static/images/dnfbanner1.jpg" alt=""></mt-swipe-item>
                   <mt-swipe-item><img src="./static/images/dnfbanner5.jpg" alt=""></mt-swipe-item>
                   <mt-swipe-item><img src="./static/images/dnfbanner6.jpg" alt=""></mt-swipe-item>
               </mt-swipe>
           </div>
       </div>
        <!--九宫格选项卡-->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
                <img src="./static/images/icons/tool-icon03.png" alt="">
                <div class="mui-media-body">Home</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
                <img src="./static/images/icons/tool-icon04.png" alt="">
                <div class="mui-media-body">Email</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
                <img src="./static/images/icons/tool-icon05.png" alt="">
                <div class="mui-media-body">Chat</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
                <img src="./static/images/icons/tool-icon07.png" alt="">
                <div class="mui-media-body">location</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
                <img src="./static/images/icons/tool-icon09.png" alt="">
                <div class="mui-media-body">Search</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
                <img src="./static/images/icons/tool-icon11.png" alt="">
                <div class="mui-media-body">Phone</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
                <img src="./static/images/icons/tool-icon14.png" alt="">
                <div class="mui-media-body">Phone</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="#">
                <img src="./static/images/icons/tool-icon16.png" alt="">
                <div class="mui-media-body">Phone</div></a></li>
        </ul>


        <!--底部tab栏-->
        <nav class="mui-bar mui-bar-tab">
            <a class="mui-tab-item" href="#tabbar">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </a>
            <a class="mui-tab-item mui-active" href="#tabbar-with-chat">
                <span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
                <span class="mui-tab-label">消息</span>
            </a>
            <a class="mui-tab-item" href="#tabbar-with-contact">
                <span class="mui-icon mui-icon-videocam"></span>
                <span class="mui-tab-label">发现</span>
            </a>
            <a class="mui-tab-item" href="#tabbar-with-map">
                <span class="mui-icon mui-icon-gear"></span>
                <span class="mui-tab-label">设置</span>
            </a>
        </nav>
    </div>
</template>
<style scoped>

    .banner{
        height: 10.25rem;
    }
    .banner img{
        width: 100%;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        padding:0 20px;
        border: 0;
    }
    .mui-table-view .mui-table-view-cell img{
        width: 100%;
    }
    .mui-grid-view.mui-grid-9{
        background: #fff;
        border:0;
    }
</style>
<script>
    import { Swipe, SwipeItem } from 'mint-ui';
    import { Tabbar, TabItem } from 'mint-ui';

    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        methods:{
        },
        created:function (){
//            var gallery = mui('.mui-slider');
//            gallery.slider({
//                interval:1000//自动轮播周期，若为0则不自动播放，默认为0；
//            });
        }
    }
</script>
