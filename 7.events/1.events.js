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
girl.on('我要没钱了',noMoney);
girl.on('我要没钱了',die);
//发射事件
girl.emit('我要没钱了','红太郎');