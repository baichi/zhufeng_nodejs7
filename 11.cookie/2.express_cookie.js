//我们想自动的解析cookie，可以使用cookie-parser
//npm install cookie-parser
var express = require('express');
var cookieParser = require('cookie-parser'); //只是在res，和req上扩展了一些操作cookie方法
var app = express();
/*function cookieParser() {
    return function (req,res,next) {
        var arr = [];//[name=zfpx; max-age=4,age=zfpx; max-age=4]
        res.cookie = function (key,value,options) {
            var str = `${key}=${value}`; //拼name =
            if(options){
                if(options.maxAge){//判断是否传入属性
                    str+=`; max-age=${options.maxAge/1000}`;
                    //[name=zfpx; max-age=4]
                }
            }
            arr.push(str);
            res.setHeader('Set-Cookie',arr);
        };
        req.cookies = require('querystring').parse(req.headers['cookie'],'; ');
        next();
    }
}*/
app.use(cookieParser());
app.listen(80);
app.get('/write',function (req,res) {
    //maxAge改成毫秒
    //res.cookie可以多次写入
    res.cookie('name','zfpx');//向响应头中写入内容
    res.cookie('age','zfpx');//向响应头中写入内容
    res.send('写入成功');
});
app.get('/clear',function (req,res) {
    res.clearCookie('name'); //删除cookie中的内容
    res.clearCookie('age'); //删除cookie中的内容
    res.send(req.cookies);//从请求头中读取内容
});