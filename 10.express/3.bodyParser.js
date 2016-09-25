//bodyparser 用来解析请求体
// npm install body-parser --save
var express= require('express');
var app = express();
/*
var bodyParser = require('body-parser');
app.use(bodyParser.json()); //使用body-parser中间件来解析请求体
app.use(bodyParser.urlencoded({extended:true})); //使用body-parser中间件来解析请求体 form表单 a=1&b=2
*/
function bodyParser() {
    return function (req,res,next) {
        var type = req.headers['content-type'];
        var result = '';
        req.on('data',function (data) {
            result+=data;
        });
        req.on('end',function () {
            if(type=='application/json'){ //请求体是json格式
                req.body = JSON.parse(result);
            }else{
                req.body = require('querystring').parse(result);//请求体是form表单格式
            }
            next();
        });
    }
}
app.use(bodyParser());
app.listen(8080);
//请求体中的数据有两种{a:1} a=1&b=2
//xhr.setRequestHeader('Content-Type','application/json')
app.get('/',function (req,res) {
   res.sendFile('./1.html',{root:__dirname});
});
app.post('/login',function (req,res) {
    //如果使用了body-parser会在req上增加一个body属性，来帮我们存放请求体中的数据
    console.log(req.body);
    res.send(req.body);
});