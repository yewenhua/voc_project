const express = require('express');

module.exports = function () {
    var router = express.Router();
    router.use((req, res, next)=>{
        //req.url为去除了admin的login，即该子路由下的路由名称
        if(!req.session['admin_id'] && req.url != '/login'){
            res.redirect('/admin/login');
        }
        else{
            next();
        }
    });
    router.get('/', (req, res)=>{
        res.render('admin/index.ejs', {name: 'cat'});
    });
    router.get('/1.html', (req, res)=>{
        //localhost:8080/admin/1.html
        res.send('123').end();
    });
    router.get('/login', (req, res)=>{
        //localhost:8080/admin/login
        res.render('admin/login.ejs', {});
    });

    router.post('/login', (req, res)=>{
        //判断登录逻辑,成功则跳转
        res.redirect('/admin');
    });

    return router
}