<template>
  <div id="check-button" :class="{ check: isChecked }">
    <i class="fa fa-check-circle"></i>
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
    isChecked: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
#check-button {
  font-size: 25px;
}
.check {
  color: var(--color-tint);
}
</style>
