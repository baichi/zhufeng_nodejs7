//last-modified表示最后的修改时间
//第一次浏览器访问这个内容，我将当前文件的最后修改时间，送给浏览器端
//If-Modified-Since 自从什么时间被修改了
//服务器端读取现在的最新文件看当前什么时候被修改的，如果和以前一样就表示没有修改，就告诉浏览器走缓存
var http = require('http');
var fs = require('fs');
var crypto = require('crypto');
http.createServer(function (req,res) {
    if(req.url == '/'){
        fs.createReadStream('./index.html').pipe(res);
    }else if(req.url =='/index.js'){
        //读取index.js中的内容，将其加密生成md5 ,如果和浏览器中的相同，则表示走缓存，如果不相同，取最新的
        var data = fs.readFileSync('./index.js');
        var md5 = crypto.createHash('md5').update(data).digest('hex');
        //看浏览器是第一次访问还是第二次，如果是第二次，并且值相同走缓存
        var lastMd5 = req.headers['if-none-match'];
        if(lastMd5&&md5==lastMd5){
            res.statusCode = 304;
            res.end('');
        }else{
            res.setHeader('Etag',md5)
            fs.createReadStream('./index.js').pipe(res);
        }
    }
}).listen(3000);