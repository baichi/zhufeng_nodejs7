var fs = require('fs');
//拷贝方法
function copy(source,target) {
    fs.createReadStream(source).pipe(fs.createWriteStream(target));
}
copy('./read.txt','./read1.txt');
//小文件可以使用readfile 大文件需要使用流（异步方法）