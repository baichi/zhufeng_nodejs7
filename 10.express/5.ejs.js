var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();
//需要安装ejs才能使用，使用模板时要设置两项
//1.设置模板类型
//2.设置模板的路径
app.set('view engine','ejs');
//__dirname+'/views'
app.set('views',path.join(__dirname,'views'));
/*app.use(function (req,res,next) {
    //先找到对应的目录文件，读出内容用我们自己的数据对象进行渲染，响应回客户端
    res.render = function (tmpl,data,fn) {
        tmpl = tmpl+(tmpl.endsWith('.ejs')?'':'.ejs');
        var filePath = app.get('views');
        var p = path.join(filePath,tmpl);
        var d = fs.readFileSync(p,'utf8');
        //采用非贪婪捕获,将页面中的内容进行替换
        d = d.replace(/<%=([\s\S]*?)%>/g,function () {
            return data[arguments[1]];
        });
        if(typeof fn =='function'){
            fn(null,d);
        }else{
           res.end(d);
        }
    };
    next();
});*/
app.get('/',function (req,res) {
    //我们渲染模板需要使用res.render()方法,通过模板的名字和数据来渲染ejs模板
    res.render('hello/hello',{hello:'zfpx',name:'<h1>123</h1>',arr:[1,2,3]});
    /*,function (err,data) {
        //将数据拿回来自己渲染
        res.end(data+'不行太短了');
    }*/
});
app.listen(3003);
/*
    ejs 1.可以使用<%=%>来引用常规字符串
        2.<%-%>可以解析我们的html
        3.<%%>可以在其中使用js代码
        4.可以通过include 引用其他模板
 */