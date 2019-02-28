<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="/static/img/bg.jpg" alt="背景">
            </div>
            <div class="swiper-slide">
                <img src="/static/img/bg.jpg" alt="背景">
            </div>
            <div class="swiper-slide">
                <img src="/static/img/bg.jpg" alt="背景">
            </div>
        </div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>

    </div>
</template>

<script>
// import Swiper from 'swiper'
// import 'swiper/dist/css/swiper.min.css'
export default {
  name: 'Main',
  methods: {
  },
  mounted: () => {
    // var mySwiper = new Swiper('.swiper-container', {
    //   loop: true,
    //   // 如果需要前进后退按钮
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev'
    //   }
    //
    // })
  }
}
</script>

<style scoped>
    .swiper-container {
        width: 100%;
    }
    .swiper-slide{
        width: 100%;
    }
    img{
        width: 100%;
        height: 100%;
    }
</style>
