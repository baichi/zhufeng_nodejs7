var fs  = require('fs');

//readdirSync 同步读取目录

//读取目录中儿子辈的内容
var list = fs.readdirSync('a');
list.forEach(function (item) {
    var flag = fs.existsSync('a/'+item);
    //一个状况是文件，一个是目录，判断文件状态 fs.stat
    if(flag){
        //判断当前状态，会返回一个状态
        var stat = fs.statSync('a/'+item);
        if(stat.isDirectory()){ //是文件夹 删除文件夹
            fs.rmdirSync('a/'+item);//删除时要保证，自己下没有内容
        }else if(stat.isFile()){ //是文件删除文件
            fs.unlinkSync('a/'+item)
        }
    }
});
//readdir读取目录  exists是否存在 stat 判断状态  isFile isDirectory

//异步删除文件夹