//     s%3A123.qHG4QvorKSIJtVqYxp1tj65shSqRu0BvrZHA8KDO4js
//       s:123.qHG4QvorKSIJtVqYxp1tj65shSqRu0BvrZHA8KDO4js
console.log(unescape('s%3A123.qHG4QvorKSIJtVqYxp1tj65shSqRu0BvrZHA8KDO4js'));
//一般我们会使用node中的加密模块
var crypto = require('crypto');
//加盐算法
//将123 输出成hex格式的编码
//1.md5是不可逆算法
//2.不同的内容输出的长度相同
//3.不同内容输出的内容肯定不同
//4.相同内容多次输出肯定相同
console.log(crypto.createHash('md5').update('123').digest('hex'));
//b0d7c058dfeafe8f33a707d16e56c4de
//202cb962ac59075b964b07152d234b70

console.log(crypto.createHmac('sha256','jw').update('admin').digest('base64').replace('=',''));
//       s:123.qHG4QvorKSIJtVqYxp1tj65shSqRu0BvrZHA8KDO4js
//       s:admin.1L7qjehzMokmPCUBv5UUDAwTol4kPDLqB3eA7L8M6LE=
console.log(crypto.getHashes());