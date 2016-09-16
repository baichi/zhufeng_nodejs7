//可读流
var fs = require('fs');
//返回可读的流
var rs = fs.createReadStream('./read.txt',{highWaterMark:10,start:0,end:3});
rs.setEncoding('utf8'); //设置编码格式
//65536   64k
//默认读取大小是64k
//encoding:null buffer
//start end开始读取位置到结束读取位置 包前包后
//flags 默认是r,读取
//highWater:65535b = 64k
console.log(rs);
//只是创建了一个可读流，我们需要打开水管
//从非流动模式 -> 流动模式，我们的流是基于事件的，需要监听ondata事件
//req.on('data')
//拼命的将文件内容进行输出，每次64k
var str = [];
rs.on('data',function (data) {
   //console.log(data); //会多次触发data事件
    str.push(data);
});
//读取结束的事件
rs.on('end',function () {
    console.log(Buffer.concat(str).toString());
});
//highWaterMark大小必须要超过编码格式限制的大小
rs.on('error',function (err) {
    console.log(err);//监听错误信息
});