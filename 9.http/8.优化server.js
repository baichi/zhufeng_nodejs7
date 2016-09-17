var http = require('http');
var fs = require('fs');
var path = require('path');
/*var mime = {
    '.html':'text/html',
    '.js':'application/javascript',
    '.css':'text/css'
};*/
//第三方模块 mime
var mime = require('mime');
var app = http.createServer(function (req,res) {
    var urlObj = require('url').parse(req.url,true);
    var pathname = urlObj.pathname;
    if(pathname == '/'){
        res.setHeader('Content-Type','text/html;charset=utf8');
        fs.createReadStream('./index.html').pipe(res);
    }else{
        //先读取看文件是否存在，如果不存在则返回404
        var flag = fs.existsSync('.'+pathname);
        if(flag){
            res.setHeader('Content-Type',mime.lookup(pathname)+';charset=utf8');
            fs.createReadStream('.'+pathname).pipe(res);
        }else{
            var _http_server  = require('_http_server').STATUS_CODES;
            var status = 404;
            res.statusCode = status; //设置状态吗
            res.end(_http_server[status]); //响应回状态码对应的响应短语
        }
    }
    /*else if(pathname == '/index.js'){
        res.setHeader('Content-Type','text/javascript;charset=utf8');
        fs.createReadStream('./index.js').pipe(res);
    }else if(pathname == '/index.css'){
        res.setHeader('Content-Type','text/css;charset=utf8');
        fs.createReadStream('./index.css').pipe(res);
    }else{
        var _http_server  = require('_http_server').STATUS_CODES;
        var status = 404;
        res.statusCode = status; //设置状态吗
        res.end(_http_server[status]); //响应回状态码对应的响应短语
    }*/
});
app.listen(8080);
