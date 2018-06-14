const ejs = require('ejs');

ejs.renderFile('./views/1.ejs', {
    name: 'cat',
    json: {
        height: '200px',
        width: '200px'
    },
    arr: ['aaa', 'bbb', 'ccc'],
    content: '<h1>你好</h1>'
}, (err, data)=>{
    console.log(data);
});
