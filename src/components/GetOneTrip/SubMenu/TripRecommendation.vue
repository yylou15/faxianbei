<template>
    <div>
        <div class="search-bg">
            <div class="search">
                <div class="search-text">
                    我想去
                    <div style="display: inline-block;">
                        <el-input
                                style="display: inline-block;"
                                placeholder="请输入地点"
                                v-model="SearchInput"
                                @focus="drawerMask = true">
                            <i slot="prefix" class="el-input__icon el-icon-search"></i>
                        </el-input>
                    </div>
                    看看
                </div>
                <div class="selectedCityList">
                    <Drawer title="为您推荐城市" width="512" :closable="false" v-model="drawerMask">
                        <el-row>
                            <el-col :span="8" v-for="(item,index) in cityRecommended" :key="index" style="padding: 5px;text-align: center">
                                <el-button @click="handleCityClick(item)" type="primary" plain>{{item}}</el-button>
                            </el-col>
                        </el-row>
                        <br><br><br>
                        <el-row>
                            <el-col :span="8" style="padding: 5px;text-align: center">
                                自由输入：
                            </el-col>
                            <el-col :span="12">
                                <el-input type="text" v-model="SearchInput"></el-input>
                            </el-col>
                        </el-row>
                    </Drawer>
                </div>
            </div>
            <div>
                <el-button type="primary">
                    <i class="el-icon-search">&nbsp;&nbsp;搜索</i>
                </el-button>
            </div>
        </div>
        <br><br><br><br>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="热门旅行地" name="1">
                <el-row>
                    <el-col :span="6" v-for="(item, index) in hotPlaces" :key="index" :offset="index % 3 === 0 ? 1 : 2">
                        <el-card :body-style="{ padding: '0px' }" class="card" shadow="hover">
                            <img src="/static/img/changsha.jpg" class="image">
                            <div style="padding: 14px;">
                                <span>{{item.caption}}</span>
                                <br>
                                <time class="time">出行时间：{{ item.timeStart }} 至 {{ item.timeEnd }}</time>
                                <div class="bottom clearfix">
                                    <span v-for="i in item.tags" :key="i">
                                        <el-tag type="warning">{{ i }}</el-tag>
                                        &nbsp;&nbsp;
                                    </span>
                                    <el-button type="text" class="button">查看详情</el-button>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="高品质旅行" name="2">
                <el-row>
                    <el-col :span="6" v-for="(item, index) in hotPlaces" :key="index" :offset="index % 3 === 0 ? 0 : 2">
                        <el-card :body-style="{ padding: '0px' }" class="card" shadow="hover">
                            <img src="/static/img/changsha.jpg" class="image">
                            <div style="padding: 14px;">
                                <span>{{item.caption}}</span>
                                <br>
                                <time class="time">出行时间：{{ item.timeStart }} 至 {{ item.timeEnd }}</time>
                                <div class="bottom clearfix">
                                    <span v-for="i in item.tags" :key="i">
                                        <el-tag type="warning">{{ i }}</el-tag>
                                        &nbsp;&nbsp;
                                    </span>
                                    <el-button type="text" class="button">查看详情</el-button>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="多人行" name="3">
                <el-row>
                    <el-col :span="6" v-for="(item, index) in hotPlaces" :key="index" :offset="index % 3 === 0 ? 0 : 2">
                        <el-card :body-style="{ padding: '0px' }" class="card" shadow="hover">
                            <img src="/static/img/changsha.jpg" class="image">
                            <div style="padding: 14px;">
                                <span>{{item.caption}}</span>
                                <br>
                                <time class="time">出行时间：{{ item.timeStart }} 至 {{ item.timeEnd }}</time>
                                <div class="bottom clearfix">
                                    <span v-for="i in item.tags" :key="i">
                                        <el-tag type="warning">{{ i }}</el-tag>
                                        &nbsp;&nbsp;
                                    </span>
                                    <el-button type="text" class="button">查看详情</el-button>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="情侣行" name="4">
                <el-row>
                    <el-col :span="6" v-for="(item, index) in hotPlaces" :key="index" :offset="index % 3 === 0 ? 0 : 2">
                        <el-card :body-style="{ padding: '0px' }" class="card" shadow="hover">
                            <img src="/static/img/changsha.jpg" class="image">
                            <div style="padding: 14px;">
                                <span>{{item.caption}}</span>
                                <br>
                                <time class="time">出行时间：{{ item.timeStart }} 至 {{ item.timeEnd }}</time>
                                <div class="bottom clearfix">
                                    <span v-for="i in item.tags" :key="i">
                                        <el-tag type="warning">{{ i }}</el-tag>
                                        &nbsp;&nbsp;
                                    </span>
                                    <el-button type="text" class="button">查看详情</el-button>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
export default {
  name: 'TripRecommendation',
  data () {
    return {
      SearchInput: '',
      value4: false,
      pStyle: {
        fontSize: '16px',
        color: 'rgba(0,0,0,0.85)',
        lineHeight: '24px',
        display: 'block',
        marginBottom: '16px'
      },
      drawerMask: false,
      //    推荐城市
      cityRecommended: [
        '北京', '上海', '广州', '杭州', '深圳', '成都', '西安', '长沙', '武汉'
      ],

      //    分页
      activeName: '1',

      //    热门旅行地
      hotPlaces: [
        {
          id: 1,
          caption: '长沙',
          timeStart: '2018-05-05',
          timeEnd: '2018-05-08',
          tags: [
            '美食', '烟花', '情侣行'
          ]
        },
        {
          id: 2,
          caption: '长沙',
          timeStart: '2018-05-05',
          timeEnd: '2018-05-08',
          tags: [
            '美食', '烟花', '情侣行'
          ]
        },
        {
          id: 3,
          caption: '长沙',
          timeStart: '2018-05-05',
          timeEnd: '2018-05-08',
          tags: [
            '美食', '烟花', '情侣行'
          ]
        },
        {
          id: 4,
          caption: '长沙',
          timeStart: '2018-05-05',
          timeEnd: '2018-05-08',
          tags: [
            '美食', '烟花', '情侣行'
          ]
        },
        {
          id: 5,
          caption: '长沙',
          timeStart: '2018-05-05',
          timeEnd: '2018-05-08',
          tags: [
            '美食', '烟花', '情侣行'
          ]
        }
      ]
    }
  },
  computed: {
    currentDate: {
      get () {
        let date = new Date()
        return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDay()
      }
    }
  },
  methods: {
    handleCityClick (city) {
      this.SearchInput = city
      this.drawerMask = false
    }
  }
}
</script>

<style scoped>
    .time {
        font-size: 13px;
        color: #999;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }

    .image {
        width: 100%;
        display: block;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }
    .demo-drawer-profile{
        font-size: 14px;
    }
    .demo-drawer-profile .ivu-col{
        margin-bottom: 12px;
    }
    .search {
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        /*margin-top: 60px;*/
    }

    .search-text {
        height: 50px;
        line-height: 50px;
        font-size: 20px;
        font-weight: bold;
    }

    .selectedCityList {
    }

    .search-bg {
        position: relative;
        height: 375px;
        background-clip: padding-box;
        background: url("/static/img/bg1.jpg")  top;
    }

    .card {
        margin-top: 30px
    }
</style>
