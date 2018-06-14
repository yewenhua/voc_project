'use strict';
const mysql  = require( 'mysql' );
const redis = require('./redis');
const {dbconf}  = require( '../conf/database' );
const common = require('../lib/common');

var pool  = mysql.createPool( Object.assign({
    connectionLimit : 50,
    multipleStatements : true,  //是否允许执行多条sql语句\
}, dbconf) );

/**
 * 封装query之sql不带参数占位符func
 */
var query=( sql )=>{
    return new Promise(function (resolve, reject) {
        pool.getConnection(function (err, connection) {
            if (err) {
                reject(err);
                return;
            }
            connection.query(sql, function (error, res) {
                connection.release();
                if (error) {
                    reject(error);
                    return;
                }
                storeCache(sql , null, res, 60 * 60);
                resolve(res);
            });
        });
    });
};

/**
 * 封装query之sql带占位符func
 */
var queryArgs=( sql , params )=>{
    return new Promise(function (resolve, reject) {
        pool.getConnection(function (err, connection) {
            if (err) {
                reject(err);
                return;
            }

            connection.query(sql, params, function (error, res) {
                connection.release();
                if (error) {
                    reject(error);
                    return;
                }
                storeCache(sql , params, res, 60 * 60);
                resolve(res);
            });
        });
    });
};


var storeCache = (sql, params, value, expires)=>{
    if(sql.indexOf('select') !== -1 || sql.indexOf('SELECT') !== -1) {
        var key = common.getKey(sql, params);
        redis.set(key, JSON.stringify(value), expires);
    }
}

//模块导出
module.exports = {
    query: query,
    queryArgs: queryArgs
}