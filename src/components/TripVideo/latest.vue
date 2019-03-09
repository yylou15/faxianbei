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
          postUrl: '/static/img/TripVideo/post.jpg',
          caption: '一级标题',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.',
          publishTime: 1551365405,
          like: 123,
          comments: 234
        }, {
          videoId: 2,
          postUrl: '/static/img/TripVideo/post.jpg',
          caption: '一级标题',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.',
          publishTime: 1551365405,
          like: 123,
          comments: 234
        }, {
          videoId: 3,
          postUrl: '/static/img/TripVideo/post.jpg',
          caption: '一级标题',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.',
          publishTime: 1551365405,
          like: 123,
          comments: 234
        }, {
          videoId: 4,
          postUrl: '/static/img/TripVideo/post.jpg',
          caption: '一级标题',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.',
          publishTime: 1551365405,
          like: 123,
          comments: 234
        }, {
          videoId: 5,
          postUrl: '/static/img/TripVideo/post.jpg',
          caption: '一级标题',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.',
          publishTime: 1551365405,
          like: 123,
          comments: 234
        }, {
          videoId: 6,
          postUrl: '/static/img/TripVideo/post.jpg',
          caption: '一级标题',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.',
          publishTime: 1551365405,
          like: 123,
          comments: 234
        }, {
          videoId: 7,
          postUrl: '/static/img/TripVideo/post.jpg',
          caption: '一级标题',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.',
          publishTime: 1551365405,
          like: 123,
          comments: 234
        }, {
          videoId: 8,
          postUrl: '/static/img/TripVideo/post.jpg',
          caption: '一级标题',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.',
          publishTime: 1551365405,
          like: 123,
          comments: 234
        }, {
          videoId: 9,
          postUrl: '/static/img/TripVideo/post.jpg',
          caption: '一级标题',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.',
          publishTime: 1551365405,
          like: 123,
          comments: 234
        }, {
          videoId: 10,
          postUrl: '/static/img/TripVideo/post.jpg',
          caption: '一级标题',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.',
          publishTime: 1551365405,
          like: 123,
          comments: 234
        }, {
          videoId: 11,
          postUrl: '/static/img/TripVideo/post.jpg',
          caption: '一级标题',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.',
          publishTime: 1551365405,
          like: 123,
          comments: 234
        }, {
          videoId: 12,
          postUrl: '/static/img/TripVideo/post.jpg',
          caption: '一级标题',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.',
          publishTime: 1551365405,
          like: 123,
          comments: 234
        }, {
          videoId: 13,
          postUrl: '/static/img/TripVideo/post.jpg',
          caption: '一级标题',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.',
          publishTime: 1551365405,
          like: 123,
          comments: 234
        }, {
          videoId: 14,
          postUrl: '/static/img/TripVideo/post.jpg',
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
