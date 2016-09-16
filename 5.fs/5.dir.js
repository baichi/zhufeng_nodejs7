var fs = require('fs');
//fs.writeFile  readFile writeSync readFileSync  appendFile appendFileSync

//同步创建文件夹,没有父亲是不允许创建儿子的
//fs.mkdirSync('a/b/c/d');
/*function mkdir(p) {
    var filePathArr = p.split('/');
    //依次创建
    for(var i = 0;i<filePathArr.length;i++){
        //在数组中截取 a    ab   abc   abcd
        //在创建前是要先判断文件是否存在
        fs.mkdirSync(filePathArr.slice(0,i+1).join('/'));
    }
}
mkdir('a/b/c/d');*/

//fs.mkdir 异步创建文件夹
//通过回掉函数处理
function mkdir(p) {
    var filePathArr = p.split('/');
    //先创建第一次，依次创建
    var index = 0;
    function make(pp) {
        //当都创建好后停止递归
        if(index>filePathArr.length){
            return;
        }
        //在创建目录前需要先判断文件是否存在，存在则不创建
        //fs.exists  fs.existsSync
        fs.exists(pp,function (flag) {
            //flag表示是否存在
            if(!flag){
                //如果不存在 创建并执行下一次
                fs.mkdir(pp,function (err) {
                    //创建完后继续递归
                    make(filePathArr.slice(0,index+++1).join('/'));
                });
            }else{
                //存在继续执行
                console.log('文件夹存在');
                make(filePathArr.slice(0,index+++1).join('/'));
            }
        });
    }
    make(filePathArr[index]);
}
mkdir('a/b/c/d');