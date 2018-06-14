//链式操作
const express = require('express');
const querystring = require('querystring');
var server = express();

//server.use只接受一个函数作为参数，则对所有路由作用
server.use((req, res, next)=>{
    var str = '';
    req.on('data', (data)=>{
        str += data;
    });

    req.on('end', ()=>{
        req.body = querystring.parse(str);
        next();
    });
});

server.use('/login', (req, res)=>{
    console.log(req.body);
    res.end();
});

server.listen(8080);