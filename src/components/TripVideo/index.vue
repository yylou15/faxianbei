<template>
    <div>
        <el-carousel :interval="4000" type="card" height="250px">
            <el-carousel-item v-for="(item, index) in carouselData" :key="index">
                <img class="carousel-img" v-if="item.img" :src="item.img" alt="">
            </el-carousel-item>
        </el-carousel>
        <el-col :span="20" :offset="2">
            <el-tabs v-model="activeName">
                <el-tab-pane label="最新推荐" name="latest">
                    <h1>Latest Video</h1>
                </el-tab-pane>

                <el-tab-pane label="热门排行" name="hot">
                    <h1>Hot Video</h1>
                </el-tab-pane>
            </el-tabs>
        </el-col>
    </div>
</template>

<script>
export default {
  name: 'TripVideo',
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
      activeName: 'latest'
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
