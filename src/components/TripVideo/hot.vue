<template>
    <div>
        <el-row>
            <el-col :offset="3">
                <el-tabs v-model="activeList" @tab-click="loadList">
                    <el-tab-pane label="本周" name="week"></el-tab-pane>
                    <el-tab-pane label="本月" name="month"></el-tab-pane>
                    <el-tab-pane label="近三月" name="season"></el-tab-pane>
                </el-tabs>
            </el-col>
        </el-row>
        <video-item :list="videoList"></video-item>
    </div>
</template>

<script>
import VideoItem from './videoItem'
export default {
  name: 'hot',
  components: {VideoItem},
  data () {
    return {
      activeList: 'week',
      videoList: []
    }
  },
  methods: {
    loadList () {
      console.log(this.activeList)
      switch (this.activeList) {
        case 'week':
          this.videoList = [
            {
              videoId: 1,
              postUrl: 'http://5b0988e595225.cdn.sohucs.com/images/20171109/f3bedad065494847bc2db5ec17657061.jpeg',
              caption: '一级标题',
              digest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.',
              time: 1551365405,
              like: 123,
              comments: 234
            }, {
              videoId: 2,
              postUrl: 'http://5b0988e595225.cdn.sohucs.com/images/20171109/f3bedad065494847bc2db5ec17657061.jpeg',
              caption: '一级标题',
              digest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.',
              time: 1551365405,
              like: 123,
              comments: 234
            }, {
              videoId: 3,
              postUrl: 'http://5b0988e595225.cdn.sohucs.com/images/20171109/f3bedad065494847bc2db5ec17657061.jpeg',
              caption: '一级标题',
              digest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.',
              time: 1551365405,
              like: 123,
              comments: 234
            }, {
              videoId: 4,
              postUrl: 'http://5b0988e595225.cdn.sohucs.com/images/20171109/f3bedad065494847bc2db5ec17657061.jpeg',
              caption: '一级标题',
              digest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.',
              time: 1551365405,
              like: 123,
              comments: 234
            }, {
              videoId: 5,
              postUrl: 'http://5b0988e595225.cdn.sohucs.com/images/20171109/f3bedad065494847bc2db5ec17657061.jpeg',
              caption: '一级标题',
              digest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.',
              time: 1551365405,
              like: 123,
              comments: 234
            }, {
              videoId: 6,
              postUrl: 'http://5b0988e595225.cdn.sohucs.com/images/20171109/f3bedad065494847bc2db5ec17657061.jpeg',
              caption: '一级标题',
              digest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.',
              time: 1551365405,
              like: 123,
              comments: 234
            }, {
              videoId: 7,
              postUrl: 'http://5b0988e595225.cdn.sohucs.com/images/20171109/f3bedad065494847bc2db5ec17657061.jpeg',
              caption: '一级标题',
              digest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.',
              time: 1551365405,
              like: 123,
              comments: 234
            }, {
              videoId: 8,
              postUrl: 'http://5b0988e595225.cdn.sohucs.com/images/20171109/f3bedad065494847bc2db5ec17657061.jpeg',
              caption: '一级标题',
              digest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.',
              time: 1551365405,
              like: 123,
              comments: 234
            }, {
              videoId: 9,
              postUrl: 'http://5b0988e595225.cdn.sohucs.com/images/20171109/f3bedad065494847bc2db5ec17657061.jpeg',
              caption: '一级标题',
              digest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.',
              time: 1551365405,
              like: 123,
              comments: 234
            }, {
              videoId: 10,
              postUrl: 'http://5b0988e595225.cdn.sohucs.com/images/20171109/f3bedad065494847bc2db5ec17657061.jpeg',
              caption: '一级标题',
              digest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.',
              time: 1551365405,
              like: 123,
              comments: 234
            }, {
              videoId: 11,
              postUrl: 'http://5b0988e595225.cdn.sohucs.com/images/20171109/f3bedad065494847bc2db5ec17657061.jpeg',
              caption: '一级标题',
              digest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.',
              time: 1551365405,
              like: 123,
              comments: 234
            }, {
              videoId: 12,
              postUrl: 'http://5b0988e595225.cdn.sohucs.com/images/20171109/f3bedad065494847bc2db5ec17657061.jpeg',
              caption: '一级标题',
              digest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.',
              time: 1551365405,
              like: 123,
              comments: 234
            }, {
              videoId: 13,
              postUrl: 'http://5b0988e595225.cdn.sohucs.com/images/20171109/f3bedad065494847bc2db5ec17657061.jpeg',
              caption: '一级标题',
              digest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.',
              time: 1551365405,
              like: 123,
              comments: 234
            }, {
              videoId: 14,
              postUrl: 'http://5b0988e595225.cdn.sohucs.com/images/20171109/f3bedad065494847bc2db5ec17657061.jpeg',
              caption: '一级标题',
              digest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.',
              time: 1551365405,
              like: 123,
              comments: 234
            }
          ]
          break
        case 'month':
          this.videoList = [
            {
              videoId: 1,
              postUrl: 'http://5b0988e595225.cdn.sohucs.com/images/20171109/f3bedad065494847bc2db5ec17657061.jpeg',
              caption: '一级标题',
              digest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.',
              time: 1551365405,
              like: 123,
              comments: 234
            }, {
              videoId: 2,
              postUrl: 'http://5b0988e595225.cdn.sohucs.com/images/20171109/f3bedad065494847bc2db5ec17657061.jpeg',
              caption: '一级标题',
              digest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.',
              time: 1551365405,
              like: 123,
              comments: 234
            }, {
              videoId: 3,
              postUrl: 'http://5b0988e595225.cdn.sohucs.com/images/20171109/f3bedad065494847bc2db5ec17657061.jpeg',
              caption: '一级标题',
              digest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.',
              time: 1551365405,
              like: 123,
              comments: 234
            }, {
              videoId: 4,
              postUrl: 'http://5b0988e595225.cdn.sohucs.com/images/20171109/f3bedad065494847bc2db5ec17657061.jpeg',
              caption: '一级标题',
              digest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.',
              time: 1551365405,
              like: 123,
              comments: 234
            }, {
              videoId: 5,
              postUrl: 'http://5b0988e595225.cdn.sohucs.com/images/20171109/f3bedad065494847bc2db5ec17657061.jpeg',
              caption: '一级标题',
              digest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.',
              time: 1551365405,
              like: 123,
              comments: 234
            }, {
              videoId: 6,
              postUrl: 'http://5b0988e595225.cdn.sohucs.com/images/20171109/f3bedad065494847bc2db5ec17657061.jpeg',
              caption: '一级标题',
              digest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.',
              time: 1551365405,
              like: 123,
              comments: 234
            }, {
              videoId: 7,
              postUrl: 'http://5b0988e595225.cdn.sohucs.com/images/20171109/f3bedad065494847bc2db5ec17657061.jpeg',
              caption: '一级标题',
              digest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.',
              time: 1551365405,
              like: 123,
              comments: 234
            }, {
              videoId: 8,
              postUrl: 'http://5b0988e595225.cdn.sohucs.com/images/20171109/f3bedad065494847bc2db5ec17657061.jpeg',
              caption: '一级标题',
              digest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.',
              time: 1551365405,
              like: 123,
              comments: 234
            }, {
              videoId: 9,
              postUrl: 'http://5b0988e595225.cdn.sohucs.com/images/20171109/f3bedad065494847bc2db5ec17657061.jpeg',
              caption: '一级标题',
              digest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.',
              time: 1551365405,
              like: 123,
              comments: 234
            }
          ]
          break
        case 'season':
          this.videoList = [
            {
              videoId: 1,
              postUrl: 'http://5b0988e595225.cdn.sohucs.com/images/20171109/f3bedad065494847bc2db5ec17657061.jpeg',
              caption: '一级标题',
              digest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.',
              time: 1551365405,
              like: 123,
              comments: 234
            }, {
              videoId: 2,
              postUrl: 'http://5b0988e595225.cdn.sohucs.com/images/20171109/f3bedad065494847bc2db5ec17657061.jpeg',
              caption: '一级标题',
              digest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.',
              time: 1551365405,
              like: 123,
              comments: 234
            }, {
              videoId: 3,
              postUrl: 'http://5b0988e595225.cdn.sohucs.com/images/20171109/f3bedad065494847bc2db5ec17657061.jpeg',
              caption: '一级标题',
              digest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.',
              time: 1551365405,
              like: 123,
              comments: 234
            }, {
              videoId: 4,
              postUrl: 'http://5b0988e595225.cdn.sohucs.com/images/20171109/f3bedad065494847bc2db5ec17657061.jpeg',
              caption: '一级标题',
              digest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.',
              time: 1551365405,
              like: 123,
              comments: 234
            }, {
              videoId: 5,
              postUrl: 'http://5b0988e595225.cdn.sohucs.com/images/20171109/f3bedad065494847bc2db5ec17657061.jpeg',
              caption: '一级标题',
              digest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.',
              time: 1551365405,
              like: 123,
              comments: 234
            }, {
              videoId: 6,
              postUrl: 'http://5b0988e595225.cdn.sohucs.com/images/20171109/f3bedad065494847bc2db5ec17657061.jpeg',
              caption: '一级标题',
              digest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.',
              time: 1551365405,
              like: 123,
              comments: 234
            }
          ]
          break
        default:
          break
      }
    }
  },
  mounted () {
    this.loadList()
  }
}
</script>

<style scoped>

</style>
