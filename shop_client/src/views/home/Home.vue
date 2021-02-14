<template>
  <div id="home clear-fix">
    <!-- 标题栏 -->
    <nav-bar class="home-nav">
      <div slot="center">朝物街</div>
    </nav-bar>
    <tab-control v-show="isTabFixed" ref="tab_control1" class="fiexd" :titles="['推荐','流行','新款']"></tab-control>

    <!-- 滚动条 -->
    <scroll
      class="scroll"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
    >
      <!-- 轮播图 -->
      <home-swiper :banners="banners"></home-swiper>
      <!-- 推荐列表 -->
      <recommend-view :recommends="recommends"></recommend-view>
      <!-- 本周流行 -->
      <feature></feature>
      <!-- 二级导航 -->
      <tab-control ref="tab_control2" :titles="['推荐','流行','新款']"></tab-control>
      <!-- 商品列表 -->
      <goods-list id="clone"></goods-list>
    </scroll>
    <!-- 返回顶部按钮 -->
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
// 子组件
import HomeSwiper from "./childComps/HomeSwiper"; //轮播图
import RecommendView from "./childComps/RecommendView"; //推荐栏
import Feature from "./childComps/Feature"; //特色专栏
//公共组件
import NavBar from "components/common/navbar/NavBar"; //标题栏
import TabControl from "components/content/tabControl/TabControl"; //二级导航
import GoodsList from "components/content/goods/GoodsList"; //商品列表
import Scroll from "components/common/scroll/Scroll"; //滑动条
import BackTop from "components/content/backTop/BackTop"; //返回顶部

//网络请求
import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      scrollheight: 0
    };
  },
  components: {
    HomeSwiper,
    RecommendView,
    Feature,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  created() {
    //请求多个数据
    this.getHomeMultidata();

    //请求商品数据
    getHomeGoods("pop", 1).then(res => {});
  },
  mounted() {
    this.$bus.$on("test", () => {
      this.tabOffsetTop = this.$refs.tab_control2.$el.offsetTop;
      this.scrollheight = this.$refs.scroll.scroll.scrollerHeight;
    });
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    backClick() {
      this.$refs.scroll.scroll.scrollTo(0, 0, 500);
    },
    contentScroll(position) {
      //判断BackTop是否显示
      this.isShowBackTop = -position.y > 1000;
      //决定tabControl是否吸顶
      this.isTabFixed = -position.y > this.tabOffsetTop;
    }
  },
  deactivated() {
    this.scrollheight = this.$refs.scroll.scroll.y;
  },
  activated() {
    this.$refs.scroll.scroll.scrollTo(0, this.scrollheight, 500);
    this.$refs.scroll.scroll.refresh();
  }
};
</script>

<style scoped>
#home {
  padding-top: 44px;
  position: relative;
  left: 0;
  top: 0;
}

.home-nav {
  position: relative;
  background-color: #1a1b1f;
  color: #fff;
  z-index: 3;
}
.fiexd {
  position: relative;
  z-index: 4;
}
</style>
