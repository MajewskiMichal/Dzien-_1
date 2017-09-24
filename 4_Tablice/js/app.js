/**
 * Created by Jacek on 2016-01-11.
 */

var foo = [1, 2, 3, 4];
foo.pop();
console.log(foo);

var foo_1 = [1, 2, 3];
foo_1.splice(-1);
console.log(foo_1);

var foo_2 = ["wsiąść", "do", "pociągu"];
var str = foo_2.join(' ');
console.log(str);


var foo_3 = [1, 2, 3];
var index = foo_3.indexOf(2);
console.log(index);

var foo_4 = [1, 2, 3];
foo_4.forEach(function(element, index, array) {
    console.log("Element" + element);
});

var foo_5 = [1, 2, 3];
var anyOdd = foo_5.some(function(element, index, array) {
    return element % 2 !== 0;
});
console.log(anyOdd);

var foo_6 = [1, 2, 3];
var allEven = foo_6.every(function(element, index, array) {
    return element % 2 === 0;
});
console.log(allEven);

var foo_7 = [1, 2, 3, 4];
var bar = foo_7.map(function(element, index, array) {
    return element * 2;
});
console.log(bar);