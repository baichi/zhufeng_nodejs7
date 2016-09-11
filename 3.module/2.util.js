//util是我们的核心模块 node自带的，不需要安装
var util = require('util');

//工具类中的继承 inherits ,原型链继承
function Parent() {
    this.smile = '大笑';
}
Parent.prototype.eat = function () {
    console.log('吃饭');
};
function Child() {}
//call 继承
//Child.prototype = new Parent();
//只想继承原型上的方法
// Child.prototype.__proto__ = Parent.prototype;
/*
Child.prototype = Object.create(Parent.prototype);
var c = new Child();
console.log(c.smile);*/
//node中实现的继承
util.inherits(Child,Parent);
var c = new Child;
console.log(c.eat());

//inspect 解析 console.dir()输出详细信息，dir调用的就是inspect
var obj = {name:{name:'zfpx'}};
//不可枚举的属性
Object.defineProperty(obj,'age',{
    writable:true,//是否可写
    configurable:false, //是否可配置
    enumerable:false, //是否可枚举
    value:8
});
obj.age =200;
//showHidden, depth, colors
console.log(util.inspect(obj,{showHidden:true,depth:0,colors:true}));


//判断类型
util.isArray([]);
util.isBoolean();
util.isString();
