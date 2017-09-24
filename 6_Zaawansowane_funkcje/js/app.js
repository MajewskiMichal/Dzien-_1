/**
 * Created by Agata on 21.01.2016.
 */



// var id = setInterval(function() {
//     console.log('jestem wywoływana co dwie sekundy');
// }, 2000
// );
//
//
// clearInterval(id);


var fooOutside = function() {
    var name = 'Jacek';
    var foo = function() {
        var age = 43;
        console.log(hi+" "+name+" "+age);
    };
    foo();
    name = "Wojtek";
    foo();
};
var hi = 'Witaj !';
fooOutside();

var nums = [5, 2, 20, 19, 4];
nums.sort();
console.log(nums);

// var nums = [5, 2, 20, 19, 4];
// nums.sort(function(a, b) {
//     return a -b;
// });

console.log(nums);