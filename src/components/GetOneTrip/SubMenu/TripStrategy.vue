<template>
    <div>
        <div class="bg">
            <img src="/static/img/TripStrategy/nav.png" alt="" width="100%">
        </div>
        <div class="head-wrapper">
            <h1>这里有你想要的旅行笔记</h1>
            <br><br>
            <el-row>
                <el-col :span="20">
                    <el-input
                            placeholder="请输入内容"
                            v-model="searchInput"
                            clearable>
                    </el-input>
                </el-col>
                <el-col :span="4">
                    <el-button icon="el-icon-search" circle type="primary"></el-button>
                </el-col>
            </el-row>
        </div>
        <div class="container-wrapper">
            <NoteItem :list="noteCaptionList"></NoteItem>
        </div>
    </div>

</template>

<script>
import NoteItem from './TripStrategy/NoteItem'
export default {
  name: 'TripStrategy',
  components: {NoteItem},
  data: function () {
    return {
      searchInput: '',
      noteCaptionList: [
        {
          postUrl: '/static/img/TripStrategy/post1.png',
          caption: '长沙',
          abstract: '这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要',
          time: '2019.02.13',
          views: 220,
          comments: 120,
          noteId: 2
        },
        {
          postUrl: '/static/img/TripStrategy/post2.jpg',
          caption: '长沙',
          abstract: '这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要',
          time: '2019.02.13',
          views: 220,
          comments: 120,
          noteId: 3
        },
        {
          postUrl: '/static/img/TripStrategy/post3.jpg',
          caption: '长沙',
          abstract: '这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要',
          time: '2019.02.13',
          views: 220,
          comments: 120,
          noteId: 4
        },
        {
          postUrl: '/static/img/TripStrategy/post3.jpg',
          caption: '长沙',
          abstract: '这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要',
          time: '2019.02.13',
          views: 220,
          comments: 120,
          noteId: 5
        }
      ]
    }
  }
}
</script>

<style scoped>
    .head-wrapper {
        width: 500px;
        margin: 200px auto;
        padding: 100px 0;
    }

    .container-wrapper {
        width: 1000px;
        margin: -150px auto;
        background: white;
        padding: 25px;
    }
    .bg{
        position: absolute;
        width: 100%;
        top: 62px;
        left: 0;
    }
</style>
