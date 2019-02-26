<template>
    <el-row class="head grid-content bg-purple-dark">
        <el-col :span="4" style="background-color: red">
            <img src="https://avatars0.githubusercontent.com/u/32712286?s=460&v=4" alt="LEO" style="width: 100%;height: 70px">
        </el-col>
        <el-col :span="3">

        </el-col>
    </el-row>
</template>

<script>
export default {
  name: 'MyComponent',
  data () {
    return {
      msg: '1214'
    }
  }
}
</script>

<style scoped>
.head{
    width: 100%;
    height: 100px;
    padding: 15px;
}
.el-row {
    margin-bottom: 20px;
}
.el-row:last-child {
     margin-bottom: 0;
 }
.el-col {
    border-radius: 4px;
}
.bg-purple-dark {
    background: #99a9bf;
}
.bg-purple {
    background: #d3dce6;
}
.bg-purple-light {
    background: #e5e9f2;
}
.grid-content {
    border-radius: 4px;
    min-height: 36px;
}
.row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
}
</style>
