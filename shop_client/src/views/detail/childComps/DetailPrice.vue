<template>
  <div class="detailprive">
    <img @load="test" src="~assets/img/detail/price.png" alt />
  </div>
</template>

<script>
export default {
  name: "DetailPrice",
  methods: {
    test() {
      this.$bus.$emit("test1");
    }
  }
};
</script>

<style scoped>
.detailprive {
  margin: 10px;
  width: 100%;
}
.detailprive img {
  width: 250%;
}
</style>