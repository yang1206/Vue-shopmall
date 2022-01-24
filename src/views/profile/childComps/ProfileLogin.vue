<template>
  <div class="login">
      <div class="user-pic">
        <img src="@/assets/img/common/user-pic.png" alt="">
      </div>
      <div class="user-info">
        <p>登录/注册</p>
        <div class="num">
          <i class="fa fa-mobile-phone"></i>
          <p>暂未绑定手机号</p>
        </div>
      </div>
      <div class="arr-right">
        <i class="fa fa-chevron-right"></i>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {

    }
  }
}
</script>

<style scoped>
img{
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
}
.login{
  height: 90px;
  background-color: var(--color-tint);
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 16px;
  color: #fff;
}
.login .user-pic{
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;

}
.login .user-info{
  flex: 1;
  display: flex;
  flex-direction: column;
}
.user-info>p{
  font-size: 18px;
  font-weight: bold;
}
.num{
  display: flex;
  align-items: center;
  gap: 0.3rem;
}
.num i{
  font-size: 20px;
}
.arr-right{
  width: 8%;
}
</style>
