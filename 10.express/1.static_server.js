var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();
//如果lib下有index.html会优先访问lib下的
app.use(express.static(__dirname+'/lib'));//使用静态文件中间件，
/*function static(p) {
    //返回中间件函数
    return function (req,res,next) {
        //通过路径判断文件是否存在
        var absPath = path.join(p,req.path);
        var flag = fs.existsSync(absPath);
        console.log(absPath,flag);
        if(flag&&req.path!='/'){ //默认判断文件是否存在 /也为存在
 fs.createReadStream(absPath).pipe(res);
 }else{
 next();
 }
    }
}*/
//静态文件之间件 可以使用多次，配置多个静态目录
//app.use(static(__dirname));
app.listen(8080);
app.get('/',function (req,res) {
    //res.sendFile(path.resolve('1.html')); //绝对路径
    res.sendFile('./1.html',{root:__dirname});//相对路径必须增加root属性
});

//配置静态服务，
