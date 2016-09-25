var express = require('express');
var app = express();
app.listen(8080);
app.use(function (req,res,next) {
    res.redirect = function (url) {
        res.statusCode = 302; //设置状态码
        res.setHeader('Location',url);//设置跳转头
        res.end('');//结束本次请求
    };
    next();
});
app.get('/',function (req,res) {
    //重定向，跳转到html上
    res.redirect('http://www.baidu.com');
});