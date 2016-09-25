var express = require('express');
var app = express();
app.listen(3000);
//防盗链
//1.先判断是否有refer
    //1.判断host 和 refer是否相等
    //2.如果当前refer为允许访问状态则可以访问
    //3.给张假图，防止盗链
//如果没有说明图片是直接打开的那么可以访问
function check(whiteList) {
    return function (req,res,next) {
        var refer = req.headers['referer']; //获取refer
        if(refer){
            var urlObj = require('url').parse(refer,true);
            if(urlObj.hostname == req.hostname){//主机名和引用地址为同一个地址
                next();
            }else if(whiteList.indexOf(urlObj.hostname)>-1){//当前主机允许你访问
                next();
            }else{
                res.sendFile('./1.jpg',{root:__dirname+'/img'});
            }
        }else{
            next();
        }
    }
}
app.use('/img',check(['127.0.0.1','www.zf2.cn'])); //白名单
app.use(express.static(__dirname)); //当前路径为静态目录


