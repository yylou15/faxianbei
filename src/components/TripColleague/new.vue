<template>
    <div style="height: 100%;background: white">
        <el-row style="height: 100%;">
            <el-col :span="10" id="left_bg"></el-col>
            <el-col :span="12" :offset="2" style="height: 100%;display: flex;flex-direction: column;justify-content: center;">
                <div style="">123</div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  name: 'newTripColleague',
  data () {
    return {
      newColleaguePage: 1,
      newColleague: {
        name: '',
        age: '',
        school: '',
        destination: '',
        time: '',
        hobby: '',
        questions: [
          ''
        ]
      }
    }
  },
  methods: {
    createColleague () {
      this.$notify({
        title: '成功',
        message: '发布旅行成功！',
        type: 'success'
      })
    }
  }
}
</script>

<style scoped>
    #left_bg {
        height: 100%;
        background: url("/static/img/bg_colleague.jpg") no-repeat;
        background-size: 100% 100%;
    }

    #logo_header {
        height: auto;
        width: 220px;
        margin-top: -76px;
        background: white;
        padding: 20px;
    }
</style>

<style>
    html, body, #app {
        height: 100%;
    }

    .mainWrapper {
        height: 100%;
        padding: 60px 0 0;
    }
</style>
