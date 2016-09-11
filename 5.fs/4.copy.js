var fs = require('fs');
//异步通过回调函数  同步通过返回值
function copy(source,target) {
    fs.readFile(source,'utf8',function(err,data){
        if(err) return console.error(err);
        fs.writeFile(target,data,function(err){
            if(err) return console.log(err);
            console.log('copy success');
        });
    })
}
copy('./name.txt','./name1.txt');