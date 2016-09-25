var express= require('./express');
var app = express();
app.listen(3000);
app.use('/user',function (req,res,next) {
    console.log('user');
    next();

}); //错误中间件，最下面
app.get('/user/add',function (req,res) {
    res.end('user');
});
app.get('/user/add2',function (req,res) {
    res.end('user');
});
//查找到有4个参数的中间件，让其执行
app.use(function (err,req,res,next) {
    res.end(err);//第一个参数是错误信息
});
