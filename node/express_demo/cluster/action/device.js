var deviceModel = require('../model/device');
var sqlCommands = require('../conf/sqlCommands');
var redis = require('../lib/redis');
var common = require('../lib/common');

/**
 * 增加用户Action
 */
function addAction(req, res, next){
    // 获取前台页面传过来的参数
    var param = req.query;
    (async ()=>{
        try {
            let res = await deviceModel.add(param);
            console.log(res)
        }
        catch (err){
            console.log(err);
        }
    })();
}

/**
 * 获取device Action
 * 执行到await的时候，async函数暂停，执行async函数之外的后面的代码，等到await异步执行完后，事件循环进入async函数，执行async函数内部后面的代码
 */
function findOneAction(req, res, next){
    // 获取前台页面传过来的参数
    var param = req.params;
    (async ()=>{
        /*
         * await等待的虽然是promise对象，但不必写.then(..)，直接可以得到返回值
         * .then(..)不用写，.catch(..)也不用写，可以直接用标准的try catch语法捕捉错误
         * await看起来就像是同步代码，所以可以写在for循环里，但不能是forEach里
         */
        try {
            let res = '';
            let key = common.getKey(sqlCommands.devices.findById, [param.id]);
            let cacheValue = await redis.get(key);
            if(!cacheValue) {
                let device = await deviceModel.findById(param);
                res = device;
                console.log('0000000000');
                console.log(res);
            }
            else{
                res = cacheValue
                console.log('111111111111');
                console.log(res);
            }
        }
        catch (err) {
            console.log(err); // 这里捕捉到错误 `error`
        }
    })();
}

// exports
module.exports = {
    add: addAction,
    findOne: findOneAction
};