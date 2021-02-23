// 引用express框架
const express = require('express');

// 创建网站服务器
const app = express();

// 引入数据库连接模块
require('./model/connect');

// 处理路径
const path = require('path');

// 导入路由
const home = require('./route/home');
const admin = require('./route/admin');

// 解决跨域访问
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
})

// 配置一级路由
app.use('/home', home);
app.use('/admin', admin);

// 监听端口
app.listen(80)
console.log('服务器启动成功');



