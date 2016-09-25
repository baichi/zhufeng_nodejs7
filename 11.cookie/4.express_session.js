/*
* 使用express中的session  npm install express-session
* 帮你解析session
* */
var express = require('express');
var session = require('express-session');
var app = express();
app.listen(9999);
app.use(session({
    secret:'jw',//用此密码加密cookie
    resave:true,//是否重新存储
    saveUninitialized:true,//初始化保存
}));
app.get('/visit',function (req,res) {
   //是否是第一次来
    if(req.session.mny||req.session.mny==0){ //自动取出cookie 查看是否存在
        req.session.mny-=10;
        res.send(req.session.mny+'');
    }else{
        req.session.mny = 100; //自动给你发一张卡,
        res.send(req.session.mny+'');
    }
});