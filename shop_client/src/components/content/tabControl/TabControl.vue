<template>
  <div class="tab_control">
    <div
      :key="index"
      v-for="(item,index) in titles"
      class="tab_control_item"
      :class="{active : index === currentIndex}"
      @click="btnSwivh(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",

  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    btnSwivh(index) {
      this.currentIndex = index;
    }
  },
  mounted() {}
};
</script>

<style>
.tab_control {
  display: flex;
  height: 40px;
  width: 100%;
  text-align: center;
  line-height: 40px;
  background-color: #fff;
}
.test {
  position: fixed;
  top: 44px;
}
.tab_control_item {
  flex: 1;
  transition: all 0.7s;
}
.tab_control_item span {
  padding: 5px 5px;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 4px solid var(--color-high-text);
}
</style>