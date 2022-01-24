<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  components: {},
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    //1.创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      click: true,
      //Bs2.0的插件，解决了图片未加载完滚动不下去的问题，自带防抖
      observeDOM: true,
      observeImage: true,
    });
    // 2.监听滚动的位置
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on("scroll", (position) => {
        this.$emit("scroll", position);
      });
    }
    // console.log(this.scroll);
    //3.监听上拉事件,Scroll滚动到底部
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
    }
    // //4.监听item中图片加载完成，使用非父子组件通信，此语法在vue3中被废弃，用mitt代替
    // this.$bus.$on('itemImageLoad',()=>{
    //   this.$refs.scroll.refresh()

    // })
  },

  methods: {
    //回到顶部
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    getScrollY() {
      return this.scroll ? this.scroll.y : 0;
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    //滚动到指定位置
    scrollToElement(el, time) {
      this.scroll.scrollToElement(el, time);
    }
  },
};
</script>

<style scoped>
</style>
