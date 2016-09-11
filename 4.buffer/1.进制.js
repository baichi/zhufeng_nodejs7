// 2^0*1   2^1*1  2^2*1  .... 2^7*1
// ff   16^0*15 + 16*1*15
var sum = 0;
for(var i = 0; i<8;i++){
    sum+=Math.pow(2,i);
}
console.log(sum);
console.log(16*15+15);
// 17的十进制  转换成16进制的多少 11
// 3的十进制  代表2进制的多少 11
// 100的16进制是对少  6*16 + 4

//一个汉字 在utf8多少个字节  3个 而且在node中不支持gbk


//buffer是代表一段内存   内存很珍贵，一旦声明了多大就无法更改
// 三种 长度，字符串，数组

var buffer = new Buffer(3); //随机使用三个内存来展示buffer
buffer.fill(0);// 手动清空
console.log(buffer);
//buffer中的内容 要限制0-255之间
var buffer = new Buffer([-1,18,19]);
console.log(buffer);
var buffer = new Buffer('珠峰','utf8');
console.log(buffer);

//像buffer中写入内容
var buffer = new Buffer(12);
//先写入珠峰 再写入培训
//string,要写入的字符串
//offset,偏移量
//length,写入的长度
//encoding 编码格式
buffer.write('珠峰',0);//默认从同写到尾用utf8格式
buffer.write('培训',6);
//toString有截取功能
console.log(buffer.toString('utf8',0,9));

//slice方法和数组的区别
/*
var arr = [1,2,3,4];
var newArr = arr.slice(3);
newArr[0] = 100;
console.log(arr);
*/
var arr1 = [1,2];
var arr  = [arr1,1,2,3];
var newArr = arr.slice();
arr1[0] = 100;
console.log(newArr);
//slice截取出来的东西还是原buffer
var buffer = new Buffer([1,2,3]);
var newBuffer = buffer.slice(2);
newBuffer[0] = 100;
console.log(buffer);

//一旦声明buffer长度不可变
//将很多的小buffer拷贝到一个大buffer中
var buffer = new Buffer(12);
var buf1 = new Buffer('珠峰');
var buf2 = new Buffer('培训');
//targetBuffer, 目标buffer
//targetStart, 目标开始的位置
//sourceStart, 当前拷贝的内容的开始
//sourceEnd  当前拷贝内容的结束
buf1.copy(buffer,0,0,6);
buf2.copy(buffer,6,0,6);
console.log(buffer.toString());

//将多个buffer拼接到一起concat
var buf1 = new Buffer('珠');
var buf2 = new Buffer('峰');
var buf3 = new Buffer('培');
//写一个bufferConcat方法
Buffer.myConcat = function (list, length) {
    //首先判断是否传入length，没有传入length 获取总长度
    //通过长度构建一个大buffer
    //将每一个小buffer拷贝到大buffer中
    //每次拷贝后重新计算索引
    //将组成的大buffer返回，并且截取有效内容

    //判断当前是否传递了长度
    if (typeof length == "undefined") {
        length = 0;
        list.forEach(function (item) { //每一个item 就是每一个 buffer
            length += item.length;
        }); //算出总长度
    }
    //构建一个大buffer
    var result = new Buffer(length),
        curOffset = 0;
    list.forEach(function (item) { //取出每一个buffer将其拷贝到大buffer上
            item.copy(result, curOffset);
            curOffset += item.length; //维护每次拷贝的位置
    });
    return result.slice(0,curOffset);
};
console.log(Buffer.myConcat([buf1,buf2,buf3],100).toString());

//作业 写一个concat方法

