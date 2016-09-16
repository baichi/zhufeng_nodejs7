//drain 抽干，当可写内存干了后，触发的事件
var fs = require('fs');
var ws = fs.createWriteStream('./read2.txt',{highWaterMark:3})
var count = 10;
write();
function write() {
    var flag = true;
    while (flag&&count>=0){
        //当写不进去或者count<0 则停止写入
        flag = ws.write(''+count--); //wirte和end只接受buffer和string类型
    }
}
ws.on('drain',function () {
    write(); //吃完了继续喂我
    console.log('吃饱了');
});
