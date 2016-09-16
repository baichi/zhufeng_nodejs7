function EventEmitter() {
    this._events = {}
}
//订阅发布模式是一种一对多的关系
EventEmitter.prototype.on = function (eventsName,callback) {
     //看当前事件是第一次绑定还是已经有了
    if(this._events[eventsName]){
        //如果第二次放函数则push进去
        this._events[eventsName].push(callback);
    }else{
        //第一次放创建一个数组
        this._events[eventsName] = [callback]
    }
};
EventEmitter.prototype.emit = function (eventsName) {
    //遍历数组的每一项
    //Array.of(...argument) == Array.prototype.slice.call(arguments,0)
    var args = Array.of(...arguments).slice(1);//截取第一项后的参数，组成一个数组列表
    this._events[eventsName].forEach((item)=>{
        item.apply(this,args);//当前函数执行并传入参数
    });
};
//多次执行只触发一次
EventEmitter.prototype.once = function (eventName,listener) {
    //先绑定，执行后移除掉此函数
    function remove(){
        listener.apply(null,arguments);
        //当函数执行完后移除掉自己
        this.removeListener(eventName, remove);
    };
    this.on(eventName, remove);//先绑定
};
EventEmitter.prototype.removeListener = function (eventsName,callback) {
    //删除对应数组中的callback
    this._events[eventsName] = this._events[eventsName].filter(function (item) {
        return item!=callback;//返回false是过滤掉
    });
};

var girl = new EventEmitter();
function noMoney(who) {
    console.log(who+'没钱了');
}
function die(who) {
    console.log(who+'死了');
}
girl.once('我要没钱了',noMoney);
girl.on('我要没钱了',die);
//发射事件
girl.removeListener('我要没钱了',die);
girl.removeListener('我要没钱了',noMoney);//此时无法删除了
girl.emit('我要没钱了','红太郎');
girl.emit('我要没钱了','红太郎');
