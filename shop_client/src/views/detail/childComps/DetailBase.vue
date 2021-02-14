<template>
  <div class="detailbase">
    <h4>[张阿三]2018春秋季新款原宿风纯白短袖T恤男bf潮学生韩版凭借白色复古港味宽松百搭打底上衣</h4>
    <div class="price">
      <span>￥39.00</span>
      <span>
        <del>￥49.50</del>
      </span>
    </div>
    <div class="msg">
      <span>销量 1580</span>
      <span>收藏33人</span>
      <span>72小时发货</span>
    </div>
    <div class="service">
      <span>退货补运费</span>
      <span>全国包邮</span>
      <span>7天无理由退货</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBase"
};
</script>

<style scoped>
.detailbase {
  background-color: #fff;
}
.detailbase h4 {
  padding: 15px 10px;
  font-size: 18px;
  color: #000;
}
.price span {
  margin-left: 10px;
  font-size: 24px;
  color: var(--color-high-text);
}
.price span del {
  font-size: 14px;
  color: rgb(138, 138, 138);
}
.msg {
  display: flex;
  justify-content: space-between;
}
.msg span {
  padding: 10px 10px;
}
.service {
  font-family: "icomoon";
  display: flex;
  justify-content: space-between;
  border-top: 4px solid #f5f5f5;
  border-bottom: 4px solid #e4e3e3;
}
.service span {
  padding: 25px 10px;
  color: #3a3a3a;
}
</style>