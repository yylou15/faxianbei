<template>
    <div>
        <el-container class="wrapper hover-shadow" v-for="(item,index) in list" :key="index"
                      v-if="index >= (currentPage-1) * 5 && index < (currentPage * 5)">
            <el-aside width="373px" style="overflow: hidden;">
                <img :src="item.postUrl" alt="封面图片" class="post" @click="handleAsideClick(item.noteId)">
            </el-aside>
            <el-main class="main">
                <span class="caption" @click="handleAsideClick(item.noteId)">{{item.caption}}{{index}}</span>
                <p class="content" @click="handleAsideClick(item.noteId)">{{item.digest}}</p>
                <div class="publish" @click="handleAsideClick(item.noteId)">
                    发布时间：{{ item.time | formatDate }}
                </div>
                <div class="status">
                    <font-awesome-icon icon="eye"/>
                    <span> {{ item.views }} </span>
                    &nbsp;&nbsp;&nbsp;
                    <font-awesome-icon icon="comments"/>
                    <span> {{ item.comments.length }} </span>
                </div>
            </el-main>
        </el-container>

        <el-row style="background-color: white;margin-top: 30px;text-align: center">
            <el-col :span="24">
                <el-pagination
                        :current-page.sync="currentPage"
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
  name: 'NoteItem',
  props: ['list'],
  data () {
    return {
      currentPage: 1
    }
  },
  methods: {
    handleAsideClick (id) {
      this.$router.push('/TripStrategy/' + id)
    }
  }
}
</script>

<style scoped>
    .post,.caption,.publish,.content{
        cursor: pointer;
    }
    .wrapper {
        height: 247px;
        width: 100%;
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
        max-height: 120px;
        overflow-y: hidden;
        padding: 10px;
        line-height: 2em;
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
