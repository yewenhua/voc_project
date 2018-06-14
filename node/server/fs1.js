const fs = require('fs');

fs.readFile('./file.txt', (err, data)=>{
    if(err){
        console.log('error');
    }
    else{
        console.log(data.toString())
    }
});