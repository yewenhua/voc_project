const fs = require('fs');
const url = require('url');
const { JSDOM } = require('jsdom');
const segment = require('segment');

let seg = new segment();
seg.useDefault();

var index = 0;

GetUrl('https://www.xs8.cn/chapter/9544310303980503/25620329571297221', data => {
    console.log('我终于走出来了');
    fs.writeFile('yq.html', data, function(err){

    });

    //虚拟DOM环境
    let DOM = new JSDOM(data);
    let document = DOM.window.document;
    var myHtml = document.querySelector('.read-content').innerHTML.replace(/<[^>]+>/g, '');
    var strAarr = seg.doSegment(myHtml);
    var wordArr = [];
    var countJson = {};

    //去掉标点符号
    strAarr.forEach(data=>{
        if(data.p != 2048){
            wordArr.push(data.w);
        }
    });

    //计算个数
    wordArr.forEach(data=>{
        if(!countJson[data]){
            countJson[data] = 1;
        }
        else{
            countJson[data]++;
        }
    });

    //去掉个数为5的
    var selectArr = [];
    for(let word in countJson){
        if(countJson[word] <= 5){
            continue;
        }
        selectArr.push({
            w: word,
            c: countJson[word]
        });
    }

    selectArr.sort((json1, json2)=>json2.c-json1.c);
    console.log(selectArr);
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
                var str = '';
                res.on('data', buffer => {
                   str += buffer;
                });

                res.on('end', () => {
                    success && success(str);
                });
            }
            else if(res.statusCode == 301 || res.statusCode == 302){
                console.log('我是第' +index+ '次重定向');
                GetUrl(res.headers.location, success);
            }
    });

    req.end();
}