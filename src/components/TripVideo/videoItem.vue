<template>
    <div>
        <el-row class="wrapper" v-for="(item,index) in list"
                :key="index" v-if="index >= (videoPage - 1) * 5 && index < (videoPage * 5)"
                style="background: white;margin-top: 20px;margin-bottom: 20px" :gutter="20">
            <el-col style="overflow: hidden;padding: 20px" :span="8">
                <img :src="item.postUrl" alt="封面图片" class="post">
            </el-col>
            <el-col :span="16">
                <h3>{{item.caption}}</h3>
                <p class="digest">{{item.digest}}</p>
                <el-row class="video-bottom">
                    <el-col :span="10">
                        发布时间：{{ item.time | formatDate }}
                    </el-col>
                    <el-col :span="8" :offset="6">
                        <font-awesome-icon icon="heart" style="color: #F596AA;"/>
                        <span> {{ item.like }} </span>
                        &nbsp;&nbsp;&nbsp;
                        <font-awesome-icon icon="comments"/>
                        <span> {{ item.comments }} </span>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
        <el-row style="background-color: white;margin-top: 30px">
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

    .digest {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
    }

    .post {
        width: auto;
        height: auto;
        min-height: 170px;
        max-width: 100%;
        max-height: 200px;
    }
</style>
