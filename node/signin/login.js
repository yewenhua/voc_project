let CryptoJS = require('crypto-js');
let request = require('request');

//登陆post地址
let url = 'https://www.oschina.net/action/user/hash_login?from=';
//登陆的用户邮箱和密码
let user = {
    email: '13600672232',
    pwd: '25cec5d8',
};
//登陆post的所有数据
let datas = {
    email: user.email,
    pwd: CryptoJS.SHA1(user.pwd).toString(),
    verifyCode: '',
    save_login: 1,
};

//设置头部
let headers = {
    'User-Agent': `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36`,
};

let opts = {
    url: url,
    method: 'POST',
    headers: headers,
    form: datas,
};

//模拟登陆 error, response, body
request(opts, (e, r, b) => {
    //console.log(r.headers['set-cookie']);
    //登陆后访问首页
    let opts = {
        url: "https://www.oschina.net/",
        headers: {
            'User-Agent': `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36`,
            Cookie: r.headers['set-cookie'], //这里是登陆后得到的cookie,(重点)
        }
    };

    request(opts, (e, r, b) => {
        if(!e){
            console.log('登陆成功');
        }
        else{
            console.log('登陆失败');
        }
    });
});