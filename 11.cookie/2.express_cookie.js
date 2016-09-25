//我们想自动的解析cookie，可以使用cookie-parser
//npm install cookie-parser
var express = require('express');
//var cookieParser = require('cookie-parser'); //只是在res，和req上扩展了一些操作cookie方法
var app = express();
function cookieParser() {
    return function (req,res,next) {
        res.cookie = function () {
            
        };
        req.cookies = {}
    }
}
app.use(cookieParser());
app.listen(3333);
app.get('/write',function (req,res) {
    //maxAge改成毫秒
    //res.cookie可以多次写入
    res.cookie('name','zfpx',{maxAge:4000});//向响应头中写入内容
    res.cookie('age','zfpx',{maxAge:4000});//向响应头中写入内容
    res.send('写入成功');
});
app.get('/read',function (req,res) {
    res.send(req.cookies);//从请求头中读取内容
});