<template>
  <div class="detailshop">
    <div class="shopname">
      <img src="~assets/img/shopname.jpg" alt />
      <span>潮男潮女</span>
    </div>
    <div class="shopmsg">
      <div class="left">
        <div class="sales">
          <p>5.5万</p>
          <p>总销量</p>
        </div>
        <div class="sales">
          <p>233</p>
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="right">
        <div>
          描述相符 4.5
          <span>高</span>
        </div>
        <div>
          价格合理 5
          <span>高</span>
        </div>
        <div>
          质量满意 4.5
          <span>高</span>
        </div>
      </div>
    </div>
    <div class="btn">
      <button>进店逛逛</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShop"
};
</script>

<style scoped>
.detailshop {
  padding: 25px 10px;
  background-color: #fff;
}
.shopname img {
  width: 60px;
  height: 60px;
  vertical-align: middle;
}
.shopname span {
  margin-left: 10px;
}
.shopmsg {
  display: flex;
  color: #000;
  font-size: 14px;
}
.shopmsg .left {
  display: flex;
  flex: 1;
}
.sales {
  padding: 20px 0;
  flex: 1;
  text-align: center;
}
.sales p {
  margin-bottom: 5px;
}
.shopmsg .right {
  padding: 10px 0px;
  flex: 1;
  text-align: left;
}
.right div {
  margin-left: 50px;
  margin-bottom: 5px;
}
.right span {
  float: right;
  display: inline-block;
  margin-right: 20px;
  width: 16px;
  height: 16px;
  background-color: #8eb179;
  color: #fff;
}
.btn {
  text-align: center;
}
.btn button {
  width: 300px;
  height: 30px;
  border: 0;
  background-color: #f5f5f5;
}
</style>