<template>
    <div style="text-align: left;width: 1000px;margin: auto;">
        <div style="position: relative; width: 1000px; height: 400px;">
            <img src="/static/img/bg_gray.jpg" alt="bg" style="width: 1000px; height: 400px;"/>
            <div style="position: absolute; top: 145px;left: 0;
            width: 1000px;text-align: center;font-size: 25px">
                <p>是不是曾经因为自己一个人，放弃了一次旅行？</p>
                <br/>
                <p>帮你寻找那个和你契合的旅行伙伴</p>
            </div>
        </div>
        <br/>
        <el-row type="flex" justify="center">
            <el-col :span="4" :offset="20">
                <router-link to="/TripColleague/new">
                    <el-button type="danger" icon="el-icon-edit">发起旅行</el-button>
                </router-link>
            </el-col>
        </el-row>
        <br/>
        <el-row :gutter="20">
            <colleague-item :info="item" v-for="(item,index) in colleagueDetail" :key="index"
                            v-if="index >= (colleaguePage - 1) * 6 && index < (colleaguePage * 6)"
            />
        </el-row>

        <el-row style="background-color: white;margin-top: 30px;text-align: center">
            <el-col :span="24">
                <el-pagination
                        :current-page.sync="colleaguePage"
                        :page-size="6"
                        layout="total, prev, pager, next"
                        :total="colleagueDetail.length">
                </el-pagination>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import colleagueItem from './colleagueItem'

export default {
  name: 'TripColleague',
  components: {
    colleagueItem
  },
  data () {
    return {
      msg: 'TripColleague',
      colleaguePage: 1,
      colleagueDetail: [
        {
          img: '/static/img/TripColleague/post1.jpg',
          age: 18,
          school: 'XX大学',
          destination: '北京',
          hobby: '吃',
          time: 1551967408
        }, {
          img: '/static/img/TripColleague/post2.jpg',
          age: 18,
          school: 'XX大学',
          destination: '北京',
          hobby: '吃',
          time: 1551967408
        }, {
          img: '/static/img/TripColleague/post3.jpg',
          age: 18,
          school: 'XX大学',
          destination: '北京',
          hobby: '吃',
          time: 1551967408
        },
        {
          img: '/static/img/TripColleague/post1.jpg',
          age: 18,
          school: 'XX大学',
          destination: '北京',
          hobby: '吃',
          time: 1551967408
        }, {
          img: '/static/img/TripColleague/post2.jpg',
          age: 18,
          school: 'XX大学',
          destination: '北京',
          hobby: '吃',
          time: 1551967408
        }, {
          img: '/static/img/TripColleague/post3.jpg',
          age: 18,
          school: 'XX大学',
          destination: '北京',
          hobby: '吃',
          time: 1551967408
        },
        {
          img: '/static/img/TripColleague/post1.jpg',
          age: 18,
          school: 'XX大学',
          destination: '北京',
          hobby: '吃',
          time: 1551967408
        }, {
          img: '/static/img/TripColleague/post2.jpg',
          age: 18,
          school: 'XX大学',
          destination: '北京',
          hobby: '吃',
          time: 1551967408
        }, {
          img: '/static/img/TripColleague/post3.jpg',
          age: 18,
          school: 'XX大学',
          destination: '北京',
          hobby: '吃',
          time: 1551967408
        },
        {
          img: '/static/img/TripColleague/post1.jpg',
          age: 18,
          school: 'XX大学',
          destination: '北京',
          hobby: '吃',
          time: 1551967408
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
