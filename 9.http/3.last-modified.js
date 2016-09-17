//last-modified表示最后的修改时间
//第一次浏览器访问这个内容，我将当前文件的最后修改时间，送给浏览器端
//If-Modified-Since 自从什么时间被修改了
//服务器端读取现在的最新文件看当前什么时候被修改的，如果和以前一样就表示没有修改，就告诉浏览器走缓存
var http = require('http');
var fs = require('fs');
http.createServer(function (req,res) {
    if(req.url == '/'){
        fs.createReadStream('./index.html').pipe(res);
    }else if(req.url =='/index.js'){
        //取出头部内容，看是否有if-modified-since(全部小写)
        var stat = fs.statSync('./index.js');
        var statTime = stat.ctime.toUTCString();
        var timer = rbeq.headers['if-modified-since'];
        if(timer&&(timer==statTime)){ //如果有,并且没有被修改过
            //有if-modified-sinc头，并且两次获取的时间一致
            res.statusCode = 304; //告诉浏览器走缓存
            res.end('');//index.js请求就结束掉了
        }else{//第一次方法
            res.setHeader('Last-Modified',statTime);
            fs.createReadStream('./index.js').pipe(res);
        }
        //你设置了last-modfied 浏览器会对应送你一个if-modified-since
        //当你第一次来时我要送你一个当前index.js的最后修改时间

    }
}).listen(8080);