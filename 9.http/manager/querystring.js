var querystring = require('querystring');
//他是用来解析查询字符串的格式的
var str = 'username=:123&&password=:456';
//第一个参数要转换的字符串
//第二个参数字段间的分割符
//第三个参数key value之间的分隔符
console.log(querystring.parse(str,'&&','=:'));
var obj = { username: '123', password: '456' };
console.log(querystring.stringify(obj,'&&','=:'));
//非常常用