var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var querystring = require('querystring');
var user = [];
var app = http.createServer(function (req,res) {
    var urlObj = require('url').parse(req.url,true);
    var pathname = urlObj.pathname;
    if(pathname == '/'){
        res.setHeader('Content-Type','text/html;charset=utf8');
        fs.createReadStream('./index.html').pipe(res);
    }else if(pathname=='/user'){
        //判断是增删改查的哪一个
        var method = req.method; //获取请求的方法(method大小为大写)
        switch (method){
            case 'GET':
                break;
            case 'PUT':
                break;
            case 'POST':
                //增加注册的用户
                //获取请求体中的数据,需要监听data事件
                var str = '';
                req.on('data',function (data) {
                    str+=data;
                });
                req.on('end',function () {
                     //查询字符串a=1&b=2  {a:1,b:2}
                    user.push(querystring.parse(str));
                    //跳转页面 设置跳转头
                    /*
                    设置跳转
                    res.setHeader('Location','/success.html');
                    res.statusCode = 302;
                    res.end('');*/
                });
                break;
            case 'DELETE':
                break;
        }
    }else{
        var flag = fs.existsSync('.'+pathname);
        if(flag){
            res.setHeader('Content-Type',mime.lookup(pathname)+';charset=utf8');
            fs.createReadStream('.'+pathname).pipe(res);
        }else{
            var _http_server  = require('_http_server').STATUS_CODES;
            var status = 404;
            res.statusCode = status;
            res.end(_http_server[status]);
        }
    }
});
app.listen(3000);