const redis = require('redis');
var client = redis.createClient();
client.on('connect', ()=>{

});

module.exports = client;