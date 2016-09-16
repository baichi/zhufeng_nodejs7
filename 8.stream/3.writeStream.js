var fs = require('fs');
//返回可写流对象
var ws = fs.createWriteStream('./read2.txt',{highWaterMark:5});
console.log(ws);
//highWaterMark: 16384, 16k
//encoding:utf8 默认编码
//start从哪里开始写入
//可写流有两个方法 一个是write  end
//res.end()  res.write();

var flag = ws.write('hello123',function () {
    console.log('写入成功');
});
console.log(flag); //flag表示内存是否还能放进数据
//调用end方法会将内存中的内容，全部写入到文件内
ws.end('zfpx'); //断掉电话，并且将文件关闭，写入遗言

//可写流可以调用write和end方法 如果档次内存满了，返回false

//如果写不进去了，最好是先等等，等你消化后，在吃

