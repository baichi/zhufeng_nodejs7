var express = require('express');
var app = express();
app.listen(3002);
app.use(function (req,res,next) {
    res.send = function (msg) {//自定义send方法
        if(typeof msg == 'string'||Buffer.isBuffer(msg)){
            res.setHeader('Content-Type','text/plain;charset=utf8');
            res.end(msg);
        }else if(typeof msg == 'object'){
            res.setHeader('Content-Type','application/json;charset=utf8');
            res.end(JSON.stringify(msg));
        }else if(typeof msg =='number'){
            var _http_server = require('_http_server').STATUS_CODES;
            res.end(_http_server[msg]);
        }
    };
    next();//扩展完方法后要调用next让其继续执行
});
app.get('/',function (req,res) {
    res.send(['name']);//默认end方法只能传入buffer或者字符串
    //如果传入的内容是数字会装换成状态码
    //如果是对象型号会自动的将内容装换成对象
    //会自动设置响应头
});


