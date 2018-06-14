<template>
    <div>
        <div class="swiper">
            <!-- swiper -->
            <swiper :options="swiperOption" ref="mySwiper">
                <swiper-slide v-for="(v, k) in items" :key="k">
                    <div class="content" :style="{background: v.bg}">

                    </div>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'

    export default {
        data(){
            return{
                swiperOption: {
                    pagination: '.swiper-pagination',
                    direction: 'vertical',
                    slidesPerView: 1,
                    paginationClickable: true,
                    spaceBetween: 0,
                    mousewheelControl: true
                },
                items: [
                    { img: '../../../../src/assets/img/banner1.jpg', desc: '', name: 'item 1', bg: '#4390EE' },
                    { img: '../../../../src/assets/img/banner2.jpg', desc: '', name: 'item 2', bg: 'red' },
                    { img: '../../../../src/assets/img/banner3.jpg', desc: '', name: 'item 3', bg: 'yellow' },
                    { img: '../../../../src/assets/img/banner4.jpg', desc: '', name: 'item 4', bg: '#FF8604' },
                    { img: '../../../../src/assets/img/banner5.jpg', desc: '', name: 'item 5', bg: 'green' },
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