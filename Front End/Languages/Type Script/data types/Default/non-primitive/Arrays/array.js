var fruites = ["apple", "banana", "orange"];
console.log(fruites[0]);
console.log(fruites[1]);
console.log(fruites[2]);
fruites.map(function (a) { console.log("its advance----:", a); });
var myitems = [
    { a: 'apple', b: 'banana' },
    { a: 'apple', b: 'banana', c: 'cat' },
    { a: 'apple', b: 'banana', c: 'cat' },
    { a: 'apple', b: 'banana', d: 'dog' }
];
var item = myitems.find(function (item) { return item.d == 'dog'; });
console.log(item);
var item1 = myitems.filter(function (item) { return item.c == 'cat'; });
console.log(item1);
