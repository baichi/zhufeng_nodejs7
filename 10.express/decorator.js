function coffee() {
    console.log('普通咖啡');
} //想装饰要先将原有的咖啡保留下来，在重写coffee的方法
function sweetCoffee() {
    coffee();
    console.log('加糖');
}
function milk() {
    sweetCoffee();
    console.log('加奶');
}
milk()