const jade = require('jade');
const fs = require('fs');

var str = jade.renderFile('./views/2.jade', {
    pretty: true,
    name: 'cat',
    json: {
        height: '200px',
        width: '200px'
    },
    arr: ['aaa', 'bbb', 'ccc'],
    content: '<h1>你好</h1>'
});
console.log(str)

fs.writeFile('./build/2.html', str, (err)=>{
    if(err){
        console.log('fail');
    }
    else{
        console.log('success');
    }
});