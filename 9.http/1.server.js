//建立http服务，就要引入http这个模块
var fs = require('fs');
var http = require('http');//核心模块
http.createServer(function (req,res) {
    res.setHeader('Content-Type','text/html;charset=utf8');
    //通过流的方式写入到响应中
    fs.createReadStream('./index.html').pipe(res);
    //res.end(''); //不要再多次调用end方法
    /*fs.readFile('./index.html',function (err,data) {
        res.end(data);
    });*/
}).listen(8080);
//如果html中引用其他文件会在次发送请求，要对每一个路径进行处理
//RESTFul;



//1)

//req代表浏览器端的请求
//res代表响应的内容
//设置编码格式
//res.writeHead(200,{'Content-Type':'text/plain;charset=utf8'});
/*res.statusCode = 200;
 res.setHeader('Content-Type','text/plain;charset=utf8');
 //res是可写流
 res.write('你好');
 res.end('你好');//此次响应结束 string/buffer*/
//res.write('你好');//write after end 当结束不能再写入内容
//服务器的特点 特定ip和特定的端口号