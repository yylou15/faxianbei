<template>
    <el-row class="head grid-content" style="border-bottom: solid 1px #e6e6e6;min-width: 1000px;background-color: white">
        <el-col :span="3">
            <a href="/" style="display:block;margin-top: 4px"><img src="/static/img/new_logo.png" alt="LEO" style="width: 50px;" class="menu-logo"></a>
        </el-col>
        <el-col :span="10">
            <el-menu :default-active="activeIndex" router class="el-menu-demo menu" mode="horizontal">
                <el-menu-item v-for="(item,i) in headMenu" :key="i" :index="item.route" style="width: 25%">
                    {{item.caption}}
                </el-menu-item>
            </el-menu>
        </el-col>
        <el-col :span="4" style="padding: auto;line-height: 60px">
            <i class="el-icon-info"></i>
            &nbsp;&nbsp;<a href="#">登录</a>&nbsp;&nbsp;/&nbsp;&nbsp;<a href="#">注册</a>
        </el-col>
        <el-col :span="5" style="padding: 10px;">
            <el-input
                    class="bg-purple-dark"
                    placeholder="请输入内容"
                    prefix-icon="el-icon-search"
                    v-model="searchKey">
            </el-input>
        </el-col>
        <el-col :span="1" style="padding: 20px;">
            <i class="el-icon-message menu-icon"></i>
        </el-col>
        <el-col :span="1" style="padding: 20px;">
            <i class="el-icon-bell menu-icon"></i>
        </el-col>
    </el-row>
</template>

<script>
export default {
  name: 'MyComponent',
  data () {
    return {
      activeIndex: this.$route.path,
      headMenu: [
        {
          caption: '旅行视频',
          route: '/TripVideo'
        },
        {
          caption: '旅行故事',
          route: '/TripStory'
        },
        {
          caption: '来一场旅行',
          route: '/GetOneTrip'
        },
        {
          caption: '旅行同行',
          route: '/TripColleague'
        }
      ],
      searchKey: ''
    }
  },
  // created: () => {
  //   console.log(this.$route)
  // },
  methods: {
    handleSelect (ent) {

    }
  }

}
</script>

<style scoped>
.head{
    width: 100%;
    /*padding: 15px;*/
    position: fixed;
    z-index: 999;
}
.menu-logo{
    cursor: pointer;
}
.menu-icon{
    cursor: pointer;
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
menu{
}
</style>
