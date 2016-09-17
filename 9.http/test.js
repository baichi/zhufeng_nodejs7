var fs = require('fs');
var stat = fs.statSync('./index.js');
console.log(stat.ctime.toUTCString());