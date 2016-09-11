//通过进制转化 知道base64的原理
//parseInt(); 将任意进制装换成10进制
//toString(); 是将任意进制任意进制
console.log(parseInt('11',2)); //3
console.log((0xff).toString(10));//255


//什么是base64  在base64中 最大的数字节转换成10进制为63  表示成二进制00111111
//2的几次方加到2的几次放小于64

//一个汉字3个字节 一个字节8个位    = 24位
//将3个字节拆成4个字节 每个字节前补2个0
var sum = 0;
for(var i = 0; i<6;i++){
    sum+=Math.pow(2,i);
}
console.log(sum);


var buffer = new Buffer('珠');//变成base64编码
console.log(buffer);//e7 8f a0
//将16进制转换成2进制
console.log((0xe7).toString(2));
console.log((0x8f).toString(2));
console.log((0xa0).toString(2));
//11100111 10001111 10100000
//所有位进行拼接每6位组成一组
//00111001  00111000 00111110 00100000 将拆好的内容转换成10进制
console.log(parseInt('00111001',2));
console.log(parseInt('00111000',2));
console.log(parseInt('00111110',2));
console.log(parseInt('00100000',2));
//57 56 62 32 在可见编码内取值
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
str+='ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toLowerCase();
str+='0123456789';
str+='+/';
//base64编码
console.log(str[57]+str[56]+str[62]+str[32]);
//输入一段文字或者弄一张图片读出来 转换成base64 输出结果

