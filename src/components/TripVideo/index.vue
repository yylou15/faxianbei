<template>
    <div style="text-align: left;width: 1000px;margin: auto;">
        <el-carousel :interval="4000" height="300px" style="width: 100%;text-align: center;padding-bottom: 20px">
            <el-carousel-item v-for="(item, index) in carouselData" :key="index">
                <img class="carousel-img" v-if="item.img" :src="item.img" alt="">
            </el-carousel-item>
        </el-carousel>
        <el-row style="line-height: 40px;background-color: white;width: 1000px;margin: 0 auto">
            <el-menu :default-active="activeSubIndex" router class="el-menu-demo menu" mode="horizontal">
                <el-menu-item index="/TripVideo/latest">
                    最新推荐
                </el-menu-item>
                <el-submenu index="/TripVideo/hot">
                    <template slot="title">热门排行</template>
                    <el-menu-item index="/TripVideo/hot/week">本周</el-menu-item>
                    <el-menu-item index="/TripVideo/hot/month">本月</el-menu-item>
                    <el-menu-item index="/TripVideo/hot/season">近三月</el-menu-item>
                </el-submenu>
            </el-menu>
        </el-row>

        <router-view/>
    </div>
</template>

<script>

export default {
  name: 'index',
  data () {
    return {
      msg: 'Video',
      carouselData: [
        {
          img: 'http://54sh.csu.edu.cn/media/zhongguoteseshehuizhuyi_dAW1LU6.jpg'
        }, {
          img: 'http://54sh.csu.edu.cn/media/shuangyiliu_SHiwFoY.jpg'
        }, {
          img: 'http://54sh.csu.edu.cn/media/%E6%96%B0%E5%B9%B4%E9%9F%B3%E4%B9%90%E4%BC%9A.jpg'
        }
      ],
      activeSubIndex: this.$route.path

    }
  }
}
</script>

<style scoped>
    .carousel-img {
        width: auto;
        height: auto;
        min-height: 250px;
        max-width: 100%;
        max-height: 100%;
        margin: 0 auto;
    }

    .video-js .vjs-big-play-button{}
</style>
