const express = require('express');

module.exports = function () {
    var router = express.Router();
    router.get('/', (req, res)=>{
        res.send('我是article').end();
    });
    router.get('/1.html', (req, res)=>{
        //localhost:8080/article/1.html
        res.send('456').end();
    });
    router.get('/2.html', (req, res)=>{
        //localhost:8080/article/2.html
        res.end();
    });

    return router
}