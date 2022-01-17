 <template >
  <div class="recommends">
    <div v-for="(item,index) in recommends" :key="index" class="recommends-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>
 <script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style scoped>
  .recommends{
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 0.8rem;
    padding: 1rem 0 0.5rem;
    border-bottom: .5rem solid #eee;
  }
  .recommends-item{
    flex: 1;
  }
  .recommends img{
    max-width: 80%;
  }
</style>