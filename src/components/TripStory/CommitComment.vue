<template>
    <el-row style="padding: 15px;height: 104.58px;position: relative;border-bottom: 1px solid #eee">
        <el-col :span="3" style="padding: 10px;">
            <img src="/static/img/avatarTest.jpg" alt="头像"  class="avatar">
        </el-col>
        <el-col :span="18" style="padding: 10px;">
            <el-input
                    type="textarea"
                    placeholder="请输入内容"
                    v-model="userComment">
            </el-input>
        </el-col>
        <el-col :span="3">
            <br>
            <el-button type="primary" size="small">
                发表评论
            </el-button>
        </el-col>
    </el-row>
</template>

<script>
export default {
  name: 'CommitComment',
  data () {
    return {
      userComment: ''
    }
  }
}
</script>

<style scoped>
    .avatar {
        width: 100%;height: 100%;border-radius: 50%;display: block;
        border: 2px solid cornflowerblue;
    }
</style>
