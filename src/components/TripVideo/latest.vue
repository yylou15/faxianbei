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
      // this.videoList = [
      //   {
      //     videoId: 1,
      //     postUrl: '/static/img/TripVideo/post1.png',
      //     videoUrl: 'https://player.youku.com/embed/XMzc3ODMwMzU3Mg==?client_id=b598bfd8ec862716&password=&autoplay=false#www.vmovier.com',
      //     caption: '外国大神酷炫节奏感旅拍《北京》',
      //     content: '短片来自YouTube旅游博主Bryn North，他用多视角的拍摄和别出心裁的剪辑，把北京的多元融合国际化表现得非常尽致。<br/>' +
      //       'Bryn的镜头下，像长城、故宫这样充满历史气息的宏伟建筑，能和街头巷尾的市民游客、现代感满满的银河SOHO无缝交融。' +
      //       '也许正是因为外国人视角的独特，才能呈现出北京的另一种新鲜的动感，加上十分用心的踩点剪辑让画面更加具有感染力。' +
      //       '可以说，作者表现出“东西荟萃、古今融合”的北京印象，正是这座城市最独一无二的魅力。<br/>' +
      //       '背景音乐：Kalmi - Nuri (feat. Karan Kanchan)<br/>' +
      //       '相关设备：<br/>' +
      //       'Zhiyun Crane 2 <br/>' +
      //       'Panasonic Lumix Gh5 <br/>' +
      //       'Metabones speedbooster Ultra <br/>' +
      //       'Canon 70-200mm f4, Sigma 18-35mm f1.8 <br/>' +
      //       'Dji Phantom 4 pro plus',
      //     publishTime: 1551365405,
      //     like: 123,
      //     comments: 6
      //   }, {
      //     videoId: 2,
      //     postUrl: 'http://n3-q.mafengwo.net/s8/M00/F1/1E/wKgBpVWiLnaAC1-cAA21442UzLk18.jpeg?imageMogr2%2Fthumbnail%2F%211020x540r%2Fgravity%2FCenter%2Fcrop%2F%211020x540%2Fquality%2F100',
      //     videoUrl: 'https://player.youku.com/embed/XMjU1MTc2NDMxNg==?client_id=b598bfd8ec862716&password=&autoplay=false#www.vmovier.com',
      //     caption: '赌城别样风情旅行短片《你从未见过的澳门》',
      //     content: '提起澳门，大家第一印象就是金碧辉煌的赌城。但这个城市的迷人之处可远不止只有赌城而已。今天跟随着' +
      //       'Beautiful Destinations旅行博主一起去看看你没见过的澳门，感受这个中葡风格结合的城市的别样风情。<br/>' +
      //       '小巷里扑面而来的市井气息，嘈杂的街头，攒动的人群，转个角又踏进了香火缭绕的妈阁庙，这里至今已有500多年的历史，' +
      //       '妈阁庙前的葡式碎石与妈阁庙中式设计成强烈对比，正好体现中西交融的特征，还有短片中反复出现的历史遗迹大三巴牌坊位，' +
      //       '这可是澳门地标性的老建筑。<br/>' +
      //       '这个城市有动有静，除了这些历史古迹外，这个城市同样也是充满刺激和挑战的，有炫酷的赛车比赛，有插入云霄的澳门塔，' +
      //       '这是全球十大观光塔之一，它也是超越巴黎埃菲尔铁塔的东南亚最高观光钢塔，塔顶上是国内最高的蹦极台，' +
      //       '小编想起了电影《搜索》的经典台词，如果想让他爱上你，就和他去蹦极，最后杨守诚和叶蓝秋在现实中结为了夫妻。<br/>' +
      //       '在这座小城里，有太多美妙之处，等着你去发现，所以还在等什么？',
      //     publishTime: 1551365405,
      //     like: 123,
      //     comments: 6
      //   }, {
      //     videoId: 3,
      //     postUrl: 'http://pic6.wed114.cn/20161030/2016103017555568119899.jpg',
      //     videoUrl: 'https://player.youku.com/embed/XMjQ5NTQ0MjI3Ng==?client_id=b598bfd8ec862716&password=&autoplay=false#www.vmovier.com',
      //     caption: '鼓舞人心诗意旅行短片《美妙人生的关键》',
      //     content: '当夏威夷的美丽景色撞上哲学的终极问题之一，人生的意义究竟是什么？一千个人有一千个不同的答案，' +
      //       '我们也可以编制出很多自我陶醉的意义来。马克·吐温说过一句话，大概意思是这样的：生命中有两天是最宝贵的，一天是你来到世上，' +
      //       '另一天你是明白了为什么来到世上。<br/>' +
      //       '本片旁白来自励志演讲达人Fearless Motivation，摄影来自devin super tramp。我们都会死的，但永恒从来不是我们的目标，' +
      //       '创造永恒才是。赋予自己和所做的事情一个意义，并且承受得住别人的质疑，这需要勇气，自证价值则需要能力。<br/>' +
      //       '不用刻意去想世界有多大，你的眼界决定你的世界，也不要刻意去想时间有多久远，你的经历定义了你的人生。有人爱，有事做，' +
      //       '有所期待，人生的意义其实就在自己的心中。',
      //     publishTime: 1551365405,
      //     like: 123,
      //     comments: 6
      //   }, {
      //     videoId: 4,
      //     postUrl: 'https://www.qqtouxiang.com/d/file/tupian/mx/20170802/ji2zltq21u5j3.jpg',
      //     videoUrl: 'https://player.youku.com/embed/XMjg3MjU0MDYwMA==?client_id=b598bfd8ec862716&password=&autoplay=false#www.vmovier.com',
      //     caption: '静谧岛屿旅行励志短片《做自己》',
      //     content: '看过了不少充满酷炫转场的快节奏剪辑类延时摄影，这次推荐一个视觉上没那么华丽，风景也更显平实，' +
      //       '却有种别样魅力的旅行短片。<br/>' +
      //       '本片素材为奥地利导演Raphael Pöham在印度安达曼群岛度过的三周所拍，比起一些有壮美奇观的地方，' +
      //       '这里更多的是简单的岛屿、海域和丰富的物种。导演在其中展示的也是当地人日常活动和度假式的惬意。背景乐的歌词很吸引人，' +
      //       '是Mikey Mike的新歌Doin Me，和画面在剪辑上搭配得足够和谐，有一种抚慰人的力量。<br/>' +
      //       '妈妈说，“你不想见见什么人（大人物）吗？”我说，“不，我想见所有人。”<br/>' +
      //       '妈妈说，“你不想过得舒服点吗？”我说，“不，我不想舒服。”<br/>' +
      //       '妈妈说，“但是你不想有孩子吗？”我说，“不，我就是个孩子。”<br/>' +
      //       '几句打动人的歌词令人印象深刻。片中没有极限运动，没有令人咋舌的行动，也没有让人热血沸腾的炫目场景，' +
      //       '可倘若这遥远的、安静的岛屿就是我梦中的地方，如果我愿为之付出代价来换取这种生活，这同样是“做我自己”的勇气。',
      //     publishTime: 1551365405,
      //     like: 123,
      //     comments: 6
      //   }, {
      //     videoId: 5,
      //     postUrl: 'http://up.bizhitupian.com/pic_source/b1/80/45/b18045dc59ab550dd335bf871888a646.jpg',
      //     videoUrl: 'https://player.youku.com/embed/XMzcwNzgxNDA3Mg==?client_id=b598bfd8ec862716&password=&autoplay=false#www.vmovier.com',
      //     caption: '环球风光集锦《2分钟畅游世界》',
      //     content: '这支短片是来自 Postcard 团队的一部风光集锦片，由Patrik Wallner 和Tommy Zhao拍摄而来，' +
      //       '地点包含：格鲁吉亚，马达加斯加，印度，泰国，土库曼斯坦，日本，德国，美国，苏丹，南非，菲律宾，中国，也门，' +
      //       '斯洛维尼亚和印度尼西亚。<br/>' +
      //       '虽然只有 2 分钟的时长，短片却涵盖了每个国家不同的美景、人文、娱乐、动植物等因素，' +
      //       '此外还利用航拍、延时、深潜等不同视角与拍摄手法，让影片内容更加饱满、富有生命力。让你看完就想背起行囊，探索世界。',
      //     publishTime: 1551365405,
      //     like: 123,
      //     comments: 6
      //   }, {
      //     videoId: 6,
      //     postUrl: '/static/img/TripVideo/post6.png',
      //     caption: '人文唯美延时摄影《南京2014》',
      //     content: '本片拍摄了六朝古都南京的安逸与喧嚣，前后耗时一年，镜头下透露出主创对于南京这座城市的眷恋和热爱。<br/>' +
      //       '车水马龙的主城区、繁华的街道和熙熙攘攘的行人，这是南京高节奏生活的一面；' +
      //       '高耸入云的紫峰、庄严肃穆的中山陵、古色古香的夫子庙，这是南京历史气息的一面。' +
      //       '昼与夜的交替，喧闹与宁静的混合，南京的美丽展现在镜头前。' +
      //       '这支延时摄影中加入了部分大范围的移动镜头，使画面显得更加具有生命力。<br/>' +
      //       '短片配乐上选用了更为电子曲风的背景音乐，富有跳跃感，但反而与画面本身的感觉不搭调，' +
      //       '并且有些喧宾夺主，盖过画面，还让人有种“出戏”感。取景按照白天到黑夜的顺序排列，没有清晰明确的主题，' +
      //       '有点素材堆积的杂乱感，在时间线的划分上也给人不够自然灵动之意。',
      //     publishTime: 1551365405,
      //     like: 123,
      //     comments: 6
      //   }, {
      //     videoId: 7,
      //     postUrl: 'http://file02.16sucai.com/d/file/2014/1017/c82642fc48a0223ae35b64c94c129981.jpg',
      //     caption: '北纬70°绝美极光延时摄影《极夜》',
      //     videoUrl: 'https://player.youku.com/embed/XMTQ3MjM2MDA5Ng==?client_id=b598bfd8ec862716&password=&autoplay=false#www.vmovier.com',
      //     content: '每年的11月下旬，在北纬70°的严寒地带，太阳一旦降落到地平线以下，' +
      //       '两个月不会在出来，这样的现象称为极夜，也称为白夜。<br/>' +
      //       '太阳落下之后，天空并非完全黑暗，而是时而灰蒙蒙的，没有色彩，时而受天际的光映亮，绮丽美妙。' +
      //       '唯有站在那片天空之下，才懂得自然如此神秘多彩。<br/>' +
      //       '看着这样的美丽景色，忽然让人想起《白夜行》里的那句话：“我的天空里没有太阳,总是黑夜,但并不暗,因为有东西代替了太阳。' +
      //       '虽然没有太阳那么明亮,但对我来说已经足够。凭借着这点儿光亮，我便能把黑夜当做白天。”<br/>' +
      //       '延时摄影是一种孤独的守望，在天地之间独守着一线岁月的变换。<br/>' +
      //       '这是摄影师Jan R Olsen的第一部延时作品《极夜》（Polar Night），拍摄于旅居挪威的一段时间，' +
      //       '分别完成在2015年11、12月与2016年1月，共拍摄了80000张照片，在影片中使用了其中的25000张。',
      //     publishTime: 1551365405,
      //     like: 123,
      //     comments: 6
      //   }, {
      //     videoId: 8,
      //     postUrl: '/static/img/TripVideo/post8.png',
      //     videoUrl: 'https://player.youku.com/embed/XMTQ3MjM3MTEzNg==?client_id=b598bfd8ec862716&password=&autoplay=false#www.vmovier.com',
      //     caption: '教科书里的那个蓝色星球—挪威',
      //     content: '说句公道话，这才是教科书里的那个蓝色星球！<br/>' +
      //       '大雪纷飞的童话境地、北极光舞动的静谧深夜、霞光绚烂的美妙天空，还有湖泊、森林与峡湾，北国挪威美得如此安静又惊艳。' +
      //       '生活于此的作者，在闲暇时刻用镜头记录了这里的美景。<br/>' +
      //       '作者Ola Moen花了一年多时间拍摄超过11100张照片将其浓缩为这部六分多钟的短片。' +
      //       '美到窒息在这里都不足以体现短片带给我的超然脱境之感。所有的地方不是浮夸的景点，而是当地人日落而息生活的地方。' +
      //       '你可以质疑它的摄影手法，但你不能质疑它本身的仙境般的美。<br/>' +
      //       'Music:Time by Celsey McFadden',
      //     publishTime: 1551365405,
      //     like: 123,
      //     comments: 6
      //   }, {
      //     videoId: 9,
      //     postUrl: 'http://up.bizhitupian.com/pic_source/06/02/95/0602952b773b2c9dcc0c764f0dde577a.jpg',
      //     videoUrl: 'https://player.youku.com/embed/XNTAwMTA2MTY4?client_id=b598bfd8ec862716&password=&autoplay=false#www.vmovier.com',
      //     caption: '行旅者的独白《旅行笔记》',
      //     content: '这是一部学生作品，讲述了四个人关于旅行的独白。旅行的意义是什么？每一个人都有自己的答案。' +
      //       '这一部清新文艺的短片，用犹如散文一般的叙事，将旅行中最美好的感觉传递了出来。<br/>' +
      //       '这一部短片比起那些意识流短片，更具可看性。行进的列车，耀眼的阳光，飞驰而过的风景，不知名字的小巷，繁华的街景。' +
      //       '这些都那么美好，看不厌，永不停歇。' +
      //       '而在那些山山水水之中，每个人都有自己的选择。有的人走了，却又停下来，等待更好的故事；' +
      //       '有的人停下来，复又启程，去寻找未知的梦想。每一幕，都隐藏着一个人的故事。<br/>' +
      //       '片子最大的缺点就是镜头晃动严重，如果能够在这一方面有所改进，这一部短片将会更加精致，更加吸引人。<br/>' +
      //       '这一部短片带着学生作品独有的细腻与幻想，那些关于旅行的独白都透着青涩。' +
      //       '也许，年轻的我们都在尝试着去诠释一种意义，无论是旅行还是人生。' +
      //       '青春意味着无限的可能，所以在他们到达目的地之前，请包容年轻的心。',
      //     publishTime: 1551365405,
      //     like: 123,
      //     comments: 6
      //   }, {
      //     videoId: 10,
      //     postUrl: 'https://cs.vmovier.com/Uploads/static/wp/new/7/52dc98aeebee1.jpeg@600w_400h_1e_1c.jpg',
      //     caption: '马蜂窝旅行纪录短片《旅行让爱难忘》',
      //     content: '这支短片由多个镜头组成，2013年旅行世界的网友，每人一个镜头配上自己的一句话，完成这部旅行纪录片，' +
      //       '拍摄手法类似于我们曾介绍过的首部两岸三地延时摄影《韵动中国》第2版。<br/>' +
      //       '开大音量，全屏播放，两分半的时间里，无论是九寨沟的潺潺流水，还是太平洋沿途公路的空旷惬意，' +
      //       '还是越南集市的喧闹人群，日本餐馆的美味料理，这些第一手的自然风光和人文景色，带我们一览其美好。<br/>' +
      //       '谁都不缺一颗旅行的心，只要决定好出发，便能像短片中的游客们一样，亲自体验这些惊喜与美妙。' +
      //       '短片作为旅行网站的宣传片，简单而具有诱惑力，网友的第一手视频更增添了说服力。' +
      //       '但文字有部分稍显平常，如果再雕琢一番效果会更好。',
      //     publishTime: 1551365405,
      //     like: 123,
      //     comments: 6
      //   }
      // ]

      this.axios.get('/static/TripVideo/all.json').then((response) => {
        this.videoList = response.data
      }).catch((response) => {
        console.log(response)
      })
    }
  },
  mounted () {
    this.getLatestVideo()
  }
}
</script>

<style scoped>

</style>
