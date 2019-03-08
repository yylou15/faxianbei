<template>
    <div style="text-align: left;width: 1000px;margin: auto;">
        <div style="position: relative; width: 1000px; height: 300px;">
            <img src="/static/img/bg_gray.jpg" alt="bg" style="width: 1000px; height: 300px;"/>
            <div style="position: absolute; top: 65px;left: 0;
            width: 1000px;text-align: center;font-size: 25px">
                <p>在LEO</p>
                <br/>
                <p>发现身边的美景</p>
                <br/>
                <p>发现更大的世界</p>
            </div>
        </div>
        <el-row style="line-height: 40px;background-color: white;width: 1000px;margin: 0 auto">
            <el-menu :default-active="activeSubIndex" router class="el-menu-demo menu" mode="horizontal">
                <el-menu-item index="/TripVideo/latest">
                    最新推荐
                </el-menu-item>
                <el-submenu index="/TripVideo/hot">
                    <template slot="title">热门排行</template>
                    <el-menu-item index="/TripVideo/hot/week">本周</el-menu-item>
                    <el-menu-item index="/TripVideo/hot/month">本月</el-menu-item>
                    <el-menu-item index="/TripVideo/hot/season">近三月</el-menu-item>
                </el-submenu>
            </el-menu>
        </el-row>

        <router-view/>
    </div>
</template>

<script>

export default {
  name: 'index',
  data () {
    return {
      activeSubIndex: this.$route.path
    }
  }
}
</script>

<style scoped>
</style>
