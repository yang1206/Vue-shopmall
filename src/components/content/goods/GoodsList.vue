<template>
  <div>
    <div class="goods">
      <goods-list-item v-for="(item,index) in goods" :goodsItem="item" :key="index"/>
    </div>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem.vue";
export default {
  name: "",
  components: { GoodsListItem },
  data() {
    return {};
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  
};
</script>

<style scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 0.125rem;
  }

</style>
