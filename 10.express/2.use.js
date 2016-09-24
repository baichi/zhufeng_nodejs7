var express = require('express');
var app = express();
app.listen(8080);
//中间件，作用是，扩展了req,res的方法，可以抽取公有逻辑
//一般是在，路由之前执行
//1.可以决定是否继续向下执行 next，如果调用next则可以继续向下执行,否则就卡住了
//2.可以匹配路径,默认不写 / 匹配所有
//3.从头到尾部req,res是同一个对象
//4.中间件可以写多个
//需求获取当前访问到路由的时间
app.use('/user', function (req,res,next) {
    req.timer = Date.now(); // 获取第一个时间;
    end = res.end;//先将原有的方法进行保存
    res.end = function (str) { //开始装饰一个新的函数
        var newTimer = Date.now();
        end.apply(res,[newTimer-req.timer+str]); //调用原来的函数
    };
    next();
});
app.get('/user/add',function (req,res) {
    res.end('');
});
app.get('/user/mny',function (req,res) {
    res.end('');
});