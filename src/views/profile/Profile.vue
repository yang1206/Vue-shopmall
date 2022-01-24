<template id="Profile">
  <div class="profile">
    <nav-bar class="profile-nav">
      <template v-slot:center>个人中心</template>
    </nav-bar>
    <scroll class="content" :probeType="3" :pullUpLoad="true">
      <profile-login />
      <profile-money />
      <div class="line"></div>
      <profile-list />
    </scroll>
  </div>
</template>
<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
import ProfileLogin from "./childComps/ProfileLogin.vue";
import ProfileMoney from "./childComps/ProfileMoney.vue";
import ProfileList from "./childComps/ProfileList.vue";

import Scroll from "@/components/common/scroll/Scroll.vue";
export default {
  name: "Profile",
  components: {
    NavBar,
    ProfileLogin,
    ProfileMoney,
    ProfileList,
    Scroll,
  },
};
</script>
<style scoped>
.profile-nav {
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 650;
}
.content {
  overflow: hidden;
  height: calc(100vh - 93px);
}
.line {
  width: 100%;
  height: 10px;
  background-color: #eeeeee;
}
</style>