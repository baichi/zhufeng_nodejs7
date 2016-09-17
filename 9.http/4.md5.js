//crypto是我们的加密模块
var crypto = require('crypto');
console.log(crypto.getHashes());
//加密算法
//md5的特点，
//1.不可逆
//2.不同的内容输出的长度相同
//3.不同的内容输出的内容不同
console.log(crypto.createHash('md5').update('1123%123').digest('hex'));
//c4ca4238a0b923820dcc509a6f75849b
//bea43f5f7ad39e2d184cb16885043d42
