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
  name: 'newTripColleague'
}
</script>

<style scoped>
    #left_bg {
        height: 100%;
        background: url("/static/img/bg_colleague.jpg") no-repeat;
        background-size: 100% 100%;
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
