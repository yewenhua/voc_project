const fs = require('fs');

fs.writeFile('./write.txt', 'write', (err)=>{
    if(err){
        console.log('error');
    }
    else{
        console.log('success')
    }
});