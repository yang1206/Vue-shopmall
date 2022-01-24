<template>
  <div class="slide-bar">
    <scroll class="content" :probeType="3" :pullUpLoad="true">
      <ul v-for="(item, index) in categoryList" :key="index">
        <li :class="{active: index === currentIndex}" @click="itemClick(item,index)">{{ item.title }}</li>
      </ul>
    </scroll>
  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll.vue";
export default {
  name: "",
  components: {
    Scroll,
  },
  data() {
    return {
      currentIndex:0
    };
  },
  props: {
    categoryList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods:{
    itemClick(item,index){
      const obj = {
        maitKey : item.maitKey,
        index
      }
      this.currentIndex = index
      this.$emit('SlideritemClick',obj)
    }
  }
};
</script>

<style scoped>
.slide-bar{
  width: 100%;
  background-color: #eee;
}
.content{
  overflow: hidden;
  height: calc(100vh - 44px - 49px);
  text-align: left;
  font-size: 14px;
  color: #666;
  
}
.content ul{
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.content ul li{
  height: 45px;
  line-height: 45px;
  width: 100%;
  text-align: center;

}
.active{
  color: #ff5777;
  border-left: 3px solid #ff5777;
  background: #fff;
  font-weight: 700;
}
</style>
