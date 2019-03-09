<template>
    <div>
        <div class="bg">
            <img src="/static/img/TripStrategy/nav.png" alt="" width="100%" style="min-width: 1000px;">
        </div>
        <div class="head-wrapper">
            <el-row>
                <el-col :span="20">
                    <el-input
                            placeholder="请输入内容"
                            v-model="searchInput"
                            clearable>
                    </el-input>
                </el-col>
                <el-col :span="4">
                    <el-button icon="el-icon-search" circle type="primary"></el-button>
                </el-col>
            </el-row>
        </div>
        <div class="container-wrapper">
            <NoteItem :list="noteCaptionList"></NoteItem>
        </div>
    </div>

</template>

<script>
import NoteItem from './TripStrategy/NoteItem'
export default {
  name: 'TripStrategy',
  components: {NoteItem},
  data: function () {
    return {
      searchInput: '',
        noteCaptionList: [
            {
                noteId:1,
                postUrl: 'http://tr-osdcp.qunarzz.com/tr-osd-tr-space/img/f4df1a9480febd828b2201a2c18ec92b.jpg?ver=1',
                caption: '暑假即将来临 盘点国内最适合学生党的五大旅游胜地',
                digest: '天气日渐寒冷 \n' +
                    '随之而来的便是寒假 \n' +
                    '那么你的寒假将选择如何度过呢 \n' +
                    '是追剧 还是沉迷于游戏 \n' +
                    '不妨背上行囊出去走走 新鲜的人 新鲜的事 新鲜的空气 还有新鲜的世界 \n' +
                    '小编盘点了对学生族最有影响力的十大国内旅游胜地 \n' +
                    '打算出游的你 \n' +
                    '不妨参考一下\n',
                time: '2019-3-9',
                views: 233,
                comments: [
                    {
                        username: '小明',
                        content: '真好！',
                        from: '来自Android客户端',
                        time: '2018-1-5 20:19',
                        likes: 0,
                        dislikes: 0
                    },
                    {
                        username: '小红',
                        content: '真棒！',
                        from: '来自ios客户端',
                        time: '2018-1-5 20:19',
                        likes: 0,
                        dislikes: 0
                    }
                ],
                author: '在路上去远行',
                authorAvatar: 'https://qcommons.qunar.com/headshot/headshotsById/295433968.png?l&ssl=true',
                content: ''
            },
            {
                noteId:2,
                postUrl: 'https://img1.qunarzz.com/travel/d5/1811/32/f8391fa855e152b5.jpg?ver=1',
                caption: '刷爆朋友圈的重庆三日行',
                digest:
                    '四川美术学院停车场\n' +
                    '重庆，一座3D魔幻城市，一夜之间在网络上爆红。\n' +
                    '经不住诱惑，我也凑热闹加入到网红城市打卡之行\n',
                time: '2019-3-9',
                views: 233,
                comments: [
                    {
                        username: '小明',
                        content: '真好！',
                        from: '来自Android客户端',
                        time: '2018-1-5 20:19',
                        likes: 0,
                        dislikes: 0
                    },
                    {
                        username: '小红',
                        content: '真棒！',
                        from: '来自ios客户端',
                        time: '2018-1-5 20:19',
                        likes: 0,
                        dislikes: 0
                    }
                ],
                author: 'vhj0063',
                authorAvatar: 'https://qcommons.qunar.com/headshot/headshotsById/173814040.png?l&ssl=true',
                content: ''
            },
            {
                noteId:3,
                postUrl:'http://img1.qunarzz.com/travel/d4/1804/8a/4c0bba5630c7cfb5.jpg',
                caption: '最经济的HongKong三日游☺️学生党看过来',
                digest: '尖沙咀\n' +
                    '香港，这个名字，不同的人有着不同的感受。有人会想到中环高楼林立，有人会想到保留最原始最“香港”的油尖旺地区，有人会想到高大上的九龙地带，有人会想到偏僻狭小的北角。\n' +
                    '嗯，这是个传统和新潮元素互相撞击、融合的城市，却一点儿也不矛盾。在保留城市“东歪西斜”的地形特点之下，拔地而起的擎天君们稍显纠结，但却是这个城市规划中最完美的一笔；古色古香的古董街荷李活道紧挨着被玻璃幕墙闪耀的中西区，闹中取静，这就是香港的诱人之处。\n' +
                    '这样的香港，这样“矛盾”的港人形象，你会觉得新鲜有趣吗？\n',
                time: '2019-3-9',
                views: 233,
                comments: [
                    {
                        username: '小明',
                        content: '真好！',
                        from: '来自Android客户端',
                        time: '2018-1-5 20:19',
                        likes: 0,
                        dislikes: 0
                    },
                    {
                        username: '小红',
                        content: '真棒！',
                        from: '来自ios客户端',
                        time: '2018-1-5 20:19',
                        likes: 0,
                        dislikes: 0
                    }
                ],
                author: '蛋清馅儿',
                authorAvatar: 'https://qcommons.qunar.com/headshot/headshotsById/254161886.png?l&ssl=true',
                content: ''
            },
            {
                noteId:4,
                postUrl:'https://img1.qunarzz.com/travel/d2/1612/2b/c8d76a345ed113b5.jpg?ver=1',
                caption: '与闺蜜的大理穷游之旅',
                digest: '星期三下午，睡了个懒洋洋的午觉起来，吧哩看着我问：“大后天有空不？”，刚睡醒的我转了下脑子：“有啊~干嘛？”不就周六嘛，没安排，“走不走？”她手指滑动着手机屏幕，不知道在看什么，我略微思索了下，：“走啊。”走去哪？\n' +
                    '        “丽江。”她一脸认真，我瞪大眼睛，啥······这孩子，失恋了吧？\n',
                time: '2019-3-9',
                views: 233,
                comments: [
                    {
                        username: '小明',
                        content: '真好！',
                        from: '来自Android客户端',
                        time: '2018-1-5 20:19',
                        likes: 0,
                        dislikes: 0
                    },
                    {
                        username: '小红',
                        content: '真棒！',
                        from: '来自ios客户端',
                        time: '2018-1-5 20:19',
                        likes: 0,
                        dislikes: 0
                    }
                ],
                author: 'hagc2874',
                authorAvatar: 'https://qcommons.qunar.com/headshot/headshotsById/246408823.png?l&ssl=true',
                content: ''
            },
            {
                noteId:5,
                postUrl:'https://img1.qunarzz.com/travel/d8/1503/be/3600273dd7f3ca.jpg_r_1360x1360x95_8b72190c.jpg',
                caption: '永远准备去旅游（学生党3天厦门攻略）',
                digest: '说说这次旅行\n' +
                    '我想 找到最舒服的方式 就是最好的生活\n' +
                    '和适合的朋友 来一场合适的旅行\n' +
                    '好不容易 排除万难 宿舍6个人凑到一起 离开校园 开始了在厦门的旅程\n' +
                    '\n',
                time: '2019-3-9',
                views: 233,
                comments: [
                    {
                        username: '小明',
                        content: '真好！',
                        from: '来自Android客户端',
                        time: '2018-1-5 20:19',
                        likes: 0,
                        dislikes: 0
                    },
                    {
                        username: '小红',
                        content: '真棒！',
                        from: '来自ios客户端',
                        time: '2018-1-5 20:19',
                        likes: 0,
                        dislikes: 0
                    }
                ],
                author: 'Liiwing',
                authorAvatar: 'https://qcommons.qunar.com/headshot/headshotsById/155779231.png?l&ssl=true',
                content: ''
            }
        ]
    }
  }
}
</script>

<style scoped>
    .head-wrapper {
        width: 500px;
        margin: 300px auto;
        padding: 100px 0;
    }

    .container-wrapper {
        width: 1000px;
        margin: -300px auto;
        background: white;
        padding: 25px;
    }
    .bg{
        position: absolute;
        width: 100%;
        top: 62px;
        left: 0;
    }
</style>
