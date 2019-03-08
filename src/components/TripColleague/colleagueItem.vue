<template>
    <el-col :span="8" style="text-align: center;padding: 20px">
        <div style="width: 300px;margin: auto" class="info hover-shadow">
            <img src="/static/img/bg1.jpg" alt="picture"
                 style="max-width: 250px;max-height: 200px;padding-top: 20px;">
            <br/>
            <br/>
            <h2>年龄&nbsp;&nbsp;：{{info.age}}</h2>
            <h2>在读院校：{{info.school}}</h2>
            <h2>旅游地点：{{info.destination}}</h2>
            <h2>兴趣爱好：{{info.hobby}}</h2>
            <h2>旅行时间：{{info.time | formatDate}}</h2>
            <br/>
            <h2>用户寄语 <i class="el-icon-edit"></i></h2>
            <br/>
        </div>
    </el-col>
</template>

<script>
export default {
  name: 'colleagueItem',
  props: ['info'],
  filters: {
    formatDate (timeStamp) {
      let date = new Date(timeStamp * 1000)
      return date.getFullYear() + '-' +
          (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-' +
          (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate())
    }
  }
}
</script>

<style scoped>
    .info {
        background: white;
    }
</style>
