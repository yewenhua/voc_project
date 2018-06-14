//链式操作
const express = require('express');
const fs = require('fs');
const pathLib = require('path');
const expressStatic = require('express-static')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')
const bodyParser = require('body-parser')
const multer = require('multer')
const ejs = require('ejs');
const jade = require('jade');
const consolidate = require('consolidate');  //适配模板引擎

var arr = [];
for(var i=0; i<100000; i++){
    arr.push('keys_'+Math.random());
}

var objMulter = multer({
    dest: './www/upload/'
});

var server = express();
server.listen(8080);

//server.use只接受一个函数作为参数，则对所有路由作用  解析cookie
server.use(cookieParser('sign'));

//解析session
server.use(cookieSession({
    keys: arr,
    maxAge: 20 * 3600 * 1000
}));

//处理application/x-www-form-urlencoded表单
server.use(bodyParser.urlencoded({extended: false}));

////处理multipart/form-data表单，上传文件
server.use(objMulter.any());

//配置模板引擎
server.set('view engine', 'html');
//模板所在目录
server.set('views', './www/templete');
//哪种模板引擎
server.engine('html', consolidate.ejs);

server.use('/tpl', (req, res)=>{
    res.render('1.ejs', {name: 'cat'});
});

server.use('/upload', (req, res)=>{
    //console.log(req.body, req.cookies, req.session, req.files);
    //console.log(req.files);
    var newname = req.files[0].path + pathLib.parse(req.files[0].originalname).ext;
    fs.rename(req.files[0].path, newname, (err)=>{
        if(err){
            console.log('error');
        }
        else{
            console.log('success');
        }
    });

    res.end();
});

//设置静态文件路径
server.use(expressStatic('./www'));
