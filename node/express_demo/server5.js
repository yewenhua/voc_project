//链式操作
const express = require('express');
const expressStatic = require('express-static')
const myBodyParser = require('./lib/my-body-parser'); //自定义中间件
var server = express();

//server.use只接受一个函数作为参数，则对所有路由作用
server.use(myBodyParser);

server.use('/login', (req, res)=>{
    console.log(req.body);
    res.end();
});

//设置静态文件路径
server.use(expressStatic('./www'));

server.listen(8080);