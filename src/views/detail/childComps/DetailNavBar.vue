<template>
    <nav-bar>
      <template v-slot:left>
        <i class="fa fa-arrow-left" @click="backClick"></i>
      </template>
      <template v-slot:center>
        <div class="title">
          <div
            v-for="(item, index) in titles"
            :key="index"
            class="title-item"
            :class="{ active: index === currentIndex }"
            @click="itemClick(index)"
          >
            {{ item }}
          </div>
        </div>
      </template>
    </nav-bar>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
export default {
  name: "",
  components: { NavBar },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods:{
    itemClick(index) {
        this.$emit('itemClick', index)
        this.currentIndex = index
      },
    backClick(){
      this.$router.back()
    }
  }
};
</script>

<style scoped>
.title {
  display: flex;
  font-size: 13px;
}
.title-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.fa-arrow-left{
  font-size: 13px;
}
</style>
