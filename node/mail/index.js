var accounts = require('./config').accounts;
var autocheck = require('./autocheck');

accounts.forEach(function (v) {
    autocheck(v);
});

console.log('======', '自动签到服务运行中..', '======');