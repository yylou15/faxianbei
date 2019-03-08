<template>
    <el-row class="head grid-content" style="height: 60px;border-bottom: solid 1px #e6e6e6;min-width: 1000px;width: 100%;float: left;background-color: white">
        <el-col :span="3">
            <a href="/" style="display:block;margin-top: 4px;padding-top: 5px"><img src="/static/img/new_logo.png" alt="LEO" style="width: 100px;height: 35px;" class="menu-logo"></a>
        </el-col>
        <el-col :span="10">
            <el-menu :default-active="activeIndex" router class="el-menu-demo menu" mode="horizontal">
                <el-menu-item v-for="(item,i) in headMenu" :key="i" v-if="!item.subtitle" :index="item.route" style="width: 25%">
                    {{item.caption}}
                </el-menu-item>

                <el-submenu v-for="(item,i) in headMenu" :key="i" v-if="item.subtitle" style="width: 25%" index="GetOneTrip">
                    <template slot="title">{{item.caption}}</template>
                    <el-menu-item v-for="(menuItem,index) in item.subtitle" :key="index"  :index="menuItem.route">
                        {{menuItem.caption}}
                    </el-menu-item>
                </el-submenu>
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
            <i class="el-icon-message menu-icon" @click="handleMessageClick"></i>
        </el-col>
        <el-col :span="1" style="padding: 20px;">
            <i class="el-icon-bell menu-icon" @click="handleNoticeClick"></i>
        </el-col>
    </el-row>
</template>

<script>
export default {
  name: 'MyComponent',
  data () {
    return {
      activeIndex: this.$route.path.match(/\/.+?(?=\/)/) ? this.$route.path.match(/\/.+?(?=\/)/)[0] : '',
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
          subtitle: [
            {caption: '旅行推荐', route: '/TripRecommendation'},
            {caption: '旅游攻略', route: '/TripStrategy'},
            {caption: '运动旅行', route: '/TripSport'}
          ]
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

    },
    handleMessageClick () {
      this.$alert('暂无新消息', '未读消息', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'info',
            message: `action: ${action}`
          })
        }
      })
    },
    handleNoticeClick () {
      this.$alert('暂无新提示', '提示', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'info',
            message: `action: ${action}`
          })
        }
      })
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
