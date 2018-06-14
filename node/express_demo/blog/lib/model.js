'use strict';
const mysql  = require( 'mysql' );
const {dbconf}  = require( '../conf/database' );

var pool  = mysql.createPool( Object.assign({
    connectionLimit : 50,
    multipleStatements : true,  //是否允许执行多条sql语句\
}, dbconf) );

/**
 * 封装query之sql不带参数占位符func
 */
var query=( sql )=>{
    return new Promise(function(resolve,reject){
        pool.getConnection(function(err,connection){
            if(err){
                reject(err);
                return;
            }
            connection.query( sql , function(error,res){
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

/**
 * 封装query之sql带占位符func
 */
var queryArgs=( sql , params )=>{
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
                resolve( res );
            });
        });
    });
};

//模块导出
module.exports = {
    query: query,
    queryArgs: queryArgs
}