var express = require('./express'); //express是一个函数
//app是一个监听函数
var app = express();
//创建监听端口号
//路由，通过访问的路径的不同响应不同的数据
//当我们method方法为get时匹配到的路径，执行后面的函数
app.get('/',function (req,res) {
    res.end('homepage');
});
//方法随意，只要路径匹配到就执行函数
app.get('/user',function (req,res) {
    res.end('user');
});
app.get('*',function (req,res) {
    res.end('*')
});
app.all('/user',function (req,res) {
    res.end('all user');
});
app.all('*',function (req,res) {
    res.end('all user');
});
/*app.get('/user',function (req,res) {
    res.end('user');
});
app.post('/user',function (req,res) {
    res.end('post user');
});
app.delete('/user',function (req,res) {
    res.end('delete user');
});
app.put('/user',function (req,res) {
    res.end('put user');
});*/
//curl -X POST http://localhost:8080/user
//require('http').createServer(app).listen(8080);
app.listen(8080);
