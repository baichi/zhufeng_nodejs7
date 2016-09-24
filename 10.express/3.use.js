var express= require('./express');
var app = express();
app.listen(3000);
app.use('/user/',function (req,res,next) {
    next();
})
app.get('/user/add',function (req,res) {
    res.end('user');
});
