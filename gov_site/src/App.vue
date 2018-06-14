<template>
  <div id="app">
      <Loading v-if="loading"></Loading>
      <div class="view-content">
          <transition :name="transitionName">
              <router-view class="child-view"></router-view>
          </transition>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: mapGetters([
      'loading'
  ]),
  data () {
      return {
          msg: 'Welcome',
          transitionName: 'slide-left',
     }
  },
  methods:{

  },
  watch: {
      '$route' (to, from) {
          let isBack = this.$router.isBack;
          if(typeof(to.meta.agent) !="undefined" && to.meta.agent == 'pc' && !isBack){
              //pc页面非返回页面
              this.transitionName = 'fadeup';
          }
          else if(typeof(from.meta.agent) !="undefined" && from.meta.agent == 'pc' && isBack){
              //PC页面返回页面
              this.transitionName = 'fadeup';
          }
          else {
              //手机页面
              if (isBack) {
                  this.transitionName = 'slide-right';
              } else {
                  this.transitionName = 'slide-left';
              }
          }

          this.$router.isBack = false;
      }
  },
}
</script>

<style>
    body, html{
        width:100%;
        height:100%;
        background: #f4f4f4;
        overflow: hidden;
    }
    #app{
        width:100%;
        height:100%;
    }
    .view-content{
        width:100%;
        height:100%;
    }
    .router-link-active{
        color:#f60;
    }
    .child-view {
        position: absolute;
        width:100%;
        height:100%;
        transition: all 250ms cubic-bezier(.55,0,.1,1);
        backface-visibility: hidden;
    }
    .slide-left-enter, .slide-right-leave-active {
        opacity: 0;
        -webkit-transform: translate(100%, 0);
        transform: translate(100%, 0);
    }
    .slide-left-leave-active, .slide-right-enter {
        opacity: 0;
        -webkit-transform: translate(-100%, 0);
        transform: translate(-100%, 0);
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s ease;
    }
    .fade-enter, .fade-leave-active {
        opacity: 0
    }


    .zoom-enter-active {
        animation: zoomInLeft .5s;
    }
    .zoom-leave-active {
        animation: zoomOutRight .5s;
    }
    @keyframes zoomInLeft {
        from {
            opacity: 0;
            transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);
            animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
        }
        60% {
            opacity: 1;
            transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);
            animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
        }
    }
    @keyframes zoomOutRight {
        40% {
            opacity: 1;
            transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);
        }
        to {
            opacity: 0;
            transform: scale(.1) translate3d(2000px, 0, 0);
            transform-origin: right center;
        }
    }


    .fadeup-enter-active {
        animation: fadeInUp .5s;
    }
    .fadeup-leave-active {
        animation: fadeOutUp .5s;
    }
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translate3d(0, 30px, 0);
        }
        to {
            opacity: 1;
            transform: none;
        }
    }
    @keyframes fadeOutUp {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
            transform: translate3d(0, -30px, 0);
        }
    }
</style>
