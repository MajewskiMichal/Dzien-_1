var fruits = ['strawberry', 'apple', 'blueberry', 'grapes', 'peach', 'cherry'];

var first_fruit = fruits.shift();
console.log(first_fruit);
console.log(fruits[0]);



var last_fruit_index = fruits.length - 1;
console.log(fruits[last_fruit_index]);

for(var fruit = 0; fruit < fruits.length; fruit++){
    console.log(fruits[fruit])
}



// function printTable(array) {
//     array.forEach(function(element) {
//     console.log(element)
//     });
//
// }
//
// printTable(fruits);