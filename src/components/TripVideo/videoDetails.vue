<template>
    <div style="text-align: left;width: 1000px;margin: auto;">
        <br/>
        <br/>
        <h1>{{videoDetail.header}}</h1>
        <br/>
        <iframe height='600' width='1000' :src='videoDetail.videoUrl' frameborder="0 'allowfullscreen'"></iframe>
        <el-row style="font-size: 20px;padding: 5px">
            <el-col :span="12">
                <div>
                    <font-awesome-icon icon="heart" style="color: #F596AA;"/>
                    <span> {{videoDetail.like}} </span>
                </div>
            </el-col>
            <el-col :span="12" style="text-align: right">
                <div>
                    <font-awesome-icon icon="comments"/>
                    <span> {{videoDetail.comments.length}} </span>
                </div>
            </el-col>
        </el-row>
        <br/>
        <el-row>
            <el-col :span="20" :offset="2">
                <p style="font-size: 14px" v-html="videoDetail.introduction"></p>
            </el-col>
        </el-row>
        <br/>
        <br/>
        <br/>
        <el-col style="text-align: left;padding: 20px;">
            <span>{{videoDetail.comments.length}}条评论</span>
            <el-tabs v-model="activeName">
                <el-tab-pane label="全部评论" name="allComment">
                    <CommitComment></CommitComment>
                    <CommentItem :list="videoDetail.comments"></CommentItem>
                </el-tab-pane>
            </el-tabs>
        </el-col>
    </div>

</template>

<script>
import CommentItem from '../utils/CommentItem'
import CommitComment from '../utils/CommitComment'

export default {
  name: 'videoDetails',
  components: {
    CommentItem, CommitComment
  },
  data () {
    return {
      activeName: 'allComment',
      videoDetail: {
        header: '',
        videoUrl: '',
        introduction: '',
        like: '123',
        comments: [
          {
            username: '用户名123',
            content: '评论内容1241',
            from: '来自Android客户端',
            time: '2018-1-5 20:19',
            likes: 0,
            dislikes: 0
          },
          {
            username: '用户名',
            content: '评论内容',
            from: '来自Android客户端',
            time: '2018-1-5 20:19',
            likes: 0,
            dislikes: 0
          },
          {
            username: '用户名',
            content: '评论内容',
            from: '来自Android客户端',
            time: '2018-1-5 20:19',
            likes: 0,
            dislikes: 0
          },
          {
            username: '用户名',
            content: '评论内容',
            from: '来自Android客户端',
            time: '2018-1-5 20:19',
            likes: 0,
            dislikes: 0
          },
          {
            username: '用户名',
            content: '评论内容',
            from: '来自Android客户端',
            time: '2018-1-5 20:19',
            likes: 0,
            dislikes: 0
          },
          {
            username: '用户名',
            content: '评论内容',
            from: '来自Android客户端',
            time: '2018-1-5 20:19',
            likes: 0,
            dislikes: 0
          }
        ]
      }
    }
  },
  mounted () {
    console.log(this.$route.params.id)
    this.axios.get('/static/TripVideo/' + this.$route.params.id + '.json').then((response) => {
      let detail = response.data
      this.videoDetail.header = detail.caption
      this.videoDetail.videoUrl = detail.videoUrl
      this.videoDetail.introduction = detail.content
      this.videoDetail.like = detail.like
    }).catch((response) => {
      console.log(response)
    })
    scrollTo(0, 0)
  }
}
</script>

<style scoped>
    .content {
        background-color: #e5e5e5;
        min-height: 200px;
        padding: 15px;
    }

    .authorAvatar {
        display: inline-block;
        height: 50px;
        width: 50px;
        border: 2px solid royalblue;
        border-radius: 50%;
    }

    .video-js .vjs-big-play-button{}
</style>
