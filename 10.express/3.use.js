var express= require('./express');
var app = express();
app.listen(3000);
app.use('/user',function (req,res,next) {
    console.log('user');
    next();
})
app.get('/user/add',function (req,res) {
    res.end('user');
});
app.get('/user/add2',function (req,res) {
    res.end('user');
});

