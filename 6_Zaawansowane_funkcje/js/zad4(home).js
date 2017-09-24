// function TheHighest(array) {
//     array.sort (function(a,b) {
//         return(a - b);
//     });
//     return array.pop();
//
// }
//
// console.log(TheHighest([41, 3, 6, 1, 114, 54, 64]));

function compare(a , b) {
    return b - a;
}

function max() {
    var array = [];
    for(var i = 0; i < arguments.length; i++) {
        array.push(arguments[i]);
    }

    array.sort(compare);
    return array[0];
}

console.log(max(5, 29, 6, 4, 34, 56, 2, 3));


