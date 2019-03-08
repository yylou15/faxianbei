<template>
    <el-carousel trigger="click" height="100vh" class="bg">
        <el-carousel-item v-for="item in 5" :key="item">
            <img :src="'/static/img/main/' + item + '.jpg'" alt="">
        </el-carousel-item>
    </el-carousel>
</template>

<script>
// import Swiper from 'swiper'
// import 'swiper/dist/css/swiper.min.css'
export default {
  name: 'Main',
  data () {
    return {
      bgList: [
        '/static/img/'
      ]
    }
  },
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

    .bg {
        position: absolute;
        top:0;left: 0;
        width: 100%;
    }
</style>
