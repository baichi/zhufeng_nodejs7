var url = require('url');
function express() {
    function app(req,res) {
        var urlObj = url.parse(req.url,true);
        var pathname = urlObj.pathname;
        var method = req.method.toLowerCase();
        var index = 0;
        function next() {
            var router = app.routers[index++]; //取出路由第一项
            if(index>app.routers.length){
                return res.end(`Cannot ${method} ${pathname}`);
            }
            if(router.method=='middleware'){ //中间件
                //查看路由是否能匹配到
                //1.如果路由是/的话肯定能匹配到
                //2.如果路径完全相等可以匹配上
                //3.如果以 路由的开头开始+'/'的则可以匹配上 /user/add /user/
                if(router.path=='/'||router.path==pathname||pathname.startsWith(router.path+'/')){
                    router.fn(req,res,next);
                }else{
                    next();
                }
            }else{//路由
                if((router.path == pathname||router.path =='*') && (router.method == method|| router.method=='all')){ //如果路由匹配到
                    router.fn(req,res);
                }else{ //路由没有匹配到
                    next();
                }
            }
        }
        next();




        /*var route = app.routers.find(function (route) {
            return (route.path == pathname||route.path =='*') && (route.method == method|| route.method=='all');
        });
        if(route){
            route.fn(req,res);
        }else{
            res.end(`Cannot ${method} ${pathname}`);
        }*/
    }
    app.listen = function (port) {
        require('http').createServer(app).listen(port);
    };
    app.routers = [];
    var methods = ['put','delete','get','post','all']; 
    methods.forEach(function (method) {
        app[method] = function (path,fn) {
            var config = {path:path,fn:fn,method:method};
            app.routers.push(config);
        };
    });
    //中间件方法,中间件和我们的路由是在同一个队列中
    app.use = function (path,fn) {
        if(typeof fn !="function"){
            fn = path; //看是否传递了path，没有传递默认是/
            path = '/';
        }
        var config = {path:path,fn:fn,method:'middleware'};
        //此method用来表示是不是中间件
        app.routers.push(config);
    };
    return app;
}
module.exports = express;