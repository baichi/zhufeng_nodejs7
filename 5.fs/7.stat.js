var fs = require('fs');
fs.stat('./age.txt',function (err,stat) {
       console.log(stat); //文件的当前状态
       /* atime: 2016-09-11T09:34:25.841Z, //访问的时间
          mtime: 2016-09-11T09:34:25.842Z, //修改的时间
          ctime: 2016-09-11T09:34:25.853Z, //change修改的时间
          birthtime: 2016-09-11T09:34:21.973Z //文件出生的时间
      */
})

