const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

var app = express();
var server = http.Server(app);
var io = socketIo(server);
var count = 0;
var onlineUsers = {};
var onlineSockets = {};

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    //监听新用户加入
    socket.on('login', function(obj){
        //将新加入用户的唯一标识当作socket的名称，后面退出的时候会用到
        socket.name = obj.userid;

        //检查在线列表，如果不在里面就加入
        if(!onlineUsers.hasOwnProperty(obj.userid)) {
            onlineUsers[obj.userid] = obj.username;
            //在线人数+1
            count++;
        }

        //保存socket对象到全局变量
        if(!onlineSockets.hasOwnProperty(obj.userid)) {
            onlineSockets[obj.userid] = socket;
        }

        //向所有客户端广播用户加入
        io.emit('login', {onlineUsers:onlineUsers, number:count, user:obj});
        console.log(obj.username+'加入了聊天室');
    });

    socket.on('disconnect', function(){
        //将退出的用户从在线列表中删除
        if(onlineUsers.hasOwnProperty(socket.name)) {
            //退出用户的信息
            var obj = {userid:socket.name, username:onlineUsers[socket.name]};

            //删除
            delete onlineUsers[socket.name];
            //在线人数-1
            count--;

            //向除了自己以外的客户端广播用户退出
            socket.broadcast.emit('logout', {onlineUsers:onlineUsers, number:count, user:obj});
            console.log(obj.username+'退出了聊天室');
        }

        //删除全局变量里的socket对象
        if(onlineSockets.hasOwnProperty(socket.name)) {
            delete onlineSockets[socket.name];
        }
    });

    socket.on('message', function(obj){
        if(obj.to.id == '') {
            //向所有客户端广播发布的消息
            io.emit('message', obj);
        }
        else{
            //私聊
            onlineSockets[obj.to.id].emit('message', obj);
            socket.emit('message', obj);
        }
    });

    socket.on('typing', function(obj){
        if(obj.to.id != '') {
            onlineSockets[obj.to.id].emit('typing', obj);
        }
    });

    socket.on('blur', function(obj){
        if(obj.to.id != '') {
            onlineSockets[obj.to.id].emit('blur', obj);
        }
    });
});

server.listen(8080, function(){
    console.log('listening on *:8080');
});