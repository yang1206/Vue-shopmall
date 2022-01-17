<template>
  <div id="app">
      <keep-alive exclude="Detail">
        <router-view />
      </keep-alive>
      <main-tab-bar v-show="$route.meta.show"/>
  </div>
</template>
<script>
import MainTabBar from "@/components/content/mainTabBar/MainTabBar";
export default {
  components: {
    MainTabBar,
  },
};
</script>
<style>
@import "assets/css/base.css";

html,
body {
  width: 100vw;
}
</style>
