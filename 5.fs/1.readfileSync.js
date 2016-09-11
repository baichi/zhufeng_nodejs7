//使用fs模块进行对文件的操作
//fs是node中的核心模块，可以直接使用
//fs file system 文件系统
var fs = require('fs');
//node中的方法同步和异步方法是同时出现的,带sync是同步的
var school = {};
//param1 是路径 相对路径
//param2 参数 opts / 直接指定编码
var name = fs.readFileSync('./name.txt','utf8');
school.name = name;
var age = fs.readFileSync('./age.txt','utf8');
school.age = age;
//console.log(data);//所有的内容都以buffer来展现
console.log(school);
//同步的缺点会阻塞主线程，需要使用异步的方式来读取
