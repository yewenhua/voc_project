const express = require('express');
const bodyParser = require('body-parser'); //post 数据解析
const expressStatic = require('express-static')

var server = express();
var users = {
    'zhansan': '123456',
    'lisi': '123456',
    'wanger': '123456'
};

//先加工一次，然后req.body即可拿到post数据
server.use(bodyParser.urlencoded({
    extended: false,  //扩展模式
    limit: 2*1024*1024 //post 数据大小 2M
}));

server.get('/login', (req, res)=>{
    console.log(req.query); //Get Data
    res.end();
});

server.post('/login', (req, res)=>{
    console.log(req.body); //Post Data
    var POST = req.body;
    var user = POST['user'];
    var pwd = POST['pwd'];
    if(users[user] == null){
        res.send({msg: false, msg: '用户不存在'});
    }
    else{
        if(users[user] != pwd){
            res.send({msg: false, msg: '密码错误'});
        }
        else{
            res.send({msg: true, msg: '成功'});
        }
    }
    res.end();
});


//设置静态文件路径
server.use(expressStatic('./www'));

server.listen(8080);