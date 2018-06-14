const querystring = require('querystring');

module.exports = (req, res, next)=>{
    var str = '';
    req.on('data', (data)=>{
        str += data;
    });

    req.on('end', ()=>{
        req.body = querystring.parse(str);
        next();
    });
}