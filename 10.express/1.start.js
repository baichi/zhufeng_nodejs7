var express = require('./express'); //express是一个函数
//app是一个监听函数
var app = express();
//创建监听端口号
//路由，通过访问的路径的不同响应不同的数据
//当我们method方法为get时匹配到的路径，执行后面的函数
app.get('/',function (req,res) {
    res.end('homepage');
});
app.get('/user',function (req,res) {
    res.end('user');
});
//require('http').createServer(app).listen(8080);
app.listen(8080);
