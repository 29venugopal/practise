var myitems = [
    { a: 'apple', b: 'banana' },
    { a: 'apple', b: 'banana', c: 'cat' },
    { a: 'apple', b: 'banana', c: 'cat' },
    { a: 'apple', b: 'banana', d: 'dog' }
];
var item = myitems.find(function (item) { return item.c == 'cat'; });
console.log(item);
