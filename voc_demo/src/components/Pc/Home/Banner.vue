<template>
    <div>
        <div class="swiper">
            <!-- swiper -->
            <swiper :options="swiperOption">
                <swiper-slide v-for="(v, k) in items" :key="k">
                    <div class="content" :style="{background: 'url(' + v.img + ')' + ' center center no-repeat'}">

                    </div>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
        </div>
    </div>
</template>
<script>
    import 'swiper/dist/css/swiper.css'
    import Vue from 'vue'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'

    export default {
        data(){
            return{
                swiperOption: {
                    pagination: '.swiper-pagination',
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                    paginationClickable: true,
                    spaceBetween: 30,
                    centeredSlides: true,
                    autoplay: 2500,
                    loop: true,
                    autoplayDisableOnInteraction: false
                },
                items: [
                    { img: '../../../../src/assets/img/banner1.jpg', desc: '', name: 'item 1' },
                    { img: '../../../../src/assets/img/banner2.jpg', desc: '', name: 'item 2' },
                    { img: '../../../../src/assets/img/banner3.jpg', desc: '', name: 'item 3' },
                    { img: '../../../../src/assets/img/banner4.jpg', desc: '', name: 'item 4' },
                    { img: '../../../../src/assets/img/banner5.jpg', desc: '', name: 'item 5' },
                ]
            }
        },
        components: {
            swiper,
            swiperSlide
        },
        methods:{

        }
    }

</script>
<style>
    .swiper{
        width:100%;
        height: 2rem;
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