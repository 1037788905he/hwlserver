<template>
  <div class="detailcomment">
    <div class="header">
      <span>用户评价</span>
      <span>更多</span>
    </div>
    <div class="commentbody">
      <div class="commentitem">
        <div class="itemheader">
          <img src="~assets/img/shopname.jpg" alt />
          <span>惺惺惜惺惺</span>
        </div>
        <div class="itembody">
          <p>衣服挺合适的，点个赞，以后一定常来购买,穿上以后人都年轻了二十岁，体验太好啦</p>
          <span>2018-09-21 颜色:白色（5866）尺码M</span>
        </div>
        <div class="itemimg">
          <img @load="test" src="~assets/img/detail/model01.jpg" alt />
          <img @load="test" src="~assets/img/detail/model02.jpg" alt />
          <img @load="test" src="~assets/img/detail/model03.jpg" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailComment",
  methods: {
    test() {
      this.$bus.$emit("test1");
    }
  }
};
</script>

<style scoped>
.detailcomment {
  position: relative;
  margin: 0 20px 20px 20px;
}
.header {
  display: flex;
  justify-content: space-between;
  height: 44px;
  line-height: 44px;
  font-weight: 600;
  color: #000;

  border-bottom: 2px solid #eee;
}
.commentitem .itemheader {
  height: 50px;
  line-height: 50px;
}
.commentitem .itemheader img {
  width: 48px;
  height: 48px;
  margin-right: 20px;
  vertical-align: middle;
}
.itemimg {
  height: 100px;
  line-height: 100px;
}
.itemimg img {
  margin-left: 5px;
  width: 80px;
  height: 80px;
}
.itembody {
  padding: 10px 0 10px 0;
}
.itembody p {
  font-size: 16px;
  color: rgb(65, 63, 63);
}
.itembody span {
  font-size: 14px;
  display: block;
  margin-top: 10px;
}
</style>