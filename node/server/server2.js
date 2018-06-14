const http = require('http');
const fs = require('fs');

var server = http.createServer((req, res)=>{
    console.log('somebody coming');

    var filename = './www' + req.url;
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
});

server.listen(8080);