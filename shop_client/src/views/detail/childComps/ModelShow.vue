<template>
  <div class="modelshow">
    <div>穿着效果</div>
    <div class="model">
      <img @load="test" src="~assets/img/detail/modeltop.jpg" alt />
      <img @load="test" src="~assets/img/detail/model01.jpg" alt />
      <img @load="test" src="~assets/img/detail/model02.jpg" alt />
      <img @load="test" src="~assets/img/detail/model03.jpg" alt />
      <img @load="test" src="~assets/img/detail/model04.jpg" alt />
      <img @load="test" src="~assets/img/detail/model05.jpg" alt />
      <img @load="test" src="~assets/img/detail/model06.jpg" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "ModelShow",
  data() {
    return {
      isFalse: true
    };
  },
  methods: {
    test() {
      this.$bus.$emit("test1");
    }
  }
};
</script>

<style scoped>
.modelshow {
  margin-top: 30px;
  padding: 0 10px;
  color: #000;
  font-size: 14px;
}
.model img {
  width: 100%;
}
</style>