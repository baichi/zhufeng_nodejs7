var express = require('express');
//使用bodyparser解析请求体中内容
var bodyParser = require('body-parser');
//解析cookie
var cookieParser = require('cookie-parser');
var app = express();
//设置模板引擎
app.set('view engine', 'html'); //设置模板类型
app.engine('html', require('ejs').__express);//用ejs来渲染模板
app.set('views', __dirname);//设置模板路径
app.use(cookieParser('jw')); //调用cookieparser中间件
app.use(bodyParser.json());//解析json格式
app.use(bodyParser.urlencoded({extended: true}));//解析表单格式
app.listen(3000);
//当访问首页是返回登陆页面
app.get('/', function (req, res, next) {
    res.sendFile('login.html', {root: __dirname});
});
//当登陆时获取请求体，并且设置成cookie,跳转到用户页
app.post('/login', function (req, res) {
    res.cookie('user',req.body.username,{httpOnly:true,signed:true}); //将他保存在cookie中 实现对cookie的加密
    res.redirect('/user');
});
//获取cookie渲染用户页面
app.get('/user',function (req,res) {
    //获取cookie
    res.render('user',{user:req.signedCookies.user});
});
//退出登录清除cookie回到首页
app.get('/logout',function (req,res) {
    res.clearCookie('user');
    res.redirect('/');
});
//1.加密cookie 在设置的cookie后面加 signed:true
//2.在cookieParser('secret'); 用密钥进行加密
//3.当我们取cookie时在通过密钥加密，看是否匹配匹配可以通过signedCookie进行取出