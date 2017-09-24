// Napisz funkcję print2DArray, która jako argument przyjmuje tablicę dwuwymiarową. Następnie funkcja ta ma wypisać w konsoli zawartość tej tablicy.
//


// var foo = [1, 2, 3];
// foo.forEach(function(element, index, array) {
//     console.log("Element" + element);
// });

var print2DArray = function(array) {
    for(var i = 0; i < array.length; i++){
        console.log(array[i])
    }
};




print2DArray([[3, 4, 56, 773, 1], [7, 12, 0, 98, 34, 381], [12, 66, 96, 54, 10]]);