var express = require('./express');
var app = express();
app.listen(3001);
app.get('/',function (req,res) {
    console.log(req.path);//当前访问的路径
    console.log(req.hostname);//当前的主机名
    console.log(req.query);//查询字符串
    res.end('end');
});
//  /user/1/2/home/3
app.get('/user/:id/:name/home/:address',function (req,res) {
    //如果匹配到当前路由会在req属性上增加个params属性
    res.end(JSON.stringify(req.params));//{id:1,name:2,address:3}
    //1.当放入此路由时要先将id,name,address做成一个数组存起来
    //2.当真正访问时取出id位置上代表的值，name，address在拼成一个数组
    //3.拼成一个对象
    //可以将原有的路径变为正则，用这个正则匹配出我们的1,2,3
});
//查询路径