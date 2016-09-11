var fs = require('fs');

var data = fs.readFile('./name.txt','utf8');
//writeFileSync
//data是buffer是类型的
//writeFile方法，写入的内容可以是字符串或者buffer类型，
//写入时默认的编码为utf8类型
//flag参数来设置是追加还是写入
// fs.writeFileSync('./name2.txt',data,{flag:'a'});
fs.appendFileSync('./name2.txt',data);//内部调用的就是writeFile方法