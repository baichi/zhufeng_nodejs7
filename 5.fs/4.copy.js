var fs = require('fs');
//异步通过回调函数  同步通过返回值
function copy(source,target,cb) {
    fs.readFile(source,'utf8',function(err,data){
        if(err) return console.error(err);
        fs.writeFile(target,data,function(err){
            if(err) return console.log(err);
                if(typeof cb=='function'){
                    cb()
                }
            }
        );
    })
}
copy('./name.txt','./name1.txt',function () {
    console.log('创建成功');
});