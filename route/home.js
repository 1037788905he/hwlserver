const express = require('express')
const { User } = require('../model/user')
const { Goods } = require('../model/Goods')

Goods.create({
  goodsName: '基础款衬衣日系jk制服白衬衫男士春季长袖情侣装设计感小众上衣秋',
  price: "38-58",
  swiperPhoto: [
    'https://firstpic.oss-cn-beijing.aliyuncs.com/shopdata/shopdata/01/01_show1.jpg',
    'https://firstpic.oss-cn-beijing.aliyuncs.com/shopdata/shopdata/01/01_show2.jpg',
    'https://firstpic.oss-cn-beijing.aliyuncs.com/shopdata/shopdata/01/01_show3.jpg'
  ],
  detailPhoto: [
    'https://firstpic.oss-cn-beijing.aliyuncs.com/shopdata/shopdata/01/01_swiper1.jpg',
    'https://firstpic.oss-cn-beijing.aliyuncs.com/shopdata/shopdata/01/01_swiper2.jpg'
  ]
}).then((res) => {
  console.log('用户创建成功');
}).catch(err => {
  console.log(err);

})


const home = express.Router();

home.get('/goodslist', (req, res) => {
  Goods.find(function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.send(result)
    }
  })
});

module.exports = home