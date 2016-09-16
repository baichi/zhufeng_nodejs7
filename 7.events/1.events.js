//run on off
//events是我们node中专门处理事件的模块，node中很多都方法，都继承于events
var eventEmitter  = require('events');
var util = require('util');
function Girl() {};
util.inherits(Girl,eventEmitter);
var girl = new Girl();
//可以进行绑定事件
function noMoney(who) {
    console.log(who+'没钱了');
}
function die(who) {
    console.log(who+'死了');
}
//addListener方法和on一样
girl.once('我要没钱了',noMoney);
//设置最大监听数，默认为10个,不会阻断程序执行，只是抛出警告
girl.setMaxListeners(2);
girl.on('我要没钱了',die);
girl.on('我要没钱了',die);
girl.on('我要没钱了',die);
//发射事件
//删除绑定的事件,删除单一绑定
// girl.removeListener('我要没钱了',die);
//移除所有监听
//girl.removeAllListeners('我要没钱了');
//获取对应的事件池
console.log(girl.listeners('我要没钱了'));
//获取监听数量
console.log(girl.listenerCount('我要没钱了'));
girl.emit('我要没钱了','红太郎');
girl.emit('我要没钱了','红太郎');
console.log(girl.listenerCount('我要没钱了'));
// 主要的api
//on emit once removeListener
