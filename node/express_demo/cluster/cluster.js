const cluster = require('cluster');
const os = require('os');

var numCPUs = os.cpus().length;

if (cluster.isMaster) {
    for (var i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
    // 其它代码
    console.log('000000000000')

    //当任何一个worker停掉都会触发exit事件，可以在回调里增加fork动作重启
    cluster.on('exit', function(worker, code, signal) {
        console.log('worker ' + worker.process.pid + ' died');
        console.log('A worker process died, restarting...');
        cluster.fork();
    });
}
else {
    console.log('11111111')
    require("./server.js");
}