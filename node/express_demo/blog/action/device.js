var deviceModel = require('../model/device');

/**
 * 增加用户Action
 */
function addAction(req, res, next){
    // 获取前台页面传过来的参数
    var param = req.query;
    var promise = deviceModel.add(param);
    promise.then((data)=>{
        console.log(data);
    }, (err)=>{
        console.log(err);
    });
}

/**
 * 获取device Action
 * 执行到await的时候，async函数暂停，执行async函数之外的后面的代码，等到await异步执行完后，事件循环进入async函数，执行async函数内部后面的代码
 * 结果：0000000=>11111=>22222=>33333
 */
function findOneAction(req, res, next){
    // 获取前台页面传过来的参数
    var param = req.params;
    console.log('000000000000');
    (async ()=>{
        /*
         * await等待的虽然是promise对象，但不必写.then(..)，直接可以得到返回值
         * .then(..)不用写，.catch(..)也不用写，可以直接用标准的try catch语法捕捉错误
         * await看起来就像是同步代码，所以可以写在for循环里，但不能是forEach里
         */
        try {
            console.log('111111111');
            let device = await deviceModel.findById(param);
            console.log('333333333');
            console.log(device[0]);
        }
        catch (err) {
            console.log(err); // 这里捕捉到错误 `error`
        }
    })();
    console.log('2222222222222');
}

// exports
module.exports = {
    add: addAction,
    findOne: findOneAction
};