var fs = require('fs');
//从后往前判断，如果上一级没有，在找上一级，如果当前存在则，从当前目录下依次创建剩余的
var path = require('path');
var flag = fs.existsSync('./');
console.log(flag);

function mkdir(p,fn) {
    fs.exists(p,function (flag) {
        //先判断是否存在
        if(flag){
            fn();
        }else{
            //创建当前时，因为不存在，但是在找上一级时，还需要创建这一级，那么需要将这级的创建，当作回调函数传入
            mkdir(path.dirname(p),function () {
                fs.mkdir(p,fn);
            });
        }
    });
}
/*fs.mkdir('/',function () {
    fs.mkdir('a',function () {
        fs.mkdir('a/b',function () {
            fs.mkdir('a/b/c',function () {
                fs.mkdir('a/b/c/d',function () {
                    fn();
                })
            })
        })
    })
})*/





mkdir('a/b/c/d',function () {
    console.log('创建成功');
})