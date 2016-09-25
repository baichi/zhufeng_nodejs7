## 使用express
```
var express = require('express');
var app = express();
```
## listen方法
- 监听端口号
```
app.listen(8080);
```
## 监听请求方法(路由)
```
app.get('/path',function(req,res){})
app.delete('/path',function(req,res){})
app.put('/path',function(req,res){})
app.post('/path',function(req,res){})
app.all('*',function(req,res){})
```
## 中间件
```
app.use(function(req,res,next){
    next();
});
```
## 错误中间件
```
app.use(function(err,req,res,next){
    res.end();
});
```
## req上的常用属性
```
req.path
req.query
req.hostname(req.headers['host'])
```
## 查询路径
```
app.get('/user/:id/:name/:address/user',function(req,res){})
```
## res.send; 发送方法
```
res.send() 
``` 
## ejs模板
```
//app.set('view engine','ejs');
app.set('view engine','html');
app.engine('html',require('ejs').__express);
app.set('views',__dirname+'/path')
res.render('tmpl',data+res.locals,function(err,data){})
```
## 页面中的使用
```
<%=%>
<%-%>
<%%>
<%include path%>
```