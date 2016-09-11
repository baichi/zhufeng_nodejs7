//var fs = require('fs');
var jw = require('jw1'); //引用node_module文件夹下的jw1文件
console.log(module.paths);//第三方模块加载路径
//模块分为三类  文件模块 ./
//第三方模块 核心模块 都是不通过./方式来引用的
//核心模块可以直接使用
//第三方模块要通过npm install,都在node_modules文件夹中