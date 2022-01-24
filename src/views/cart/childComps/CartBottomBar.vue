<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button
        class="check-button"
        :is-checked="isSelectAll"
        @click.native="checkClick"
      />
      <span>全选</span>
    </div>
    <div class="total-price">合计:{{ totalPrice }}</div>
    <div class="calculate" @click="calcClick">去结算({{ checkLength }})</div>
  </div>
</template>

<script>
import CheckButton from "@/components/content/checkbutton/CheckButton.vue";
import { mapGetters } from "vuex";
export default {
  name: "CartBottomBar",
  components: { CheckButton },
  data() {
    return {};
  },
  methods: {
    checkClick() {
      if (this.isSelectAll) {
        this.cartList.forEach((item) => {
          item.checked = false;
        });
      } else {
        this.cartList.forEach((item) => {
          item.checked = true;
        });
      }
    },
    calcClick(){
      if(!this.isSelectAll){
        this.$toast.toastShow('请选择购买的商品')
      }
    }
  },
  computed: {
    ...mapGetters(["cartList"]),
    totalPrice() {
      return (
        "￥" +
        this.$store.state.cartList
          .filter((item) => {
            return item.checked;
          })
          .reduce((preValue, item) => {
            return preValue + item.price * item.count;
          }, 0)
      );
    },
    checkLength() {
      return this.$store.state.cartList
        .filter((item) => {
          return item.checked;
        })
        .reduce((preCount, item) => {
          return preCount + item.count;
        }, 0);
    },
    isSelectAll() {
      if (this.cartList.length === 0) {
        return false;
      }
      return this.cartList.every((item) => item.checked);
    },
  },
};
</script>

<style scoped>
.bottom-bar {
  height: 40px;
  background-color: #eee;
  position: relative;
  bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.check-content {
  /* margin-left: 10px; */
  display: flex;
  align-items: center;
}
.check-button {
  width: 24px;
  height: 24px;
  margin-right: 5px;
}
.total-price {
  /* margin-right: 10px; */
}
.calculate {
  width: 90px;
  height: 100%;
  line-height: 40px;
  background-color: var(--color-tint);
  color: #fff;
  text-align: center;
}
</style>
