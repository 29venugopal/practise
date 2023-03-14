var myitems = [
    { a: 'apple', b: 'banana' },
    { a: 'apple', b: 'banana', c: 'cat' },
    { a: 'apple', b: 'banana', c: 'cat' },
    { a: 'apple', b: 'banana', d: 'dog' }
];
var item1= myitems.filter(function (item) { return item.c == 'cat'; });
console.log(item1);
