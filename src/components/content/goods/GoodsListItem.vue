<template>
  <div class="goods-item"  @click="itemClick">
    <img :src="showImage" alt="" />
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">￥{{ goodsItem.price }}</span>
      <span class="fa fa-star-o">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  components: {},
  data() {
    return {};
  },
  computed:{
    showImage(){
      return this.goodsItem.image || this.goodsItem.show.img
    }
  },
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    //   imgLoad() {
    //   // 发射事件总线
    //   this.$bus.$emit("imgLoad");
    // },
     itemClick() {
        this.$router.push('/detail/' + this.goodsItem.iid)
      },
  },
};
</script>

<style scoped>
.goods-item {
  padding-bottom: 2.5rem;
  position: relative;
  width: 48%;
}

.goods-item img {
  width: 100%;
  border-radius: 0.3125rem;
}

.goods-info {
  font-size: 0.75rem;
  bottom: 0.3125rem;
  left: 0;
  right: 0;
  position: absolute;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 0.1875rem;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 1.25rem;
}

.goods-info .fa {
  position: relative;
}
</style>
