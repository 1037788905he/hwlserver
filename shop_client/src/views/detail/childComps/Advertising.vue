<template>
  <div class="advertising">
    <div class="bdr_top">
      <span></span>
    </div>
    <div class="center">【2件69元】 【新品特惠】 【赠送运费险 七天无理由退货】【无忧售后】</div>
    <div class="bdr_btm">
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Advertising"
};
</script>

<style scoped>
.center {
  height: 44px;
  padding: 20px 20px;
  font-size: 14px;
  color: #000;
}
.bdr_top {
  margin-left: 10px;
  height: 2px;
  width: 100px;
  background-color: #dad8d8;
}
.bdr_top span {
  display: block;
  width: 5px;
  height: 5px;
  background: #000;
}
.bdr_btm {
  float: right;
  margin: 20px 10px 0 0;
  width: 100px;
  height: 2px;
  background-color: #dad8d8;
}
.bdr_btm span {
  float: right;
  display: block;
  width: 5px;
  height: 5px;
  background-color: #000;
}
</style>