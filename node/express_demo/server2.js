const express = require('express');
const querystring = require('querystring');
const expressStatic = require('express-static')

var server = express();
var users = {
    'zhansan': '123456',
    'lisi': '123456',
    'wanger': '123456'
};
server.get('/login', (req, res)=>{
    console.log('get');
    var user = req.query['user'];
    var pwd = req.query['pwd'];
    //console.log(req.query); //get方式传输的数据

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

server.post('/login', (req, res)=>{
    var str = '';
    console.log('post');
    req.on('data', (data)=>{
        str += data;
    });

    req.on('end', ()=>{
        const POST = querystring.parse(str);
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
});

//设置静态文件路径
server.use(expressStatic('./www'));

server.listen(8080);