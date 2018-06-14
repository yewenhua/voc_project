const express = require('express');

var server = express();

server.use('/1.html', (req, res)=>{
    res.send('gen');
    res.end();
});

server.use('/2.html', (req, res)=>{
    res.send('aaa');
    res.end();
});

server.get('/3.html', (req, res)=>{
    res.send('bbb');
    res.end();
});

server.post('/4.html', (req, res)=>{
    res.send('ccc');
    res.end();
});

server.listen(8080);