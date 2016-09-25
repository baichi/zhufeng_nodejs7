var express = require('express');
var app  = express();
app.set('view engine','html');
app.engine('html',require('ejs').__express);
app.set('views',__dirname);
var user = [
    {name:'zfpx',age:8,address:'回龙观',id:1},
    {name:'jw',age:28,address:'国风美唐',id:2},
    {name:'pp',age:38,address:'国风美唐',id:3}
];
app.listen(3003);
//restful
//匹配到为传入id的
app.get('/',function (req,res,next) {
    res.sendFile('./home.html',{root:__dirname});
});
app.route('/user').get(function (req,res,next) {
    res.send(user);
   // res.render('home.html',{user:user}); //拿到/ 中请求路径user
}).post(function (req,res,next) {
    user.push(req.body);
    res.send(req.body)
}).delete(function (req,res,next) {
    user = [];
    res.send({});
});
//匹配到传入id的
app.route('/user/:id').get(function (req,res,next) {
}).delete(function (req,res,next) {
    var id = req.params.id;
    user=user.filter(function (user) {
        return user.id!=id;
    });
    res.send({});
});
// GET /user  获取全部
// GET /user/1 获取一个
// DELETE /user/1