<template>
  <div class="wrapper" ref="aaaa">
    <ul>
      <li>12311</li>
      <li>12311</li>
      <li>12311</li>
      <li>12311</li>
      <li>12311</li>
      <li>12311</li>
      <li>12311</li>
      <li>12311</li>
      <li>12311</li>
      <li>12311</li>
      <li>12311</li>
      <li>12311</li>
      <li>12311</li>
      <li>12311</li>
      <li>12311</li>
      <li>12311</li>
      <li>12311</li>
      <li>12311</li>
      <li>12311</li>
      <li>12311</li>
      <li>12311</li>
      <li>12311</li>
      <li>12311</li>
      <li>12311</li>
      <li>12311</li>
      <li>12311</li>
      <li>12311</li>
      <li>12311</li>
      <li>12311</li>
      <li>12311</li>
      <li>12311</li>
      <li>12311</li>
      <li>12311</li>
      <li>12311</li>
      <li>12311</li>
      <li>12311</li>
      <li>12311</li>
      <li>12311</li>
      <li>12311</li>
      <li>12311</li>
      <li>12311</li>
      <li>12311</li>
      <li>12311</li>
      <li>12311</li>
      <li>12311</li>
      <li>12311</li>
      <li>12311</li>
      <li>12311</li>
      <li>12311</li>
      <li>12311</li>
      <li>12311</li>
      <li>12311</li>
      <li>12311</li>
      <li>12311</li>
      <li>12311</li>
      <li>12311</li>
      <li>12311</li>
      <li>12311</li>
      <li>12311</li>
    </ul>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Category",
  data() {
    return {
      scroll: ""
    };
  },
  created() {},
  mounted() {
    this.scroll = new BScroll(".wrapper", {});
  }
};
</script>

<style scoped>
.wrapper {
  height: 100px;
  overflow: hidden;
}
.wrapper ul {
  display: block;
  height: 1000px;
  background-color: aquamarine;
}
</style>
