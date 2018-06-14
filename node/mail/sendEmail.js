var email = require('./config.js').email;
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: email.host,
    port: 465,
    secure: true, // use SSL
    auth: {
        user: email.user,
        pass: email.password
    }
});

/**
 * 发送邮件
 * @param contents
 */
module.exports = function (contents) {
    transporter.sendMail({
        from: email.user,
        to: email.toUser,
        subject: 'mail success!',
        text: contents || 'is test!',
        //html: '<h1>'+ contents +'</h1>'
    }, function (error, response) {
        if (error) {
            console.log('error');
            console.log(error);
        } else {
            console.log("Message sent: " + response.response);
        }

        transporter.close(); // 如果没用，关闭连接池
    });
};