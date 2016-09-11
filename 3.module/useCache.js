var val = require('./cache.js');
//在缓存对象中，通过文件名 删除对应的模块
delete require.cache[require.resolve('./cache.js')];
var val = require('./cache.js');
//val  = module.exports = {}
//模块具有缓存的功能
console.log(require.cache);
//是通过文件名（绝对路径）进行缓存的

//通过文件名获取一个绝对路径
console.log(require.resolve('./cache.js'));

//C:\Users\10354_000\Desktop\node7\3.module\cache.js
//C:\\Users\\10354_000\\Desktop\\node7\\3.module\\cache.js