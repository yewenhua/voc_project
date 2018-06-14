//server  get
const http = require('http');
const querystring = require('querystring');  //解析参数

var server = http.createServer((req, res)=>{
    console.log('somebody coming');

    var GET = {};

    //默认会自动请求favicon.ico，该段URL没有？号， 会报错
    if(req.url.indexOf('?') !== -1){
        var arr = req.url.split('?');
        var GET = querystring.parse(arr[1]);
        console.log(GET);
    }
    else{
        console.log('error');
    }
    res.end();
});

server.listen(8080);