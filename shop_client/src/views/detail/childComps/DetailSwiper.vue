<template>
  <swiper>
    <swiper-item>
      <img class="swiperdetail" @load="test" src="~assets/img/detail/model01.jpg" alt />
    </swiper-item>
    <swiper-item>
      <img class="swiperdetail" src="~assets/img/detail/model02.jpg" alt />
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "DetialSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      isLoad: true
    };
  },
  created() {},
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    test() {
      if (this.isLoad) {
        this.$bus.$emit("test1");
      }
      this.isLoad = false;
    }
  },
  mounted() {}
};
</script>

<style scoped>
.swiperdetail {
  height: 250px;
}
</style>