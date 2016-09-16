var path = require('path');//核心模块
console.log(path.join('a','../b','c'));//支持上一级目录
//拼绝对路径
console.log(path.join(__dirname,'1.join.js'));
//resolve解析一个绝对路径,以当前目录进行解析
console.log(path.resolve('/a/../b/c/1.join.js'));
//如果前面带表示返回根目录
//末尾的/不会保留
//支持..
//basename/extname
//后面要指定非基础目录
console.log(path.basename('e.js','.js'));
console.log(path.extname('a.jpg')); //取扩展名
var pathname = path.basename('e.js','.js')+path.extname('a.jpg');
console.log(pathname);
//找最后一级的上一级的目录
var dir = path.dirname('a/b/c/d');
console.log(dir);
//join 连接路径 resolve 解析绝对路径 basename/extname dirname上一级目录