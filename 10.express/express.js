var url = require('url');
function express() {
    function app(req,res) {
        //req,res是请求和响应
        //1. 取出请求路径
        var urlObj = url.parse(req.url,true);
        var pathname = urlObj.pathname;
        // 2.取出请求方法
        var method = req.method.toLowerCase();//要转换成小写的
        //find如果为true则返回找到的那一项，查找是否能匹配到
        var route = app.routers.find(function (route) {
            return route.path == pathname && route.method == method;
        });
        if(route){
            route.fn(req,res);
        }else{
            res.end(`Cannot ${method} ${pathname}`);
        }
    }
    //增加监听端口的方法
    app.listen = function (port) {
        //创建http服务监听端口号
        require('http').createServer(app).listen(port);
    };
    //增加get方法,创建存放路径，方法，函数的数组
    app.routers = []; //用来存放路由
    /*[
     {path:'/',fn:function(){},method:get}
     {path:'/user',fn:function(){},method:get}
       ]
    */
    app.get = function (path,fn) {
        var config = {path:path,fn:fn,method:'get'};
        app.routers.push(config); //将每一个对象都放入到数值中
    };
    return app;
}
module.exports = express;