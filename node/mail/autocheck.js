var CryptoJS = require('crypto-js');
var request = require('superagent');
var events = require("events");
var sendEmail = require('./sendEmail');

var emitter = new events.EventEmitter();

//监听checkIn事件
emitter.on("checkIn", function () {
    console.log('checkIn事件发生');
});

var headers = {
    'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.186 Safari/537.36',
};

var urls = {
    login: 'https://www.oschina.net/action/user/hash_login?from=',
    checkIn: 'https://www.oschina.net/'
};

function AutoCheck(account) {
    this.account = account;

    this.cookie = {
        value: null,
        expires: null
    };

    this.init();
}

AutoCheck.prototype = {
    constructor: AutoCheck,

    init: function () {
        var that = this;

        that.checkIn(function () {
            sendEmail(that.account.user + '，签到完毕。 ' + new Date());
            console.log('======', '签到完毕，' + that.account.user, '======');
        });
    },

    // 登录
    _login: function (cb) {
        var that = this;

        request
            .post(urls.login)
            .set(headers)
            //.type('form')
            .send({
                email: that.account.user,
                pwd: CryptoJS.SHA1(that.account.password).toString(),
                verifyCode: '',
                save_login: 1,
            })
            //.redirects(0) // 防止页面重定向
            .end(function (err, result) {
                //console.log(result.headers['set-cookie']);
                var cookie = result.headers['set-cookie'];
                that.cookie = {
                    value: cookie,
                    expires: null
                };

                console.log('_login callback');
                cb(that.cookie);
            });
    },

    // 签到
    checkIn: function (cb) {
        var that = this;

        //触发事件
        emitter.emit("checkIn", 'param')

        that._login(function (cookie) {
            request
                .get(urls.checkIn)
                .set(headers)
                .set('Cookie', cookie.value)
                .end(function (err, result) {
                    console.log('checkIn callback');
                    cb();
                });
        });
    }
};


module.exports = function (account) {
    return new AutoCheck(account);
};