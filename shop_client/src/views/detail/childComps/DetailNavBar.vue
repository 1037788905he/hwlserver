<template>
  <div class="detail_navbar">
    <nav-bar>
      <div @click="backClick" class="title_left" slot="left">
        <img src="~assets/img/common/back.svg" alt />
      </div>
      <div slot="center" class="titles">
        <div
          @click="titleClick(id)"
          :class="{active : currentIndex === id}"
          :key="id"
          v-for="(item,id) in titles"
        >{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "DetailNavBar",
  components: {
    NavBar
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  methods: {
    titleClick(id) {
      this.currentIndex = id;
      this.$emit("titleClick", id);
    },
    backClick() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
.detail_navbar {
  position: absolute;
  z-index: 2;
  background-color: #fff;
  left: 0;
  top: 0;
  right: 0;
  border-left: 2px solid #fff;
  border-top: 1px solid #fff;
  font-size: 14px;
}
.titles {
  display: flex;
}
.titles div {
  margin-left: 20px;
}
.active {
  color: var(--color-high-text);
}
.title_left img {
  margin-top: 12px;
}
</style>