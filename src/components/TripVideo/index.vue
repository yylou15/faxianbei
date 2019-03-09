<template>
    <div style="text-align: left;width: 1000px;margin: auto;">
        <el-carousel :interval="4000" height="400px" style="width: 100%;text-align: center;padding-bottom: 20px">
            <el-carousel-item v-for="(item, index) in carouselData" :key="index">
                <a :href="item.url"><img class="carousel-img" v-if="item.img" :src="item.img" alt=""/></a>
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
      activeSubIndex: this.$route.path,
      carouselData: [
        {
          img: '/static/img/TripVideo/post1.png',
          url: '/#/TripVideo/detail/1'
        }, {
          img: 'http://n3-q.mafengwo.net/s8/M00/F1/1E/wKgBpVWiLnaAC1-cAA21442UzLk18.jpeg?imageMogr2%2Fthumbnail%2F%211020x540r%2Fgravity%2FCenter%2Fcrop%2F%211020x540%2Fquality%2F100',
          url: '/#/TripVideo/detail/2'
        }, {
          img: 'http://file02.16sucai.com/d/file/2014/1017/c82642fc48a0223ae35b64c94c129981.jpg',
          url: '/#/TripVideo/detail/7'
        }
      ]
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
</style>
