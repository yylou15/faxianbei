<template>
    <div>
        <el-container class="wrapper hover-shadow" v-for="(item,index) in list" :key="index"
                      v-if="index >= (videoPage-1) * 5 && index < (videoPage * 5)">
            <el-aside width="373px" style="overflow: hidden;">
                <img :src="item.postUrl" alt="封面图片" class="post" @click="openVideoDetail(item.videoId)">
            </el-aside>
            <el-main class="main">
                <span class="caption" @click="openVideoDetail(item.videoId)">{{item.caption}}</span>
                <br/>
                <br/>
                <p class="content" @click="openVideoDetail(item.videoId)" v-html="item.content"></p>
                <div class="publish">
                    发布时间：{{ item.publishTime | formatDate }}
                </div>
                <div class="status">
                    <font-awesome-icon icon="heart" style="color: #F596AA;"/>
                    <span> {{ item.like }} </span>
                    &nbsp;&nbsp;&nbsp;
                    <font-awesome-icon icon="comments"/>
                    <span> {{ item.comments }} </span>
                </div>
            </el-main>
        </el-container>

        <el-row style="background-color: white;margin-top: 30px;text-align: center">
            <el-col :span="24">
                <el-pagination
                        :current-page.sync="videoPage"
                        :page-size="5"
                        layout="total, prev, pager, next"
                        :total="list.length">
                </el-pagination>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  name: 'videoItem',
  props: ['list'],
  data () {
    return {
      msg: 'videoItem',
      videoPage: 1
    }
  },
  methods: {
    openVideoDetail (id) {
      console.log(id)
      this.$router.push('/TripVideo/detail/' + id)
      console.log(this.$route)
    }
  },
  filters: {
    formatDate (timeStamp) {
      let date = new Date(timeStamp * 1000)
      return date.getFullYear() + '-' +
          (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-' +
          (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate())
    }
  }
}
</script>

<style scoped>
    .wrapper {
        height: 247px;
        width: 1000px;
        margin-top: 50px;
        text-align: left;
    }

    .post {
        width: 100%;
        height: 100%;
    }

    .main {
        background-color: white;
        position: relative;
    }

    .caption {
        font-weight: bold;
        font-size: 1.2em;
    }

    .content {
        color: #ccc;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 6;
        overflow: hidden;
    }

    .publish {
        position: absolute;
        bottom: 20px;
        left: 20px;
    }

    .status {
        position: absolute;
        bottom: 20px;
        right: 20px;
    }

    .post, .caption, .content {
        cursor: pointer;
    }
</style>
