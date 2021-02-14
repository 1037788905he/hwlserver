<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: ""
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: 3,
      pullUpLoad: this.pullUpLoad
    });
    // 2.监听滚动的位置
    this.scroll.on("scroll", position => {
      this.$emit("scroll", position);
    });

    // 3.监听上拉事件
    // this.scroll.on("pullingUp", () => {});

    this.$bus.$on("test", () => {
      this.scroll.refresh();
    });
    this.$bus.$on("test1", () => {
      this.scroll.refresh();
    });
  },
  methods: {
    // scrollTo(x, y, time = 300) {
    //   this.scroll.scrollTo(x, y, time);
    // },
    finishPullUp() {
      this.scroll.finishPullUp();
    },
    // 防抖动函数
    debounce(func, delay) {
      let timer = null;
      return function(...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this.args);
        }, delay);
      };
    }
  }
};
</script>

<style scope>
.wrapper {
  position: absolute;
  top: 44px;
  left: 0;
  bottom: 49px;
}
</style>