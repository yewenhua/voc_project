const express = require('express');
const mysql = require('mysql');
const crypto = require('crypto');
const common = require('../lib/common');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'laravel'
});

module.exports = function () {
    var router = express.Router();
    router.get('/', (req, res)=>{
        res.send('我是web').end();
    });
    router.get('/1.html', (req, res)=>{
        //localhost:8080/article/1.html
        res.send('789').end();
    });
    router.get('/2.html', (req, res)=>{
        //localhost:8080/article/2.html
        res.end();
    });

    //链式操作
    router.use('/tpl', (req, res, next)=>{
        db.query('SELECT * FROM `member`', (err, data)=>{
            if(err){
                console.log('fail');
                res.status(500).send('db error').end();
            }
            else{
                console.log('success');
                //console.log(data);
                res.members = data;
                next();
            }
        });
    });

    router.use('/tpl', (req, res)=>{
        //console.log(res.members);
        db.query('SELECT * FROM `users`', (err, data)=>{
            if(err){
                console.log('fail');
                res.status(500).send('db error').end();
            }
            else{
                console.log('success');
                //console.log(data);
                res.users = data;
                var oDate = new Date();
                var timestamp = oDate.getTime();
                var timestr = common.time2date(timestamp);

                var obj = crypto.createHash('md5');
                obj.update('123456');
                var str = obj.digest('hex');
                res.render('1.ejs', {name: 'cat', members: res.members, users: res.users, timestr: timestr, str});
            }
        });
    });

    return router
}