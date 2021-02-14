<template>
  <swiper>
    <swiper-item v-for="(item,id) in banners" :key="id">
      <a :href="item.link">
        <img :src="item.image" @load="test" alt />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "HomeSwiper",
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
        this.$bus.$emit("test");
      }
      this.isLoad = false;
    }
  }
};
</script>

<style>
</style>