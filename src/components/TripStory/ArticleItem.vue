<template>
    <div >
        <el-container class="wrapper hover-shadow" v-for="(item,index) in list" :key="index" v-if="item.type === type">
            <el-aside width="373px" style="overflow: hidden;">
                <img :src="item.postUrl" alt="封面图片" class="post" @click="handleAsideClick(item.articleId)">
            </el-aside>
            <el-main class="main">
                <span class="caption" @click="handleAsideClick(item.articleId)">{{item.caption}}</span>
                <p class="digest" @click="handleAsideClick(item.articleId)">{{item.digest}}</p>
                <div class="origin">
                    <img :src="item.originAvatar" alt="来源" class="originImg">
                    &nbsp;&nbsp;<span class="originText">{{item.origin}}</span>
                </div>
            </el-main>
        </el-container>

        <!--@size-change="handleSizeChange"-->
        <!--@current-change="handleCurrentChange"-->
        <el-row style="background-color: white;margin-top: 30px;padding: 10px">
            <el-col :span="24">
                <el-pagination
                        :current-page.sync="currentPage1"
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
  name: 'ArticleItem',
  props: ['list', 'type'],
  data () {
    return {
      //    分页
      currentPage1: 1
    }
  },
  methods: {
    handleAsideClick (id) {
      console.log(id)
      this.$router.push('/TripStory/details/' + id)
      console.log(this.$route)
    }
  }
}
</script>

<style scoped>
.wrapper{
    height: 247px;
    width: 1000px;
    margin-top: 50px;
    text-align: left;
}
.post{
    width: 100%;
    height: 100%;
}
.main{
    /*padding: 5px;*/
    background-color: white;
    position: relative;
}

.caption {
    font-weight: bold;font-size: 1.6em;
}

.digest {
    color: #ccc;
    max-height: 120px;
    overflow-y: hidden;
    padding: 10px;
    line-height: 2em;
}

.origin {
    position: absolute;
    bottom: 20px;
    left: 20px;
}

.originImg {
    display: inline-block;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    float: left;
}

.originText {
    color: #aaa;
    line-height: 30px;
}
.post,.caption,.origin,.digest{
    cursor: pointer;
}

.hover-shadow {
    transition: transform .3s ease-in-out, box-shadow .3s cubic-bezier(.47, 0, .745, .715), border .3s linear .1s;
}

.hover-shadow:hover {
    box-shadow: 0 10px 50px rgba(51, 51, 51, .25);
    -webkit-transform: translateY(-10px);
    -moz-transform: translateY(-10px);
    transform: translateY(-10px)
}
</style>
