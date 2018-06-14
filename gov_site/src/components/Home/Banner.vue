<template>
    <div class="swiper">
        <!-- swiper -->
        <swiper :options="swiperOption">
            <swiper-slide v-for="(v, k) in lists" :key="k">
                <div class="content" :style="{background: 'url(' + v.src + ')' + ' center center no-repeat', backgroundSize: 'cover'}">

                </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev" v-show="swiperbtn"></div>
            <div class="swiper-button-next" slot="button-next" v-show="swiperbtn"></div>
        </swiper>
    </div>
</template>
<script>
    import 'swiper/dist/css/swiper.css'
    import Vue from 'vue'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import { mapGetters } from 'vuex'
    import store from '../../store/'

    export default {
        props: ['list'],
        computed: mapGetters([
            'swiperbtn'
        ]),
        data(){
            return{
                swiperOption: {
                    pagination: '.swiper-pagination',
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                    paginationClickable: true,
                    spaceBetween: 0,
                    centeredSlides: true,
                    autoplay: 2500,
                    loop: true,
                    autoplayDisableOnInteraction: false
                },
                lists: this.list
            }
        },
        components: {
            swiper,
            swiperSlide
        },
        mounted(){
            let swidth = document.body.clientWidth;
            if(swidth >= 678){
                store.dispatch('showSwiperBtn');
            }
            else{
                store.dispatch('hideSwiperBtn');
            }
        }
    }

</script>
<style scoped>
    .swiper{
        width:100%;
        height: 100%;
    }
    .swiper-container {
        height: 100%;
        width: 100%;
    }
    .content{
        height: 100%;
        width: 100%;
    }
</style>