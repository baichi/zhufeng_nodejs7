var Person = require('./person');
//自动添加.js .json
//require方法是同步的，能通过返回值拿到的都是同步的，异步都是通过回调函数来处理的
var p = new Person();
p.eat = '吃';
console.log(p.eat);
p.home[0] = 100;
console.log(p.home);