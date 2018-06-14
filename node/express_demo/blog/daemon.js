/*
 * 守护进程
 * 用主进程来启动子进程，如果子进程死了就重启子进程
 */
var cp = require('child_process');

var worker;

function spawn(server) {
    worker = cp.spawn('node', [ server ]);
    worker.on('exit', function (code) {
        if (code !== 0) {
            spawn(server);
        }
    });
}

function main() {
    spawn('server.js');

    /*
     * 为了能够正常终止服务，让守护进程在接收到SIGTERM信号时终止服务器进程
     * 终止进程信号
     */
    process.on('SIGTERM', function () {
        /*
         * kill方法结束对应某pid的进程并发送一个信号（若没定义信号值则默认为'SIGTERM'）：
         * 父进程通过.kill方法向子进程发送SIGTERM信号
         */
        worker.kill();
        process.exit(0);
    });
}

main();