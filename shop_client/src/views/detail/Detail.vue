<template>
  <div class="detial">
    <!-- 导航栏 -->
    <detail-nav-bar @titleClick="titleClick" ref="nav"></detail-nav-bar>
    <!-- 滚动部分 -->
    <!-- 轮播图 -->
    <scroll
      class="scroll"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
    >
      <!-- 轮播图 -->
      <detail-swiper></detail-swiper>
      <!-- 基本信息 -->
      <detail-base></detail-base>
      <!-- 店铺信息 -->
      <detail-shop></detail-shop>
      <!-- 广告信息 -->
      <advertising></advertising>
      <!-- 模特展示 -->
      <model-show></model-show>
      <!-- 价格说明 -->
      <detail-price></detail-price>
      <!-- 商品参数 -->
      <detail-parameter ref="param"></detail-parameter>
      <!-- 评论信息 -->
      <detail-comment ref="comment"></detail-comment>
      <!-- 推荐信息 -->
      <div class="like">猜你喜欢</div>
      <goods-list ref="recomment" id="clone"></goods-list>
    </scroll>
    <!-- 底部工具栏 -->
    <detail-bottom-bar></detail-bottom-bar>
    <!-- 回到顶部 -->
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBase from "./childComps/DetailBase";
import DetailShop from "./childComps/DetailShop";
import Advertising from "./childComps/Advertising";
import ModelShow from "./childComps/ModelShow";
import DetailPrice from "./childComps/DetailPrice";
import DetailParameter from "./childComps/DetailParameter";
import DetailComment from "./childComps/DetailComment";
import DetailBottomBar from "./childComps/DetailBottomBar";

import Scroll from "components/common/scroll/Scroll"; //滑动条
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/backTop/BackTop"; //返回顶部
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBase,
    DetailShop,
    Advertising,
    ModelShow,
    DetailPrice,
    DetailParameter,
    DetailComment,
    GoodsList,
    DetailBottomBar,
    BackTop,
    Scroll
  },
  data() {
    return {
      themeTopYs: [],
      currentIndex: 0,
      isShowBackTop: false
    };
  },
  methods: {
    titleClick(index) {
      this.$refs.scroll.scroll.scrollTo(0, -this.themeTopYs[index], 200);
    },
    backClick() {
      this.$refs.scroll.scroll.scrollTo(0, 0, 500);
    },
    //滚动到相应的位置，切换到对应的标题
    contentScroll(position) {
      this.isShowBackTop = -position.y > 1000;
      const positionY = -position.y;
      const length = this.themeTopYs.length;
      for (let i = 0; i < length - 1; i++) {
        if (
          this.currentIndex !== i &&
          i < length - 1 &&
          positionY >= this.themeTopYs[i] &&
          positionY < this.themeTopYs[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
    }
  },
  mounted() {
    this.$bus.$on("test1", () => {
      this.themeTopYs[0] = 0;
      this.themeTopYs[1] = this.$refs.param.$el.offsetTop;
      this.themeTopYs[2] = this.$refs.comment.$el.offsetTop;
      this.themeTopYs[3] = this.$refs.recomment.$el.offsetTop;
      this.themeTopYs[4] = Number.MAX_VALUE;
    });
  }
};
</script>

<style scoped>
.detial {
  position: relative;
  z-index: 10;
  background-color: #fff;
  height: 100vh;
}
.main-tab-bar {
  visibility: hidden;
}
.like {
  height: 44px;
  line-height: 44px;
  padding: 0 20px;
}
</style>