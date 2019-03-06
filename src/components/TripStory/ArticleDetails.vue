<template>
    <el-row style="width: 1000px;background-color: white;margin: 0 auto">
        <el-col :span="16" style="text-align: left;padding: 20px;">
            <h1>{{this.$route.params.aid}}{{articleDetails.caption}}</h1>
            <p style="color: #ccc;">{{articleDetails.author}} {{articleDetails.category}}</p>
            <br>
            <p class="content">{{articleDetails.content}}</p>
            <div style="text-align: center">
                <router-link :to='String(parseInt(this.$route.params.aid) - 1)' v-if="this.$route.params.aid>1">上一篇</router-link>
                &nbsp;&nbsp;
                <!--<router-link >返回</router-link>-->
                &nbsp;&nbsp;
                <router-link :to='String(parseInt(this.$route.params.aid) + 1)'>下一篇</router-link>
            </div>
            <br>
            <br>
            <span>{{articleDetails.comments.length}}条评论</span>
            <el-tabs v-model="activeName">
                <el-tab-pane label="全部评论" name="allComment">
                    <CommitComment></CommitComment>
                    <CommentItem :list="articleDetails.comments"></CommentItem>
                </el-tab-pane>
            </el-tabs>
        </el-col>
        <el-col :span="8" style="padding: 50px 15px;">
            <el-row>
                <el-rol :span="8">
                    <img src="/static/img/avatarTest.jpg" alt="头像" class="authorAvatar">
                </el-rol>
                <el-rol :span="8">
                    <p>作者：{{articleDetails.author}}</p>
                    <el-collapse v-model="intoActiveNames" @change="handleChange">
                        <el-collapse-item title="作者简介" name="1">
                            {{articleDetails.authorIntroduction}}
                        </el-collapse-item>
                    </el-collapse>
                </el-rol>
                <br><br>
                <el-rol :span="8">
                    <el-button @click="handleSubscribeClick" v-if="subscribed === false" type="warning">
                        <i class="el-icon-plus"></i>关注
                    </el-button>
                    <el-button @click="handleUnSubscribeClick" v-else type="info">
                        取消关注
                    </el-button>
                </el-rol>
            </el-row>
        </el-col>
    </el-row>
</template>

<script>
import CommentItem from '../utils/CommentItem'
import CommitComment from '../utils/CommitComment'
export default {
  name: 'ArticleDetails',
  components: {
    CommentItem, CommitComment
  },
  data () {
    return {
      id: '',
      //  文章详细信息
      articleDetails: {
        caption: '文章标题',
        content: '内容',
        category: '分类',
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
        ],
        author: '小明',
        authorIntroduction: '简化流程：设计简洁直观的操作流程；\n' +
            '清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；\n' +
            '帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。',
        authorAvatar: 'http://xxxxx'
      },
      // 评论
      activeName: 'allComment',
      //    作者信息
      intoActiveNames: '1',
      //    已关注
      subscribed: false
    }
  },
  methods: {
    handleRouterLinkClick (opt) {
      switch (opt) {
        case 0:
          this.$router.push(
            '/TripStory/details/' + ++this.id
          )
          break
        case 1:
          this.$router.go(-1)
          break
        case 2:
          this.$router.push(
            '/TripStory/details/' + --this.id
          )
          break
      }
    },
    handleSubscribeClick () {
      this.subscribed = true
      this.$notify({
        message: '关注成功',
        type: 'success'
      })
    },
    handleUnSubscribeClick () {
      this.$confirm('确认取消关注吗', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.subscribed = false
        this.$notify({
          type: 'success',
          message: '取消关注!'
        })
      }).catch(() => {
      })
    }
  },
  mounted () {
    this.id = this.$route.params.aid
    console.log(this)
  //    查询文章详细信息
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
</style>
