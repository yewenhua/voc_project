const express = require('express');

var server = express();

//目录1对应user
var routeUser = express.Router();
routeUser.get('/1.html', (req, res)=>{
    //localhost:8080/user/1.html
    res.send('123');
});
routeUser.post('/2.html', (req, res)=>{
    //localhost:8080/user/2.html
});
server.use('/user', routeUser); //添加到server


//目录2对应article
var routeArticle = express.Router();
routeArticle.get('/1.html', (req, res)=>{
    //localhost:8080/article/1.html
});
routeArticle.post('/2.html', (req, res)=>{
    //localhost:8080/article/1.html
});
server.use('/article', routeArticle);


server.listen(8080);

