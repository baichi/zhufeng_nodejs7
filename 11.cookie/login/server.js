var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var app = express();
app.set('view engine', 'html');
app.engine('html', require('ejs').__express);
app.set('views', __dirname);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.listen(3000);
app.get('/', function (req, res, next) {
    res.sendFile('login.html', {root: __dirname});
});
app.post('/login', function (req, res) {
    res.cookie('user',req.body.username); //将他保存在cookie中
    res.redirect('/user');
});
app.get('/user',function (req,res) {
    //获取cookie
    res.render('user',{user:req.cookies.user});
});