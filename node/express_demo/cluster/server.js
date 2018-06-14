const express = require('express');
const fs = require('fs');
const pathLib = require('path');
const expressStatic = require('express-static')
const cookieParser = require('cookie-parser')
const session = require('express-session');
const connectRedis = require('connect-redis');

const bodyParser = require('body-parser')
const multer = require('multer')
const consolidate = require('consolidate');  //适配模板引擎
const routeAdmin = require('./route/routeAdmin');
const routeArticle = require('./route/routeArticle');
const routeWeb = require('./route/routeWeb');
const {checkLogin} = require('./middleware/check');
const deviceAction = require('./action/device');
const log4js= require('./lib/logConfig')
const {redisconf}  = require( './conf/redis' );
const redis = require('./lib/redis');

//根据需要获取logger
const logger = log4js.getLogger();
const accesslogger = log4js.getLogger('access');
const errlogger = log4js.getLogger('err');
const othlogger = log4js.getLogger('oth');

// 本地redis配置参数
const RedisStore = connectRedis(session);

var objMulter = multer({
    dest: './upload/'
});

var server = express();
server.listen(8080);

//server.use只接受一个函数作为参数，则对所有路由作用  解析cookie
server.use(cookieParser('sign'));

//解析session
server.use(session({
    secret: 'sign',
    saveUninitialized:true,
    resave:false,
    store:new RedisStore(redisconf),
    cookie: {
        maxAge: 10 * 60 * 1000 //10min
    }
}));

//处理application/x-www-form-urlencoded表单
server.use(bodyParser.urlencoded({extended: false}));

////处理multipart/form-data表单，上传文件
server.use(objMulter.any());

//配置模板引擎
server.set('view engine', 'html');
//模板所在目录
server.set('views', './templete');
//哪种模板引擎
server.engine('html', consolidate.ejs);

//自动记录每次请求信息，放在其他use上面
log4js.useLogger(server, accesslogger);

//route
server.use('/', routeWeb());
server.use('/admin', routeAdmin());
server.use('/article', routeArticle());


server.get('/post/:postId', function (req, res) {
    console.log(req.params.postId);
    res.send('文章详情页').end();
});

server.get('/login', function (req, res) {
    var session = req.session;
    session.count = session.count || 0;
    var n = session.count++;

    res.send('登录页'+ n).end();
});

server.get('/redis', function (req, res) {
    //var result = redis.set('key1', 'hello', 60); //60s
    //console.log('0000000');
    //console.log(result);

    (async ()=>{
        try {
            let value = await redis.get('key1');
            console.log('11111111');
            console.log(value);
        }
        catch (err) {
            console.log(err);
        }
    })();

    console.log('222222222');
    res.send('缓存页').end();
});

server.get('/logs', function (req, res) {
    logger.info('test info 1')
    errlogger.error('test error 1')
    othlogger.info('test info 2')
    res.send('日志页').end();
});

//多个callback，相当于中间件
server.get('/user', checkLogin, function (req, res, next) {
    res.send('发表文章页').end();
})

//封装 http://localhost:8080/dao?openid=123456&brand=hello
server.get('/dao', function (req, res, next) {
    deviceAction.add(req, res, next);
    res.send('dao').end();
});

server.get('/device/:id', function (req, res, next) {
    deviceAction.findOne(req, res, next);
    res.send('device').end();
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
server.use(expressStatic('./static'));


/*
 * 终止进程信号
 * 通常用来要求程序自己正常退出
 * 在收到SIGTERM信号时正常退出
 */
process.on('SIGTERM', function () {
    process.exit(0);
});
