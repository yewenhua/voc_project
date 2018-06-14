const jade = require('jade');

var str = jade.renderFile('./views/1.jade', {pretty: true});
console.log(str)