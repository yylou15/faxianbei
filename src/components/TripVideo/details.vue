<template>
    <div style="text-align: left;width: 1000px;margin: auto;">
        <video-player class="video-player vjs-custom-skin"
                      ref="videoPlayer"
                      :playsinline="true"
                      :options="playerOptions"
        />
        <el-row style="font-size: 20px;padding: 5px">
            <el-col :span="12">
                <div>
                    <font-awesome-icon icon="heart" style="color: #F596AA;"/>
                    <span> 233333 </span>
                </div>
            </el-col>
            <el-col :span="12" style="text-align: right">
                <div>
                    <font-awesome-icon icon="comments"/>
                    <span> 234 </span>
                </div>
            </el-col>
        </el-row>
            <el-col style="text-align: left;padding: 20px;">
                <span>{{videoDetail.comments.length}}条评论</span>
                <el-tabs v-model="activeName">
                    <el-tab-pane label="全部评论" name="allComment">
                        <CommitComment></CommitComment>
                        <CommentItem :list="videoDetail.comments"></CommentItem>
                    </el-tab-pane>
                </el-tabs>
            </el-col>
    </div>

</template>

<script>
import CommentItem from '../utils/CommentItem'
import CommitComment from '../utils/CommitComment'

export default {
  name: 'details',
  components: {
    CommentItem, CommitComment
  },
  data () {
    return {
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速度
        autoplay: false, // 如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          type: 'video/mp4',
          src: 'http://localhost:8080/static/video/oceans.mp4' // url地址
        }],
        poster: '../../static/images/bg.jpg', // 你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true // 全屏按钮
        }
      },
      activeName: 'allComment',
      videoDetail: {
        comments: [
          {
            username: '用户名123',
            content: '评论内容1241',
            from: '来自Android客户端',
            time: '2018-1-5 20:19',
            likes: 0,
            dislikes: 0
          },
          {
            username: '用户名',
            content: '评论内容',
            from: '来自Android客户端',
            time: '2018-1-5 20:19',
            likes: 0,
            dislikes: 0
          },
          {
            username: '用户名',
            content: '评论内容',
            from: '来自Android客户端',
            time: '2018-1-5 20:19',
            likes: 0,
            dislikes: 0
          },
          {
            username: '用户名',
            content: '评论内容',
            from: '来自Android客户端',
            time: '2018-1-5 20:19',
            likes: 0,
            dislikes: 0
          },
          {
            username: '用户名',
            content: '评论内容',
            from: '来自Android客户端',
            time: '2018-1-5 20:19',
            likes: 0,
            dislikes: 0
          },
          {
            username: '用户名',
            content: '评论内容',
            from: '来自Android客户端',
            time: '2018-1-5 20:19',
            likes: 0,
            dislikes: 0
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
    .content {
        background-color: #e5e5e5;
        min-height: 200px;
        padding: 15px;
    }

    .authorAvatar {
        display: inline-block;
        height: 50px;
        width: 50px;
        border: 2px solid royalblue;
        border-radius: 50%;
    }
</style>
