var glob = require('glob')

// 入口名称
exports.getEntry = function() {
    /**
     * 动态查找所有入口文件
     */
    var files = glob.sync('./www/*/index.js');
    var newEntries = {};

    files.forEach(function(f){
        var name = /.*\/(www\/.*?\/index)\.js/.exec(f)[1];//得到www/timeline/index这样的文件名
        newEntries[name] = f;
    });

    return newEntries;
}

