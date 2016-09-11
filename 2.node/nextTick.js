console.log('a客人点餐');
console.log('b客人点餐');
setImmediate(function () {
    console.log('立即去扫地');
})
process.nextTick(function () {
    console.log('家里有事');
    setImmediate(function () {
        console.log('立即去扫地2');
    });
});
console.log('c客人点餐');

// nextTick > setImmediate >= setTimeout(0) > io读写