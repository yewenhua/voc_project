var http = require('http');

var server = http.createServer((req, res)=>{
    console.log('somebody coming');
    res.write('abc');

    switch (req.url){
        case  '/1.html':
            res.write('111111111');
            break;
        case  '/1.jpg':
            res.write('2222');
            break;
        default:
            res.write('404');
            break;
    }
    res.end();
});

server.listen(8080);