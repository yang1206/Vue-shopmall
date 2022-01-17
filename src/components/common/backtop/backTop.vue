<template>
  <div class="back-top">
    <i class="fa fa-arrow-up"></i>
  </div>
</template>

<script>
export default {
  name: "backTop",
  components: {},
  data() {
    return {};
  },
  methods:{
    
  }
};
</script>

<style scoped>
.back-top {
  position: fixed;
  right: 10px;
  bottom: 80px;
}
i {
  color: deeppink;
  font-size: 20px;
  background-color: rgb(248, 226, 226);
  border-radius: 50%;
  padding: 8px;
}
</style>
