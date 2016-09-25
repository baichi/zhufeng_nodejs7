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
app.route('/user').get(function (req,res,next) {
    res.render('home.html',{user:user});
}).post(function (req,res,next) {
}).put(function (req,res,next) {
}).delete(function (req,res,next) {
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