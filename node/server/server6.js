//server  post
const http = require('http');
const querystring = require('querystring');
const urlLib = require('url');
const fs = require('fs');

var users={};   //{"blue": "123456", "zhangsan": "123456", "lisi": "321321"}
var server = http.createServer((req, res)=>{
    var str = '';
    var i = 0;

    req.on('data', (data)=>{
        i++;
        console.log('第' + i + '次')
        str += data;
    });

    req.on('end', ()=>{
        //console.log(str)
        var obj = urlLib.parse(req.url, true)
        const url = obj.pathname;
        const GET = obj.query;
        const POST = querystring.parse(str);

        if(url == '/user'){
            //请求接口
            switch(GET.act){
                case 'reg':
                    //1.检查用户名是否已经有了
                    if(users[GET.user]){
                        res.write('{"ok": false, "msg": "此用户已存在"}');
                    }else{
                        //2.插入users
                        users[GET.user]=GET.pass;
                        res.write('{"ok": true, "msg": "注册成功"}');
                    }
                    break;
                case 'login':
                    //1.检查用户是否存在
                    if(users[GET.user]==null){
                        res.write('{"ok": false, "msg": "此用户不存在"}');
                        //2.检查用户密码
                    }else if(users[GET.user]!=GET.pass){
                        res.write('{"ok": false, "msg": "用户名或密码有误"}');
                    }else{
                        res.write('{"ok": true, "msg": "登录成功"}');
                    }
                    break;
                default:
                    res.write('{"ok": false, "msg": "未知的act"}');
            }
            res.end();
        }
        else{
            //请求文件
            const filename = './www' + req.url;
            fs.readFile(filename, (err, data)=>{
                if(err){
                    console.log('error');
                    res.write('404');
                }
                else{
                    res.write(data);
                }
                res.end();
            });
        }
    });
});

server.listen(8080);