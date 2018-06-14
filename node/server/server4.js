//server  get
const http = require('http');
const urlLib = require('url');  //解析URL

var server = http.createServer((req, res)=>{
    var obj = urlLib.parse(req.url, true)
    var url = obj.pathname;
    var Get = obj.query;
    console.log(url, Get)
    res.end();
});

server.listen(8080);