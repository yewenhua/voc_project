//server  post
const http = require('http');
const querystring = require('querystring');

var server = http.createServer((req, res)=>{
    var str = '';
    var i = 0;
    req.on('data', (data)=>{
        i++;
        console.log('第' + i + '次')
        str += data;
    });

    req.on('end', ()=>{
        console.log(str)
    });
    res.end();
});

server.listen(8080);