<template>
    <div style="width: 1000px;margin: 0 auto">
        <video-item :list="videoList"></video-item>
    </div>
</template>

<script>
import VideoItem from './videoList'
export default {
  name: 'latest',
  components: {VideoItem},
  data () {
    return {
      videoList: []
    }
  },
  methods: {
    getLatestVideo: function () {
      this.videoList = [
        {
          videoId: 1,
          postUrl: 'http://5b0988e595225.cdn.sohucs.com/images/20171109/f3bedad065494847bc2db5ec17657061.jpeg',
          caption: '一级标题',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.',
          publishTime: 1551365405,
          like: 123,
          comments: 234
        }, {
          videoId: 2,
          postUrl: 'http://5b0988e595225.cdn.sohucs.com/images/20171109/f3bedad065494847bc2db5ec17657061.jpeg',
          caption: '一级标题',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.',
          publishTime: 1551365405,
          like: 123,
          comments: 234
        }, {
          videoId: 3,
          postUrl: 'http://5b0988e595225.cdn.sohucs.com/images/20171109/f3bedad065494847bc2db5ec17657061.jpeg',
          caption: '一级标题',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.',
          publishTime: 1551365405,
          like: 123,
          comments: 234
        }, {
          videoId: 4,
          postUrl: 'http://5b0988e595225.cdn.sohucs.com/images/20171109/f3bedad065494847bc2db5ec17657061.jpeg',
          caption: '一级标题',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.',
          publishTime: 1551365405,
          like: 123,
          comments: 234
        }, {
          videoId: 5,
          postUrl: 'http://5b0988e595225.cdn.sohucs.com/images/20171109/f3bedad065494847bc2db5ec17657061.jpeg',
          caption: '一级标题',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.',
          publishTime: 1551365405,
          like: 123,
          comments: 234
        }, {
          videoId: 6,
          postUrl: 'http://5b0988e595225.cdn.sohucs.com/images/20171109/f3bedad065494847bc2db5ec17657061.jpeg',
          caption: '一级标题',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.',
          publishTime: 1551365405,
          like: 123,
          comments: 234
        }, {
          videoId: 7,
          postUrl: 'http://5b0988e595225.cdn.sohucs.com/images/20171109/f3bedad065494847bc2db5ec17657061.jpeg',
          caption: '一级标题',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.',
          publishTime: 1551365405,
          like: 123,
          comments: 234
        }, {
          videoId: 8,
          postUrl: 'http://5b0988e595225.cdn.sohucs.com/images/20171109/f3bedad065494847bc2db5ec17657061.jpeg',
          caption: '一级标题',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.',
          publishTime: 1551365405,
          like: 123,
          comments: 234
        }, {
          videoId: 9,
          postUrl: 'http://5b0988e595225.cdn.sohucs.com/images/20171109/f3bedad065494847bc2db5ec17657061.jpeg',
          caption: '一级标题',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.',
          publishTime: 1551365405,
          like: 123,
          comments: 234
        }, {
          videoId: 10,
          postUrl: 'http://5b0988e595225.cdn.sohucs.com/images/20171109/f3bedad065494847bc2db5ec17657061.jpeg',
          caption: '一级标题',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.',
          publishTime: 1551365405,
          like: 123,
          comments: 234
        }, {
          videoId: 11,
          postUrl: 'http://5b0988e595225.cdn.sohucs.com/images/20171109/f3bedad065494847bc2db5ec17657061.jpeg',
          caption: '一级标题',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.',
          publishTime: 1551365405,
          like: 123,
          comments: 234
        }, {
          videoId: 12,
          postUrl: 'http://5b0988e595225.cdn.sohucs.com/images/20171109/f3bedad065494847bc2db5ec17657061.jpeg',
          caption: '一级标题',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.',
          publishTime: 1551365405,
          like: 123,
          comments: 234
        }, {
          videoId: 13,
          postUrl: 'http://5b0988e595225.cdn.sohucs.com/images/20171109/f3bedad065494847bc2db5ec17657061.jpeg',
          caption: '一级标题',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.',
          publishTime: 1551365405,
          like: 123,
          comments: 234
        }, {
          videoId: 14,
          postUrl: 'http://5b0988e595225.cdn.sohucs.com/images/20171109/f3bedad065494847bc2db5ec17657061.jpeg',
          caption: '一级标题',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.',
          publishTime: 1551365405,
          like: 123,
          comments: 234
        }
      ]
    }
  },
  mounted () {
    this.getLatestVideo()
  }
}
</script>

<style scoped>

</style>
