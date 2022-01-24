<template>
  <div class="money">
    <div class="money-item">
      <p>
        0.00
        <span>元</span>
      </p>
      <p class="">我的余额</p>
    </div>
    <div class="money-item">
      <p>
        0
        <span>个</span>
      </p>
      <p class="">我的优惠</p>
    </div>
    <div class="money-item">
      <p>
        0
        <span>分</span>
      </p>
      <p class="">我的积分</p>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  name: 'money',
  
  data() {
    return {

    }
  }
}
</script>

<style scoped>
.money{
  height: 5.3125rem;
  display: flex;
  text-align: center;
  width: 100%;
}
.money .money-item{
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;
}
.money .money-item:nth-of-type(1),
.money .money-item:nth-of-type(2) {
  border-right: 1px solid #eeeeee;
}
.money p:first-child{
  font-size: 1.5rem;
  font-weight: 700;
  color: #ff5f3e;
}
.money p span{
  font-size: 0.9rem;
  color: #666;
}

</style>
