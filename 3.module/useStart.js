var a = require('./1.start.js');
console.log(a); //说明获取到的是exports？
//获取的真正的是module.exports


//直接使用module.exports导出所有变量



//exports,module.exports

/*
(function (exports,require,module,__dirname,__filename) {
    this = exports
    module.exports = exports = {}
    exports = 100;
    return module.exports;
})
*/
