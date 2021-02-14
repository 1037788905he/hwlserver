<template>
  <div class="goodslist">
    <!-- :key="index" :goods_list_item="item" v-for="(item,index) in goods" -->
    <goods-list-item></goods-list-item>
    <goods-list-item></goods-list-item>
    <goods-list-item></goods-list-item>
    <goods-list-item></goods-list-item>
    <goods-list-item></goods-list-item>
    <goods-list-item></goods-list-item>
    <goods-list-item></goods-list-item>
    <goods-list-item></goods-list-item>
    <goods-list-item></goods-list-item>
    <goods-list-item></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  name: "GoodsList",
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    GoodsListItem
  }
};
</script>

<style>
.goodslist {
  text-align: center;
}
</style>