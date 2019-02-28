<template>
    <el-row style="width: 1000px;background-color: white;margin: 0 auto">
        <el-col :span="16" style="text-align: left;padding: 20px;">
            <h1>文章{{this.$route.params.aid}}的标题</h1>
            <p style="color: #ccc;">作者 分类</p>
            <br>
            <p class="content">正文</p>
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
                    评论
                </el-tab-pane>
            </el-tabs>
        </el-col>
        <el-col :span="8">
        </el-col>
    </el-row>
</template>

<script>
export default {
  name: 'ArticleDetails',
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
            username: '用户名',
            content: '评论内容',
            from: '来自',
            time: '2018-1-5 20:19',
            likes: 0,
            dislikes: 0
          }
        ],
        author: '作者',
        authorIntroduction: '个人介绍',
        authorAvatar: 'http://xxxxx'
      },
      // 评论
      activeName: 'allComment'
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
</style>
