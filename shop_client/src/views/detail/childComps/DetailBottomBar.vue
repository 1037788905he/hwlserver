<template>
  <div class="detail-bottom-bar">
    <div class="left">
      <div>
        <div class="service"></div>客服
      </div>
      <div>
        <div class="shop"></div>店铺
      </div>
      <div>
        <div class="save"></div>收藏
      </div>
    </div>
    <div class="right">
      <div>加入购物车</div>
      <div>购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar"
};
</script>

<style scoped>
.detail-bottom-bar {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  height: 49px;
}
.left {
  display: flex;
  flex: 1;
  height: 49px;
  background-color: #fff;
}
.left > div {
  text-align: center;
  flex: 1;
  height: 49px;
  font-family: "icomoon";
}
.left > div > div {
  margin: 3px 0;
}
.service {
  font-size: 20px;
  color: #ff779b;
}
.shop {
  font-size: 20px;
}
.save {
  font-size: 20px;
}
.right {
  display: flex;
  flex: 1;
  height: 49px;
  background-color: rgb(9, 34, 34);
}
.right > div {
  flex: 1;
  text-align: center;
  height: 49px;
  line-height: 49px;
}
.right div:nth-child(1) {
  background-color: #ffdd0f;
}
.right div:nth-child(2) {
  background-color: #ff779b;
  color: #fff;
}
</style>