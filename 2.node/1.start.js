function write() {
    console.log('写入代码');
}
//将后续的逻辑当作参数传入
function read(callback) {
    setTimeout(function () {
        callback();
    },2000);
}
read(write);

