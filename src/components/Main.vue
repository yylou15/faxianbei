<template>
    <el-carousel trigger="click" height="100vh">
        <el-carousel-item v-for="item in 3" :key="item">
            <img src="/static/img/bg.jpg" alt="">
        </el-carousel-item>
    </el-carousel>
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
    img{
        width: 100%;
    }
</style>
