'use strict';
const mysql  = require( 'mysql' );
const {dbconf}  = require( '../conf/database' );

var pool  = mysql.createPool( {
    connectionLimit : 50,
    multipleStatements : true,  //是否允许执行多条sql语句\
    ...dbconf
} );
//将结果已对象数组返回
var findAll=( sql , params )=>{
    return new Promise(function(resolve,reject){
        pool.getConnection(function(err,connection){
            if(err){
                reject(err);
                return;
            }
            connection.query( sql , params , function(error,res){
                connection.release();
                if(error){
                    reject(error);
                    return;
                }
                resolve(res);
            });
        });
    });
};
//返回一个对象
var findOne=( sql , params )=>{
    return new Promise(function(resolve,reject){
        pool.getConnection(function(err,connection){
            if(err){
                reject(err);
                return;
            }
            connection.query( sql , params , function(error,res){
                connection.release();
                if(error){
                    reject(error);
                    return;
                }
                resolve( res[0] || null );
            });
        });
    });
};

//执行代码，返回执行结果
var execute=(sql , params )=>{
    return new Promise(function(resolve,reject){
        pool.getConnection(function(err,connection){
            if(err){
                reject(err);
                return;
            }
            connection.query( sql , params , function(error,res){
                connection.release();
                if(error){
                    reject(error);
                    return;
                }
                console.log('affectedRows: '+res.affectedRows);
                resolve( res );
            });
        });
    });
}

//模块导出
module.exports = {
    FINDALL : findAll ,
    FINDONE : findOne ,
    EXECUTE : execute
}