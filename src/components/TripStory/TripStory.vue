<template>
    <div class="container">
        <el-row style="line-height: 40px;background-color: white;padding: 10px">
            <el-col :span="3">
                <el-dropdown trigger="click" @command="handleDropDownItemClick">
                    <span class="el-dropdown-link" style="cursor: pointer">
                        {{nowDropDownbButtonText}}
                        <i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item v-for="(item,index) in DropDownbButtonItem" :key="index" :command="index">
                            {{item.caption}}
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-col>
            <el-col :span="6" :offset="12">
                <!--<el-button type="text">精选</el-button>-->
                <!--&nbsp;/-->
                <!--<el-button type="text">热门</el-button>-->
                <el-radio v-model="radioOption" label="1" border size="medium" style="background-color: white">精选</el-radio>
                <el-radio v-model="radioOption" label="2" border size="medium">热门</el-radio>
            </el-col>
            <el-col :span="3">
                <el-button type="danger">
                    <i class="el-icon-edit"></i>
                    发布文章
                </el-button>
            </el-col>
        </el-row>
        <ArticleItem :list="articleList"></ArticleItem>
    </div>
</template>

<script>
import ArticleItem from '@/components/TripStory/ArticleItem'
export default {
  name: 'TripStory',
  components: {ArticleItem},
  data () {
    return {
      msg: 'TripStory',

      //  下拉菜单
      nowDropDownbButtonText: '全部文章',
      DropDownbButtonItem: [
        {caption: '全部文章', name: 'all'},
        {caption: '类别1', name: 'cate1'},
        {caption: '类别2', name: 'cate2'},
        {caption: '类别3', name: 'cate3'},
        {caption: '类别4', name: 'cate4'},
        {caption: '类别5', name: 'cate5'}
      ],

      //  精选or热门
      radioOption: '1',

      // 文章
      articleList: [
        {
          postUrl: 'http://5b0988e595225.cdn.sohucs.com/images/20171109/f3bedad065494847bc2db5ec17657061.jpeg',
          caption: '专访韩寒，看电影也好写小说也罢，至少都能做到不辜负',
          digest: '独家专访视频请拖至文章中部观看昨天，刚刚去看了韩寒的新电影《飞驰人生》，看完后的感觉，就像韩寒自己以前说的，每一件事，拍电影也好写小说也罢。至少都能做到不辜负...',
          origin: '新华社',
          originAvatar: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1554278126,1318599153&fm=27&gp=0.jpg',
          //  文章id
          articleId: 1,
          //  类型：精选or热门
          type: 'hot'
        },
        {
          postUrl: 'http://5b0988e595225.cdn.sohucs.com/images/20171109/f3bedad065494847bc2db5ec17657061.jpeg',
          caption: '专访韩寒，看电影也好写小说也罢，至少都能做到不辜负',
          digest: '独家专访视频请拖至文章中部观看昨天，刚刚去看了韩寒的新电影《飞驰人生》，看完后的感觉，就像韩寒自己以前说的，每一件事，拍电影也好写小说也罢。至少都能做到不辜负...',
          origin: '新华社',
          originAvatar: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1554278126,1318599153&fm=27&gp=0.jpg',
          articleId: 2,
          type: 'hot'
        },
        {
          postUrl: 'http://5b0988e595225.cdn.sohucs.com/images/20171109/f3bedad065494847bc2db5ec17657061.jpeg',
          caption: '专访韩寒，看电影也好写小说也罢，至少都能做到不辜负',
          digest: '独家专访视频请拖至文章中部观看昨天，刚刚去看了韩寒的新电影《飞驰人生》，看完后的感觉，就像韩寒自己以前说的，每一件事，拍电影也好写小说也罢。至少都能做到不辜负...',
          origin: '新华社',
          originAvatar: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1554278126,1318599153&fm=27&gp=0.jpg',
          articleId: 3,
          type: 'hot'
        },
        {
          postUrl: 'http://5b0988e595225.cdn.sohucs.com/images/20171109/f3bedad065494847bc2db5ec17657061.jpeg',
          caption: '专访韩寒，看电影也好写小说也罢，至少都能做到不辜负',
          digest: '独家专访视频请拖至文章中部观看昨天，刚刚去看了韩寒的新电影《飞驰人生》，看完后的感觉，就像韩寒自己以前说的，每一件事，拍电影也好写小说也罢。至少都能做到不辜负...',
          origin: '新华社',
          originAvatar: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1554278126,1318599153&fm=27&gp=0.jpg',
          articleId: 4,
          type: 'hot'
        },
        {
          postUrl: 'http://5b0988e595225.cdn.sohucs.com/images/20171109/f3bedad065494847bc2db5ec17657061.jpeg',
          caption: '专访韩寒，看电影也好写小说也罢，至少都能做到不辜负',
          digest: '独家专访视频请拖至文章中部观看昨天，刚刚去看了韩寒的新电影《飞驰人生》，看完后的感觉，就像韩寒自己以前说的，每一件事，拍电影也好写小说也罢。至少都能做到不辜负...',
          origin: '新华社',
          originAvatar: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1554278126,1318599153&fm=27&gp=0.jpg',
          articleId: 5,
          type: 'hot'
        },
        {
          postUrl: 'http://5b0988e595225.cdn.sohucs.com/images/20171109/f3bedad065494847bc2db5ec17657061.jpeg',
          caption: '专访韩寒，看电影也好写小说也罢，至少都能做到不辜负',
          digest: '独家专访视频请拖至文章中部观看昨天，刚刚去看了韩寒的新电影《飞驰人生》，看完后的感觉，就像韩寒自己以前说的，每一件事，拍电影也好写小说也罢。至少都能做到不辜负...',
          origin: '新华社',
          originAvatar: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1554278126,1318599153&fm=27&gp=0.jpg',
          articleId: 6,
          type: 'hot'
        },
        {
          postUrl: 'http://5b0988e595225.cdn.sohucs.com/images/20171109/f3bedad065494847bc2db5ec17657061.jpeg',
          caption: '专访韩寒，看电影也好写小说也罢，至少都能做到不辜负',
          digest: '独家专访视频请拖至文章中部观看昨天，刚刚去看了韩寒的新电影《飞驰人生》，看完后的感觉，就像韩寒自己以前说的，每一件事，拍电影也好写小说也罢。至少都能做到不辜负...',
          origin: '新华社',
          originAvatar: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1554278126,1318599153&fm=27&gp=0.jpg',
          articleId: 7,
          type: 'hot'
        },
        {
          postUrl: 'http://5b0988e595225.cdn.sohucs.com/images/20171109/f3bedad065494847bc2db5ec17657061.jpeg',
          caption: '专访韩寒，看电影也好写小说也罢，至少都能做到不辜负',
          digest: '独家专访视频请拖至文章中部观看昨天，刚刚去看了韩寒的新电影《飞驰人生》，看完后的感觉，就像韩寒自己以前说的，每一件事，拍电影也好写小说也罢。至少都能做到不辜负...',
          origin: '新华社',
          originAvatar: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1554278126,1318599153&fm=27&gp=0.jpg',
          articleId: 8,
          type: 'hot'
        },
        {
          postUrl: 'http://5b0988e595225.cdn.sohucs.com/images/20171109/f3bedad065494847bc2db5ec17657061.jpeg',
          caption: '专访韩寒，看电影也好写小说也罢，至少都能做到不辜负',
          digest: '独家专访视频请拖至文章中部观看昨天，刚刚去看了韩寒的新电影《飞驰人生》，看完后的感觉，就像韩寒自己以前说的，每一件事，拍电影也好写小说也罢。至少都能做到不辜负...',
          origin: '新华社',
          originAvatar: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1554278126,1318599153&fm=27&gp=0.jpg',
          articleId: 9,
          type: 'hot'
        },
        {
          postUrl: 'http://5b0988e595225.cdn.sohucs.com/images/20171109/f3bedad065494847bc2db5ec17657061.jpeg',
          caption: '专访韩寒，看电影也好写小说也罢，至少都能做到不辜负',
          digest: '独家专访视频请拖至文章中部观看昨天，刚刚去看了韩寒的新电影《飞驰人生》，看完后的感觉，就像韩寒自己以前说的，每一件事，拍电影也好写小说也罢。至少都能做到不辜负...',
          origin: '新华社',
          originAvatar: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1554278126,1318599153&fm=27&gp=0.jpg',
          articleId: 10,
          type: 'hot'
        },
        {
          postUrl: 'http://5b0988e595225.cdn.sohucs.com/images/20171109/f3bedad065494847bc2db5ec17657061.jpeg',
          caption: '专访韩寒，看电影也好写小说也罢，至少都能做到不辜负',
          digest: '独家专访视频请拖至文章中部观看昨天，刚刚去看了韩寒的新电影《飞驰人生》，看完后的感觉，就像韩寒自己以前说的，每一件事，拍电影也好写小说也罢。至少都能做到不辜负...',
          origin: '新华社',
          originAvatar: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1554278126,1318599153&fm=27&gp=0.jpg',
          articleId: 11,
          type: 'hot'
        },
        {
          postUrl: 'http://5b0988e595225.cdn.sohucs.com/images/20171109/f3bedad065494847bc2db5ec17657061.jpeg',
          caption: '专访韩寒，看电影也好写小说也罢，至少都能做到不辜负',
          digest: '独家专访视频请拖至文章中部观看昨天，刚刚去看了韩寒的新电影《飞驰人生》，看完后的感觉，就像韩寒自己以前说的，每一件事，拍电影也好写小说也罢。至少都能做到不辜负...',
          origin: '新华社',
          originAvatar: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1554278126,1318599153&fm=27&gp=0.jpg',
          articleId: 12,
          type: 'hot'
        },
        {
          postUrl: 'http://5b0988e595225.cdn.sohucs.com/images/20171109/f3bedad065494847bc2db5ec17657061.jpeg',
          caption: '专访韩寒，看电影也好写小说也罢，至少都能做到不辜负',
          digest: '独家专访视频请拖至文章中部观看昨天，刚刚去看了韩寒的新电影《飞驰人生》，看完后的感觉，就像韩寒自己以前说的，每一件事，拍电影也好写小说也罢。至少都能做到不辜负...',
          origin: '新华社',
          originAvatar: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1554278126,1318599153&fm=27&gp=0.jpg',
          articleId: 13,
          type: 'hot'
        },
        {
          postUrl: 'http://5b0988e595225.cdn.sohucs.com/images/20171109/f3bedad065494847bc2db5ec17657061.jpeg',
          caption: '专访韩寒，看电影也好写小说也罢，至少都能做到不辜负',
          digest: '独家专访视频请拖至文章中部观看昨天，刚刚去看了韩寒的新电影《飞驰人生》，看完后的感觉，就像韩寒自己以前说的，每一件事，拍电影也好写小说也罢。至少都能做到不辜负...',
          origin: '新华社',
          originAvatar: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1554278126,1318599153&fm=27&gp=0.jpg',
          articleId: 14,
          type: 'hot'
        },
        {
          postUrl: 'http://5b0988e595225.cdn.sohucs.com/images/20171109/f3bedad065494847bc2db5ec17657061.jpeg',
          caption: '专访韩寒，看电影也好写小说也罢，至少都能做到不辜负',
          digest: '独家专访视频请拖至文章中部观看昨天，刚刚去看了韩寒的新电影《飞驰人生》，看完后的感觉，就像韩寒自己以前说的，每一件事，拍电影也好写小说也罢。至少都能做到不辜负...',
          origin: '新华社',
          originAvatar: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1554278126,1318599153&fm=27&gp=0.jpg',
          articleId: 15,
          type: 'hot'
        }
      ]
    }
  },
  methods: {
    handleDropDownItemClick (index) {
      this.nowDropDownbButtonText = this.DropDownbButtonItem[index].caption
      //    获取该分类信息。。。
    }
  }

}
</script>

<style scoped>
.container{
    width: 1000px;
    margin: 0 auto;
}
</style>
