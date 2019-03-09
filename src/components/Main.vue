<template>
    <el-carousel trigger="click" height="100vh" class="bg">
        <el-carousel-item v-for="(item,index) in bgList" :key="item">
            <span class="main-text">
                    {{item.title}}
            </span>
            <img :src="item.url" alt=""
                 :style="index === 3?{ 'margin-top' : '-35vh'}:{ 'margin-top' : '-10vh'}">
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
          {url:"/static/img/main/1.jpg",title:'人生最好的旅行，就是你在一个陌生的地方，发现一种久违的感动'},
          {url:"/static/img/main/3.jpg",title:'一颗说走就走的心，一个会拍照的情侣，一段甜蜜的旅程'},
          {url:"/static/img/main/2.jpg",title:'有一种旅行，是在旅行的路上感知自我'},
          {url:"/static/img/main/4.jpg",title:'携三五好友去旅行吧，无论在哪，只要身边是他们就好'}
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

    .main-text {
        font-family: "PingFang SC",sans-serif;
        font-weight: bold;
        color: white;
        font-size: 26px;

        position: absolute;
        bottom: 30px;
        width: 100%;
        text-align: center;
        text-shadow: gray;
    }
</style>
