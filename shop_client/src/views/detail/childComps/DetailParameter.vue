<template>
  <div class="detailparameter">
    <ul :key="index" v-for="(item,index) in paralist">
      <li>
        <span class="paraname">{{item.name}}</span>
        <span class="paravalue">{{item.param}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DetailParameter",
  data() {
    return {
      paralist: [
        {
          name: "胸围",
          param: "120"
        },
        {
          name: "图案",
          param: "字母/文字/数字"
        },
        {
          name: "厂名",
          param: "广州xxxx贸易有限公司"
        },
        {
          name: "季节",
          param: "夏季"
        },
        {
          name: "颜色",
          param:
            "7124白色 7154黑色 7102白色7124白色 7154黑色 7102白色7124白色 7154黑色 7102白色"
        },
        {
          name: "厂址",
          param: "120"
        },
        {
          name: "材质",
          param: "棉"
        },
        {
          name: "领型",
          param: "圆领"
        },
        {
          name: "袖长",
          param: "短袖"
        },
        {
          name: "风格",
          param: "小清新"
        },
        {
          name: "尺码",
          param: "XL/L/M"
        },
        {
          name: "衣长",
          param: "短款（41-50cm)"
        },
        {
          name: "版型",
          param: "宽松"
        }
      ]
    };
  }
};
</script>

<style scoped>
.detailparameter ul li {
  display: flex;
  list-style: none;
  padding: 15px 0;
  margin: 0px 20px;
  border-bottom: 2px solid #eee;
}
.paraname {
  flex: 1;
  font-size: 16px;
  color: #000;
}
.paravalue {
  flex: 3;
  font-size: 18px;
  color: rgb(231, 144, 144);
}
</style>