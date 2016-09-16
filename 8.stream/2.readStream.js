var fs = require('fs');
var rs = fs.createReadStream('./read.txt',{highWaterMark:3});
rs.setEncoding('utf8');//设置编码格式

rs.on('data',function (data) {
    console.log(data);
    rs.pause();//咱停接受数据
    setTimeout(function () {
        rs.resume();//恢复读取
    },3000);
});