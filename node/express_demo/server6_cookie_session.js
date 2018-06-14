//链式操作
const express = require('express');
const expressStatic = require('express-static');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

var server = express();
var sign = 'ilovethisgame';
var arr = [];
for(var i=0; i< 100000; i++){
    arr.push('sign_'+ Math.random());
}

//cookie中间件, 获取cookie， 下方可直接使用req.cookies
server.use(cookieParser(sign));

//session中间件, 获取session， 下方可直接使用req.session
server.use(cookieSession({
    keys : ['aaa', 'bbb', 'ccc'],  ////循环使用秘钥加密session
    //keys: arr
    maxAge: 2 * 3600 * 1000 //2h
}));

server.use('/aaa/1.html', (req, res)=>{
    //给cookie签名秘钥
    //req.secret = sign;

    //发送cookie， path指定路径以及该路径子路径
    res.cookie('user', 'cat', {path: '/aaa', maxAge: 30 * 24 * 60 * 60 * 1000, signed: true});

    //未签名
    console.log(req.cookies);

    //签名版
    console.log(req.signedCookies);

    //删除cookie
    //res.clearCookie('user');


    if(req.session['count'] == null){
        req.session['count'] = 1;
    }
    else{
        req.session['count']++;
    }
    console.log(req.session['count']);

    //删除session
    //delete req.session

    res.send('ok');
});

//设置静态文件路径
server.use(expressStatic('./www'));

server.listen(8080);