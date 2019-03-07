<template>
    <div>
        <el-row v-for="(item,index) in list" :key="index" v-if="index >= (currentPage1-1) * 5 && index < (currentPage1 * 5)" style="padding: 15px;height: 134.58px;position: relative;border-bottom: 1px solid #eee">
            <el-col :span="3" style="padding: 10px;">
                <img src="/static/img/avatarTest.jpg" alt="头像"  class="avatar">
            </el-col>
            <el-col :span="21" style="padding: 10px;">
                <span style="color: #bbb;">{{item.username}}</span>
                <br>
                <p>{{item.content}}</p>
                <div style="color: #bbb;font-size: 8px;">
                    <el-row>
                        <el-col :span="1">
                            第{{index+1}}
                        </el-col>
                        <el-col :span="6" offset="1">
                            {{item.from}}
                        </el-col>
                        <el-col :span="8">
                            {{item.time}}
                        </el-col>
                        <el-col :span="4" offset="4">
                            <!--<span class="reply">回复</span>-->
                        </el-col>
                    </el-row>
                </div>
            </el-col>
        </el-row>
        <el-pagination
                layout="total,prev, pager, next"
                :current-page.sync="currentPage1"
                :total="list.length"
                :page-size="5">
        </el-pagination>
    </div>
</template>

<script>
export default {
  name: 'CommentItem',
  props: ['list'],
  data () {
    return {
      currentPage1: '1'
    }
  }

}
</script>

<style scoped>
    .avatar {
        width: 100%;height: 100%;border-radius: 50%;display: block;
        border: 2px solid cornflowerblue;
    }

    .reply {
        cursor: pointer;
    }
</style>
