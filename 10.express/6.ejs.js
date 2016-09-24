var express = require('express');
var app = express();
app.listen(9999);
//设置模板引擎为html类型
app.set('view engine','html'); //虽是html类型，但是要让其使用ejs模板来渲染
app.engine('html',require('ejs').__express);
app.set('views',__dirname+'/views/hello');
app.use(function (req,res,next) {
    res.locals.title = '珠峰培训';// locals可以放置公有属性
    next();
});
app.get('/',function (req,res,next) {
    res.render('hello1');//渲染的时候会将locals属性和我我们的传入的数据进行合并
});
app.get('/user',function (req,res,next) {
    res.render('hello2')
});