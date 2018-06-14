const mysql = require('mysql');

//链接
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'laravel'
});

//查询
db.query('SELECT * FROM `member`', (err, data)=>{
    if(err){
        console.log('fail');
    }
    else{
        console.log('success');
        console.log(data);
    }
});

