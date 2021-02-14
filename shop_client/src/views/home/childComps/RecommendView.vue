<template>
  <div class="recommend">
    <div :key="id" v-for="(item,id) in recommends" class="recommend_item">
      <a :href="item.link">
        <img :src="item.image" alt />
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
      }
    }
  }
};
</script>

<style>
.recommend {
  display: flex;
  padding: 20px 0;
  border-bottom: 5px solid rgb(78, 77, 77);
}
.recommend_item {
  flex: 1;
  text-align: center;
}
.recommend_item img {
  width: 65px;
  height: 65px;
  margin-bottom: 10px;
}
</style>