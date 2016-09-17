var str = 'https://username:password@www.baidu.com:90/s?wd=asda%27d&rsv_spt=1&rsv_iqid=0xf393e09700022552&issp=1&f=3&rsv_bp=0&rsv_idx=2&ie=utf-8&tn=78040160_5_pg&rsv_enter=0&rsv_sug3=6&rsv_sug1=5&rsv_sug7=100&prefixsug=asda%27d&rsp=2&inputT=1104&rsv_sug4=1131';

var url = require('url');
console.log(url.parse(str,true));//将query解析成一个对象格式



/*Url {
        protocol: 'https:', 协议
        slashes: true, 是否带/
        auth: null, 用户名+密码username:password@
        host: 'www.baidu.com', 带有端口号的地址
        port: null,  端口
        hostname: 'www.baidu.com', 主机名
        hash: null, #hash
        search: '?wd=asda%27d&rsv_spt=1&rsv_iqid=0xf393e09700022552&issp=1&f=3&rsv_bp=0&rsv_idx=2&ie=utf-8&tn=78040160_5_pg&rsv_enter=0&rsv_sug3=6&rsv_sug1=5&rsv_sug7=100&prefixsug=asda%27d&rsp=2&inputT=1104&rsv_sug4=1131',
        query: 'wd=asda%27d&rsv_spt=1&rsv_iqid=0xf393e09700022552&issp=1&f=3&rsv_bp=0&rsv_idx=2&ie=utf-8&tn=78040160_5_pg&rsv_enter=0&rsv_sug3=6&rsv_sug1=5&rsv_sug7=100&prefixsug=asda%27d&rsp=2&inputT=1104&rsv_sug4=1131',
        pathname: '/s',  //路径名
        path: '/s?wd=asda%27d&rsv_spt=1&rsv_iqid=0xf393e09700022552&issp=1&f=3&rsv_bp=0&rsv_idx=2&ie=utf-8&tn=78040160_5_pg&rsv_enter=0&rsv_sug3=6&rsv_sug1=5&rsv_sug7=100&prefixsug=asda%27d&rsp=2&inputT=1104&rsv_sug4=1131',
        href: 'https://www.baidu.com/s?wd=asda%27d&rsv_spt=1&rsv_iqid=0xf393e09700022552&issp=1&f=3&rsv_bp=0&rsv_idx=2&ie=utf-8&tn=78040160_5_pg&rsv_enter=0&rsv_sug3=6&rsv_sug1=5&rsv_sug7=100&prefixsug=asda%27d&rsp=2&inputT=1104&rsv_sug4=1131' }*/
