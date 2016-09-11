console.log(this); //{}
//node中全局的this指向的就是global
(function () {
  // console.log(this);
})();
//运行了一个文件，在文件中运行时this就不是global了
a = 100;
console.log('1111',global.a); //直接var声明的变量是不挂在在global上的

//在函数中可以直接访问的变量
//1.在global中定义的任何变量都可以访问到
//2.形参可以直接被访问

//console是global上的属性
/*global.console.log('hello');

console.warn('警告');
console.log('输出日志');
console.error('错误');
console.info('信息');*/

//可以通过time来计时
console.time('start');
/*setTimeout(function () {
    console.timeEnd('start');
},2000);*/
//不是global上的属性，而是文件外函数的形参，这两个属性是不可更改的
console.log(__filename);//文件名
console.log(__dirname);//目录名

//在文件中执行代码文件外面会被套一层函数

//setTimeout 异步的方法
//setImmediate 立即
//setTimout可以设置时间，如果时间超过20ms 那肯定setTimout比较慢,setImmediate不支持传递时间
setImmediate(function () {
    console.log('马上');
});
setTimeout(function () {
    console.log('时间');
},0);
//setImmediate 是给setTimeout一些机会的

//process进程
//pwd  print working directory
//cwd current working directory
console.log('cwd',process.cwd()); //__dirname
//chdir  change diretory

//当前的工作目录是可以更改的
console.log(process.chdir('..'));
console.log('cwd',process.cwd());
console.log('__dirname',__dirname);

console.log(process.pid);
setInterval(function () {
    
},1000);

// rss: 常驻内存 heapTotal 堆的总和, heapUsed: 堆的使用量
/*var arr = [];
for(;true;){
    arr.push({});
    console.log(process.memoryUsage());
}*/

//nextTick 当前队列的末尾




/*
window.e = 100;
function a(b,c) {
    //在浏览器里可以直接访问e,b,c
}*/
