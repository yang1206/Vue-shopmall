<template id="Home">
  <div>
    <nav-bar class="home-nav">
      <template v-slot:center> 购物街 </template>
      <template v-slot:right> <a style="color:#000" href="https://github.com/yang1206/Vue-shopmall"><i class="fa fa-github"></i></a> </template>
    </nav-bar>
    <tab-control
      :titles="['流行', '新款', '精选']"
      class="tab-control"
      @tabClick="tabClick"
      ref="tabControl1"
      v-show="isTabFixed"
    />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pullUpLoad="true"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad" />
      <recommend-view :recommends="recommend" />
      <feature-view />
      <tab-control
        :titles="['流行', '新款', '精选']"
        class="tabControl"
        @tabClick="tabClick"
        ref="tabControl2"
      />
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>
<script>
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView.vue";
import FeatureView from "./childComps/FeatureView.vue";

import NavBar from "@/components/common/navbar/NavBar.vue";
import TabControl from "@/components/content/tabControl/TabControl.vue";
import GoodsList from "@/components/content/goods/GoodsList.vue";
import Scroll from "@/components/common/scroll/Scroll.vue";
import backTop from "@/components/common/backtop/backTop.vue";

import { getHomeMultidata, getHomeGoods } from "@/network/home";
import { backTopMixin } from "@/common/mixin.js";
export default {
  name: "Home",
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    backTop,
  },
  mixins: [backTopMixin],
  data() {
    return {
      banners: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0,
    };
  },
  activated() {
    this.$refs.scroll.refresh();
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
  },
  deactivated() {
    //1.保存Y值
    this.saveY = this.$refs.scroll.getScrollY();
    // console.log(this.saveY);
  },
  created() {
    //首页多个数据
    this.getHomeMultidata(),
      //商品数据
      this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {},
  methods: {
    //事件监听
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    contentScroll(position) {
      //1.判断BackTop是否显示
      this.listenShowBackTop(position);
      // console.log(position);
      //2.决定tabControl是否吸顶(position:fixed)
      this.isTabFixed = -position.y > this.tabOffsetTop + 264 ;
    },
    //上拉加载更多
    loadMore() {
      this.getHomeGoods(this.currentType);
      this.$refs.scroll.scroll.refresh();
    },
    swiperImageLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
      // console.log(this.tabOffsetTop);
    },

    //请求数据api的方法
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        (this.banners = res.data.banner.list),
          (this.recommend = res.data.recommend.list);
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp();
      });
    },
  },
  computed: {
    //是否显示返回顶部  利用mixin混入 抽取
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
};
</script>
<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  /* position: sticky; */
  /* top: 0; */
  z-index: 9;
  font-weight: 650;
}
.tabControl {
  background-color: #fff;
}
.content {
  /* height: calc(100vh - 93px); */
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
}
.tab-control {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
</style>