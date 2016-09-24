//源需要匹配的字符串
var str = '/user/:id/:name/home/:address';
//真正到来的字符串
var url = '/user/1/2/home/3';
//         /user/([^/]+)//([^/]+) /home//([^/]+)
var arr = [];
//将源字符串替换成正则来匹配到来的字符串
str = str.replace(/:([^/]+)/g,function () {
    arr.push(arguments[1]);//将id name address存起来
    return '([^/]+)'
});
console.log(str);
var matchers = url.match(new RegExp(str)); //匹配出缺少的内容
console.log(matchers);
var params = {};
arr.forEach(function (item,index) {
    params[item] = matchers[index+1];
})
console.log(params);
