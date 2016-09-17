var http = require('http');
var fs = require('fs');
var app = http.createServer(function (req,res) {
    //通过路径响应会不同的内容
    console.log(req.url); //  /表示根路径，默认的
    console.log(req.method); //请求的方法
    //发送post请求 postman,通过命令行
    //curl -X POST http://localhost:8080
    console.log(req.headers); //获取请求头
    if(req.url == '/'){
        fs.createReadStream('./index.html').pipe(res);
    }else if(req.url == '/index.js'){
        fs.createReadStream('./index.js').pipe(res);
    }else{
        //响应码 对应的错误状态
        var _http_server  = require('_http_server').STATUS_CODES;
        var status = 404;
        res.statusCode = status; //设置状态吗
        res.end(_http_server[status]); //响应回状态码对应的响应短语
    }

});
app.listen(8080);
//favicon.ico 这个是网页小图标