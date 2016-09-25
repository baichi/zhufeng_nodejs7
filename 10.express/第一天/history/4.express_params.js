var url = require('url');
function express() {
    function app(req,res) {
        var urlObj = url.parse(req.url,true);
        var pathname = urlObj.pathname;
        var method = req.method.toLowerCase();
        //path是请求的路径
        req.path = pathname;
        //请求的查询串
        req.query = urlObj.query;
        //请求的主机名
        req.hostname = req.headers['host'].split(":")[0];//小写
        var index = 0;
        function next(err) {
            var router = app.routers[index++]; //取出路由第一项
            if(err){
                //如果有错误了，要找到错误中间件
                if(router.method == 'middleware'&&router.fn.length==4){
                    //找到了错误中间件
                    router.fn(err,req,res,next);
                }else{
                    //没找到
                    next(err); //将错误继续传递下去
                }
            }else{
                if(index>app.routers.length){
                    return res.end(`Cannot ${method} ${pathname}`);
                }
                if(router.method=='middleware'&&router.fn.length==3){ //中间件
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
                    //查询路由
                    if(router.params){
                        //匹配出内容，看是否能成功匹配
                        var matchers = pathname.match(new RegExp(router.path));
                        if(matchers){
                            var params = {};
                            router.params.forEach(function (item,index) {
                                params[item] = matchers[index+1];
                            });
                            req.params = params;
                            router.fn(req,res);
                        }else{
                            next();
                        }
                    }else{
                        //普通路由
                        if((router.path == pathname||router.path =='*') && (router.method == method|| router.method=='all')){ //如果路由匹配到
                            router.fn(req,res);
                        }else{ //路由没有匹配到
                            next();
                        }
                    }
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
            //当前放进去的路由可能是查询串路由/user/:id/:name/home/:address,如果不是普通的我们需要给当前路由对象放入一个参数[id,name,address];
            var config = {path:path,fn:fn,method:method};
            if(path.includes(':')){ //判断字符串是否包含
                var params = [];
                config.path = path.replace(/:([^/]+)/g,function () {
                    params.push(arguments[1]);
                    return '([^/]+)';
                }); //替换原字符串为正则格式
                config.params = params;//放入id,name,address组成的数组
            }
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