<template>
    <div style="height: 100%;background: white">
        <el-row style="height: 100%;">
            <el-col :span="10" id="left_bg"></el-col>
            <el-col :span="10" :offset="2"
                    style="height: 100%;display: flex;flex-direction: column;justify-content: center;">
                <div style="border: 1px solid lightgray;border-radius:5px;padding:0 20px">
                    <img id="logo_header" alt="" src="/static/img/logo1.png"/>
                    <br/>
                    <el-form ref="form" :model="newColleague" label-width="80px">
                        <div v-show="newColleaguePage === 1">
                            <el-form-item label="姓名">
                                <el-input v-model="newColleague.name"/>
                            </el-form-item>
                            <el-form-item label="年龄">
                                <el-input v-model="newColleague.age"/>
                            </el-form-item>
                            <el-form-item label="在读院校">
                                <el-input v-model="newColleague.school"/>
                            </el-form-item>
                            <el-form-item label="旅行地点">
                                <el-input v-model="newColleague.destination"/>
                            </el-form-item>
                            <el-form-item label="旅行时间">
                                <el-date-picker type="date" placeholder="选择旅行日期" v-model="newColleague.time"
                                                style="width: 100%;" value-format="timestamp"/>
                            </el-form-item>
                            <el-form-item label="兴趣爱好">
                                <el-input v-model="newColleague.hobby"/>
                            </el-form-item>
                            <el-button @click="newColleaguePage = 2">下一步</el-button>
                        </div>
                        <div v-show="newColleaguePage === 2">
                            <el-form-item :label="'问题' + (index + 1)" v-for="(item, index) in newColleague.questions" :key="index">
                                <el-input
                                        type="textarea"
                                        :autosize="{ maxRows: 4}"
                                        placeholder="请输入内容"
                                        :value="item">
                                </el-input>
                            </el-form-item>

                            <el-button @click="newColleaguePage = 1">上一步</el-button>
                            <el-button @click="newColleague.questions.push('')">增加问题</el-button>
                            <el-button type="warning" @click="newColleague.questions.pop()">删除问题</el-button>
                            <el-button type="primary" @click="createColleague()">发布旅行</el-button>
                        </div>
                    </el-form>
                    <br/>
                </div>
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
