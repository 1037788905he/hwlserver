// 引用express框架
const express = require('express');

// 创建网站服务器
const app = express();

// 引入数据库连接模块
require('./model/connect');

// 处理路径
const path = require('path');

// 开放静态资源文件
app.use(express.static(path.join(__dirname, 'public')));

// 导入路由
const home = require('./route/home');
const admin = require('./route/admin');

// 配置一级路由
app.use('/home', home);
app.use('/admin', admin);

// 监听端口
app.listen(80)
console.log('服务器启动成功');

// 配置模板路径
app.set('views', path.join(__dirname, 'views'));
// 配置模板默认后缀
app.set('view engine', 'art');
// 配置模板引擎的后缀名
app.engine('art', require('express-art-template'))
