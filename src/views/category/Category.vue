<template id="Category">
  <div class="category">
    <nav-bar class="nav-bar">
      <template v-slot:center>商品分类</template>
    </nav-bar>
    <div class="content">
      <slide-bar
        class="slide-bar"
        :categoryList="categoryList"
        @SlideritemClick="SlideritemClick"
      />
      <scroll class="cate-scroll" :probeType="3" :pullUpLoad="true">
        <subcategory :subcategoryList="subcategoryList" class="subcategory" />
        <tab-control :titles="['流行', '新款', '精选']" @tabClick="tabClick"/>
        <goods-list :goods="categoryDetailList"/>
      </scroll>
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
import SlideBar from "./childComps/SlideBar.vue";
import Subcategory from "./childComps/Subcategory.vue";
import TabControl from '@/components/content/tabControl/TabControl.vue'
import GoodsList from '@/components/content/goods/GoodsList.vue'
// import { backTopMixin } from "@/common/mixin.js";


import Scroll from "@/components/common/scroll/Scroll.vue";
import {
  getCategory,
  getSubcategory,
  getCategoryDetail,
} from "@/network/category";
export default {
  name: "Category",
  data() {
    return {
      categoryList: [],
      subcategoryList: [],

      categoryDetailList:[],
      currentIndex:0
    };
  },
  components: {
    NavBar,
    Scroll,

    SlideBar,
    Subcategory,
    TabControl,
    GoodsList
  },
  methods: {
    //请求侧边栏数据
    SlideritemClick({ maitKey, index }) {
      // 防止反复请求
      if (this.currentIndex === index) return;
      this.currentIndex = index;
      this.getSubcategory(maitKey);
      this.getCategoryDetail(this.categoryList[this.currentIndex].miniWallkey, "pop");
    },
    //请求分类数据
    getSubcategory(maitKey) {
      getSubcategory(maitKey).then((res) => {
        this.subcategoryList = [...res.data.list];
        // console.log(this.subcategoryList);
      });
    },
    //请求分类推荐数据
    getCategoryDetail(key,type){
      getCategoryDetail(key,type).then(res =>{
        this.categoryDetailList = [...res];
      })
    },
    tabClick(index){
      const typeList = ["pop", "new", "sell"];
       this.getCategoryDetail(this.categoryList[this.currentIndex].miniWallkey, typeList[index]);
    }
  },
  // mixins: [backTopMixin],
  created() {
    getCategory().then((res) => {
      this.categoryList = res.data.category.list;
      // console.log(this.categoryList);
      this.$nextTick(() => {
          this.getSubcategory(this.categoryList[0].maitKey);
          this.getCategoryDetail(this.categoryList[0].miniWallkey, "pop");
        });
    });
  },
};
</script>
<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 650;
}
.content {
  display: flex;
}
.slide-bar{
  width: 100px;
}
.subcategory{
  flex: 1;
}
.cate-scroll{
  width: 100%;
  overflow: hidden;
  height: calc(100vh - 44px - 49px);
}
</style>>
