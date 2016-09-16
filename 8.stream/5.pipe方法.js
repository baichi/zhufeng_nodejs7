//pipe管道
var fs = require('fs');
//默认是读64 写16   读4 写1
var rs = fs.createReadStream('./read.txt',{highWaterMark:2});
var ws = fs.createWriteStream('./read2.txt',{highWaterMark:1});
//监听读取事件
rs.on('data',function (data) {
    var flag = ws.write(data);
    if(!flag){ //已经装满了，得等待我消化
        rs.pause();
    }
});
ws.on('drain',function () {
    //刚才的都吃完了，请继续喂我吧
    rs.resume();
    console.log('吃干了');
});
rs.on('end',function () {
    ws.end();
});
//pipe方法，为了防止淹没可用内存

