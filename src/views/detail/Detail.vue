<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @itemClick="titleClick" ref="nav" />
    <!-- <ul v-for="(item,index) in $store.state.cartList" :key="index">
       <li>{{item}}</li>
     </ul> -->
    <scroll
      ref="scroll"
      class="content"
      :probe-type="3"
      :pullUpLoad="true"
      @scroll="contentScroll"
    >
      <detail-swiper :topImages="topImages" class="detail-set-scroll" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detailInfo="detailInfo" @imgLoad="imgLoad" />
      <detail-param-info
        ref="param"
        :paramInfo="paramInfo"
        class="detail-set-scroll"
      />
      <detail-comment-info
        ref="comment"
        :commentInfo="commentInfo"
        class="detail-set-scroll"
      />
      <goods-list
        ref="recommend"
        :goods="recommends"
        class="detail-set-scroll"
      />
    </scroll>
    <detail-bottom-bar @addCart="addToCart" />
    <back-top @click.native="backClick" v-show="isShowBackTop" />
    <!-- <toast  :messages="messages" :show="show"/> -->
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import DetailParamInfo from "./childComps/DetailParamInfo.vue";
import DetailCommentInfo from "./childComps/DetailCommentInfo.vue";
import DetailBottomBar from "./childComps/DetailBottomBar.vue";
import GoodsList from "@/components/content/goods/GoodsList.vue";
import Scroll from "@/components/common/scroll/Scroll.vue";
// import Toast from '@/components/common/toast/Toast.vue'

import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "@/network/detail.js";
import { itemListenerMixin, backTopMixin } from "@/common/mixin.js";

import { mapActions } from "vuex";
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
    GoodsList,
    Scroll,
    // Toast
  },
  mixins: [itemListenerMixin, backTopMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      getThemeTopY: null,
      currentIndex: 0,
      // messages:'',
      // show:false
    };
  },

  created() {
    //1.保存传入的iid
    this.iid = this.$route.params.iid;

    //2.根据iid请求数据
    getDetail(this.iid).then((res) => {
      //获取轮播图片
      const data = res.result;
      this.topImages = data.itemInfo.topImages;
      //商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      //店铺信息
      this.shop = new Shop(data.shopInfo);
      //保存商品的详细数据
      this.detailInfo = data.detailInfo;
      //参数信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      //评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
    });
    //请求推荐数据
    getRecommend().then((res) => {
      this.recommends = res.data.list;
    });
  },
  mounted() {
    this.themeTopYs.push;
  },
  methods: {
    ...mapActions(['addCart']),
    imgLoad() {
      this.$refs.scroll.refresh();
      this.getNavList();
    },
    titleClick(index) {
      this.$nextTick(() => {
        //better scroll自带的api scrollToElement 滚动到指定的目标元素。
        let el = document.getElementsByClassName("detail-set-scroll");
        this.$refs.scroll.scrollToElement(el[index], 300);
      });
    },
    //获取tapcontarl四个部分的offsetTop
    getNavList() {
      this.$nextTick(() => {
        this.themeTopYs = [];
        this.themeTopYs.push(0);
        this.themeTopYs.push(this.$refs.param.$el.offsetTop);
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
        this.themeTopYs.push(Number.MAX_VALUE);
        //
      });
    },
    //根据offsettop判断curentrindex
    contentScroll(position) {
      const positionY = -position.y;
      let length = this.themeTopYs.length;
      // console.log(length);
      for (let i = 0; i < length - 1; i++) {
        // if(positionY > this.themeTopYs[parseInt(i)] && positionY < this.themeTopYs[i+1]){
        //   console.log(i);
        // }
        if (
          this.currentIndex !== i &&
          positionY >= this.themeTopYs[i] &&
          positionY < this.themeTopYs[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
          // console.log(this.currentIndex);
        }
      }
      //是否显示返回顶部
      this.listenShowBackTop(position);
    },
    addToCart() {
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;


      //map映射写法 vuex
      this.addCart(product).then(res =>{
        // this.show = true;
        // this.messages = res

        // setTimeout(()=>{
        //   this.show = false
        // },1500)
        // console.log(res);
        this.$toast.toastShow(res,2000)
        // console.log(this.$toast);


      })

      //正常写法
      // this.$store.dispatch("addCart", product).then((res) => {
      //   console.log(res);
      // });
    },
  },
};
</script>

<style scoped>
#detail {
  /* position: relative;
  z-index: 11; */
  /* background-color: #fff; */
  height: 100vh;
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content {
  overflow: hidden;
  /* position: absolute;
  top: 44px; */
  /* bottom: 49px; */
  height: calc(100% - 44px - 49px);
}
</style>
