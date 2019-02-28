<template>
    <div>
        <el-carousel :interval="4000" type="card" height="250px">
            <el-carousel-item v-for="(item, index) in carouselData" :key="index">
                <img class="carousel-img" v-if="item.img" :src="item.img" alt="">
            </el-carousel-item>
        </el-carousel>
        <el-row style="line-height: 40px;background-color: white">
            <el-col :span="18" :offset="3">
                <el-menu :default-active="activeSubIndex" router class="el-menu-demo menu" mode="horizontal">
                    <el-menu-item v-for="(item,i) in subIndexMenu" :key="i" :index="item.route">
                        {{item.caption}}
                    </el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
        <router-view></router-view>
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
      activeSubIndex: this.$route.path,
      subIndexMenu: [
        {
          caption: '最新推荐',
          route: '/TripVideo/latest'
        },
        {
          caption: '热门排行',
          route: '/TripVideo/hot'
        }
      ]
    }
  }
}
</script>

<style scoped>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }

    .carousel-img {
        width: auto;
        height: auto;
        min-height: 250px;
        max-width: 100%;
        max-height: 100%;
        margin:0 auto;
    }
</style>
