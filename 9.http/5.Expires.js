var http = require('http');
var fs = require('fs');
var crypto = require('crypto');
http.createServer(function (req,res) {
    if(req.url == '/'){
        fs.createReadStream('./index.html').pipe(res);
    }else if(req.url =='/index.js'){
        console.log('访问我了');
       //先给浏览器设置一个过期时间，在过期时间内，可以直接拿缓存里的文件，如果过期了在采用 last-modified Etag
        //不需要再服务器端
        //设置使用缓存的过期时间
        res.setHeader('Expires',new Date(new Date().getTime()+10*1000).toUTCString());
        //时间为绝对时间
        res.setHeader('Cache-Control','max-age=10');
        fs.createReadStream('./index.js').pipe(res);
    }
}).listen(3000);