<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item path="/home" activeColor="deeppink">
        <template v-slot:item-icon><i class="fa fa-home"></i></template>
        <template v-slot:item-text><div>首页</div></template>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="deeppink">
        <template v-slot:item-icon><i class="fa fa-list"></i></template>
        <template v-slot:item-text><div>分类</div></template>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="deeppink">
        <template v-slot:item-icon><i class="fa fa-cart-plus"></i></template>
        <template v-slot:item-text><div>购物车</div></template>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="deeppink">
        <template v-slot:item-icon><i class="fa fa-user"></i></template>
        <template v-slot:item-text><div>我的</div></template>
      </tab-bar-item>
    </tab-bar>
   
    
  </div>
</template>
<script>
import TabBar from '@/components/common/tabbar/TabBar.vue'
import TabBarItem from '@/components/common/tabbar/TabBarItem.vue'
export default {
  name:'MainTabBar',
  components: {TabBar,TabBarItem}
}
</script>
<style>
</style>