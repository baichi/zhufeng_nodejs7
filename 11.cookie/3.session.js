/*
* 1.我们去理发店，理发店给我们一张卡，卡里只有cardId, 理发店将对应的卡号和钱数保留起来
* 2.将卡号做为cookie发给浏览器
* 3.将卡带到服务器端，这次我们可以通过卡号来找到对应的钱
* */
var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var uuid = require('uuid'); //安装npm install uuid
app.use(cookieParser());
app.listen(3344);
var SESSION_KEY = 'connet.sid';//发给客户端的卡
var sessionObj = {};//用来存储卡号对应的钱
app.get('/visit',function (req,res) {
    //判断用户是不是第一次，如果是第一次给一张新卡，如果不是第一次给一张旧卡
    //先获取cookie中是否有卡
    var cardId = req.cookies[SESSION_KEY];
    if(cardId&&sessionObj[cardId]){ //不是第一次了，发过卡了
        sessionObj[cardId].mny-=100;
        res.send(`现在只有${sessionObj[cardId].mny}钱了`);
    }else{ //第一次，来张卡,创建一个唯一的卡号
        var cardId = uuid(); //创建卡号
        sessionObj[cardId]={mny:500}; //在服务器上生成一个 {卡号：钱}
        res.cookie(SESSION_KEY,cardId);
        res.send(`欢迎第一次来，给你存了${sessionObj[cardId].mny}元`);
    }
});