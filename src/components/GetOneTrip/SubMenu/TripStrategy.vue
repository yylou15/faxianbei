<template>
    <div>
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
            <NoteItem></NoteItem>
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
          postUrl: 'file:///C:/Users/lou/Documents/Tencent%20Files/1207862938/FileRecv/%E7%95%8C%E9%9D%A2%E5%8E%9F%E5%9E%8B%EF%BC%88%E9%83%A8%E5%88%86%E4%BA%A4%E4%BA%92%EF%BC%89%E4%BF%AE%E8%AE%A22.28/images/%E6%97%85%E6%B8%B8%E6%94%BB%E7%95%A5/u360.png',
          caption: '长沙',
          abstract: '这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要',
          time: '2019.02.13',
          views: 220,
          comments: 120,
          noteId: 2
        },
        {
          postUrl: 'file:///C:/Users/lou/Documents/Tencent%20Files/1207862938/FileRecv/%E7%95%8C%E9%9D%A2%E5%8E%9F%E5%9E%8B%EF%BC%88%E9%83%A8%E5%88%86%E4%BA%A4%E4%BA%92%EF%BC%89%E4%BF%AE%E8%AE%A22.28/images/%E6%97%85%E6%B8%B8%E6%94%BB%E7%95%A5/u360.png',
          caption: '长沙',
          abstract: '这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要',
          time: '2019.02.13',
          views: 220,
          comments: 120,
          noteId: 3
        },
        {
          postUrl: 'file:///C:/Users/lou/Documents/Tencent%20Files/1207862938/FileRecv/%E7%95%8C%E9%9D%A2%E5%8E%9F%E5%9E%8B%EF%BC%88%E9%83%A8%E5%88%86%E4%BA%A4%E4%BA%92%EF%BC%89%E4%BF%AE%E8%AE%A22.28/images/%E6%97%85%E6%B8%B8%E6%94%BB%E7%95%A5/u360.png',
          caption: '长沙',
          abstract: '这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要',
          time: '2019.02.13',
          views: 220,
          comments: 120,
          noteId: 4
        },
        {
          postUrl: 'file:///C:/Users/lou/Documents/Tencent%20Files/1207862938/FileRecv/%E7%95%8C%E9%9D%A2%E5%8E%9F%E5%9E%8B%EF%BC%88%E9%83%A8%E5%88%86%E4%BA%A4%E4%BA%92%EF%BC%89%E4%BF%AE%E8%AE%A22.28/images/%E6%97%85%E6%B8%B8%E6%94%BB%E7%95%A5/u360.png',
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
        margin: 0 auto;
    }

    .container-wrapper {
        width: 1000px;
        margin: 100px auto;
        background: white;
        padding: 25px;
    }
</style>
