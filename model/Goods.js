
const mongoose = require('mongoose');

const goods = new mongoose.Schema({
  // 商品名称
  goodsName: {
    type: String,
    required: true
  },

  // 商品价格
  price: {
    type: String,
    required: true,
  },
  // 轮播图片
  swiperPhoto: {
    type: Array
  },
  // 详情图片
  detailPhoto: {
    type: Array
  }
})

const Goods = mongoose.model('goods', goods);

module.exports = {
  Goods
}