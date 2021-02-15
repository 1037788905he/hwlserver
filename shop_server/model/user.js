// 创建用户数据集合
// 连接数据库
const mongoose = require('mongoose');
// 创建用户集合规则
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 20
  },
  email: {
    type: String,
    unique: true  //禁止插入重复字段
  },
  password: {
    type: String,
    required: true
  },
  // admin 超级管理员
  // normal 普通用户
  role: {
    type: String,
    required: true
  },
  // 0启用 1禁用
  state: {
    type: Number,
    default: 0
  }
});
// 创建集合
const User = mongoose.model('User', userSchema);

// User.create({
//   username: 'zhangsan',
//   email: 'zhangsan@net.cn',
//   password: '123456',
//   role: 'admin',
//   state: 0
// }).then(() => {
//   console.log('用户创建成功');
// }).catch(() => {
//   console.log('用户创建失败');
// })
// 将用户集合作为模块成员经进行导出
module.exports = {
  User
}