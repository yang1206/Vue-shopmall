<template>
  <div class="subcategory">
    <div
      v-for="(item, index) in subcategoryList"
      :key="index"
      class="category-item"
    >
      <a :href="item.link"><img :src="item.image" alt="" /></a>
      <p>{{ item.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {};
  },
  props: {
    subcategoryList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.subcategory {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
}
.subcategory .category-item {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 33.33%;
  height: 100px;
  margin-bottom: 10px;
}
.subcategory .category-item img {
  width: 65px;
  margin-bottom: 7px;
}
.subcategory .category-item p {
  font-size: 14px;
}
</style>
