<template>
  <div class="goods-item" @click="itemClick">
    <img src="~assets/img/goods.jpg" alt />
    <div class="goods-info">
      <p>测试</p>
      <span class="price">55</span>
      <span class="collect">测试</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  methods: {
    itemClick() {
      this.$router.push("/detal");
    }
  }
};
</script>

<style>
.goods-item {
  display: inline-block;
  padding-bottom: 40px;
  position: relative;
  text-align: center;
  border: 1px solid #eee;
  box-sizing: border-box;
  margin: 5px 5px 5px 0;
  width: 48%;
}

.goods-item img {
  margin: 10px 0;
  width: 80%;
  border-radius: 5px;
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>