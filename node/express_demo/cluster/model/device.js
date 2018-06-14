var db = require('../lib/model');
var sqlCommands = require('../conf/sqlCommands');

function add(param) {
    // 执行Query
    return db.queryArgs(sqlCommands.devices.insertOne, [param.openid, param.brand]);
}

function findById(param) {
    // 执行Query
    return db.queryArgs(sqlCommands.devices.findById, [param.id]);
}

// exports
module.exports = {
    add: add,
    findById: findById
};