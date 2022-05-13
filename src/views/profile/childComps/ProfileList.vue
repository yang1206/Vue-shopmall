<template>
  <div class="profile-list">
    <div class="profile-list-item">
      <i class="fa fa-user"></i>
      <div>我的消息</div>
    </div>
    <div class="profile-list-item">
      <i class="fa fa-gift"></i>
      <div>积分商城</div>
    </div>
    <div class="profile-list-item">
      <i class="fa fa-trophy"></i>
      <div>会员卡</div>
    </div>
    <div class="line"></div>
    <div class="profile-list-item" @click="cartClick">
      <i class="fa fa-cart-arrow-down"></i>
      <div>我的购物车</div>
    </div>
    <div class="profile-list-item">
      <a class="fa fa-github" href="https://github.com/yang1206/Vue-shopmall"></a>
      <div><a href="https://github.com/yang1206/Vue-shopmall">源代码</a></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileList',
  components: {},
  data() {
    return {

    }
  },
  methods:{
    cartClick(){
      this.$router.push('/cart')
    }
  }
}
</script>

<style scoped>
.profile-list{
  display: flex;
  flex-direction: column;
  font-size: 18px;
  width: 100%;
}
.profile-list .profile-list-item{
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #dddddd;
}
.profile-list .profile-list-item i,a{
  width: 20%;
  text-align: center;
}
.profile-list .profile-list-item>div{
  flex: 1;

}
.line {
  width: 100%;
  height: 10px;
  background-color: #eeeeee;
}
</style>
