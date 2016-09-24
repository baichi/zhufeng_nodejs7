var url = require('url');
function express() {
    function app(req,res) {
        var urlObj = url.parse(req.url,true);
        var pathname = urlObj.pathname;
        var method = req.method.toLowerCase();
        var route = app.routers.find(function (route) {
            //all 和 * 默认全部匹配
            return (route.path == pathname||route.path =='*') && (route.method == method|| route.method=='all');//如果方法是all的话默认为true
        });
        if(route){
            route.fn(req,res);
        }else{
            res.end(`Cannot ${method} ${pathname}`);
        }
    }
    app.listen = function (port) {
        require('http').createServer(app).listen(port);
    };
    app.routers = []; //用来存放路由
    var methods = ['put','delete','get','post','all']; //创建方法的集合
    methods.forEach(function (method) {
        app[method] = function (path,fn) {
            var config = {path:path,fn:fn,method:method};
            app.routers.push(config);
        };
    });
    return app;
}
module.exports = express;