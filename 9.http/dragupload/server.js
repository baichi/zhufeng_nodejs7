var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var formidable = require('formidable');
var app = http.createServer(function (req,res) {
    var urlObj = require('url').parse(req.url,true);
    var pathname = urlObj.pathname;
    if(pathname == '/'){
        res.setHeader('Content-Type','text/html;charset=utf8');
        fs.createReadStream('./index.html').pipe(res);
    }else if(pathname == '/upload'){
        //formidable插件来读取内容(第三方)
        var form = new formidable.IncomingForm;
        form.parse(req,function (err,filds,files) {
            //console.log(filds,files);//放置到缓存区中
            fs.createReadStream(files.f.path).pipe(fs.createWriteStream('./upload/'+files.f.name));
        });
        //触发end事件，表示上传成功
        form.on('end',function () {
            res.end('上传成功');
        });
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
app.listen(3334);