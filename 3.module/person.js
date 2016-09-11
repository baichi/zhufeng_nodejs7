function Person() {
    this.name = 'xxx';
}
Person.prototype.eat = function () {
    console.log('吃');
}
Person.prototype.home = [1,2,3];

// exports = Person; 错误的
module.exports = Person;
