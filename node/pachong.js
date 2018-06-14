const fs = require('fs');
const url = require('url');
const gbk = require('gbk');
const { JSDOM } = require('jsdom');
var index = 0;

GetUrl('https://detail.tmall.hk/hk/item.htm?id=520406212687&ali_trackid=2:mm_49435060_12504112_47316109:1524013736_324_883216589&spm=a2231.7774930.8223595181.1.9355785dHRHqCO&scm=20140616.darenguoji.10001.520406212687&sku_properties=1627207:28338', data => {
    console.log('我终于走出来了');
    var html = gbk.toString('utf-8', data);
    //fs.writeFile('tb.html', data, function(err){

    //});

    //虚拟DOM环境
    let DOM = new JSDOM(html);
    let document = DOM.window.document;
    console.log(document.querySelector('.shopdsr-score-con').innerHTML);
    //console.log(document);
});

function GetUrl(sUrl, success){
    index++;
    var urlObj = url.parse(sUrl);
    var http = '';
    if(urlObj.protocal == 'http'){
         http = require('http');
    }
    else{
         http = require('https');
    }

    let req = http.request({
         'hostname': urlObj.hostname,
         'path': urlObj.path
    }, res=>{
        if(res.statusCode == 200)
        {
            var arr = [];
            var str = '';
            res.on('data', buffer => {
                arr.push(buffer);
                //str = +buffer;
            });

            res.on('end', () => {
                let b = Buffer.concat(arr);
                success && success(b);
            });
        }
        else if(res.statusCode == 301 || res.statusCode == 302){
            console.log('我是第' +index+ '次重定向');
            GetUrl(res.headers.location, success);
        }
    });

    req.end();
}