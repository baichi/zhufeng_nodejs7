//第一次客户端请求服务器，需要服务器端给客户端设置cookie，下次客户端在访问服务器端就会带上响应的cookie 
require('http').createServer(function (req,res) {
    //设置cookie
    //1.设置cookie时默认的path路径是当前pathname的上一级，并且要匹配到才能读出来,/表示所有全部都匹配到
    if(req.url == '/write'){
        //只有当访问/aaa的时候才会将name = zfpx写入到cookie中,并且只能在/aaa下读出内容
        //1.path
        // res.setHeader('Set-Cookie',['name=zfpx; path=/aaa','age=8']);
        //2.domain 指定域名读出cookie和写入cookie a.jd.com b.jd.com
        //限制域名
        //res.setHeader('Set-Cookie',['name=zfpc; domain=www.zf1.cn']);
        //3.httpOnly 客户端仅读，但是不能更改
        //res.setHeader('Set-Cookie',['name=zfpx; httpOnly=true']);
        //设置过期时间 expires 绝对时间 maxAge 相对时间
        //4.expires 绝对时间
        //res.setHeader('Set-Cookie',['name=zfpx; expires='+new Date(Date.now()+4000).toUTCString()]);//设置过期时间
        //5. maxAge默认是秒
        res.setHeader('Set-Cookie',['name=zfpx; max-age=4']);
        res.end('write Ok');
    }
    //读取cookie
    if(req.url =='/read'){
        //取出cookie
        var cookies = require('querystring').parse(req.headers['cookie'],'; ');
        res.end(JSON.stringify(cookies)); //将读取的cookie进行返回
    }
}).listen(8080);