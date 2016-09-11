//使用fs模块进行对文件的操作
//fs是node中的核心模块，可以直接使用
//fs file system 文件系统
var fs = require('fs');
var school = {};
//所有异步方法都通过回掉函数处理,如果看到有err参数我们需要判断是否有错误
//异步方法不好阅读 promise generator
fs.readFile('./name.txt','utf8',function (err,data) {
    if(err) {
        console.log(err);
    }
    school.name = data;
    out();
});
fs.readFile('./age.txt','utf8',function (err,data) {
    if(err) {
        console.log(err);
    }
    school.age = data;
    out()
});
function out() {
    //当对象中的属性的个数有两个时候，表示读取完毕 输出结果
    if(Object.keys(school).length == 2){
        console.log(school);
    }
}
//readFile 会像内存中读取，不能读取比内存大的文件，一般读取小文件可以直接使用readFile

/*fs.readFile('./name.txt','utf8',function (err,data) {
    if(err){
        console.log(err);
    }else{
        school.name = data;
        fs.readFile('./age.txt','utf8',function (err,data) {
            school.age = data;
            console.log(school);
        });
    }
});*/
