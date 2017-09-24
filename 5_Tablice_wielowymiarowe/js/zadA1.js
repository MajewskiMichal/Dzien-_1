// Napisz funkcję checkArray przyjmującą jako argument tablicę dwuwymiarową z liczbami całkowitymi. Funkcja ma zwrócić nową tablicę, w której kolejnymi elementami będą wartości boolean true lub false, zależne od tego, czy każdy element tablicy drugiego wymiaru jest parzysty.

function checkArray(array) {
    var array_Check = [];

    for (var i = 0; i < array.length; i++) {
        for (var n = 0; n < array[i].length; n++) {
            if (array[i][n] % 2 !== 0) {
                array_Check.push(false);
                break;
            } else {
                array_Check.push(true);
                break;
            }
        }
    }
    return array_Check;
}

console.log(checkArray([[3, 4, 56, 773, 1], [7, 12, 0, 98, 34, 381], [12, 66, 96, 54, 10]]));






// function checkArray(array) {
//     var new_array = [];
//
//     for(var i = 0; i <array.length; i++) {
//         for (var j = 0; j < array[i].length; j++) {
//             if(array[i][j]%2 !=0) {
//                 new_array.push(false);
//
//                 break;
//             }else if(j < array[i].length && array[i][j]%2 == 0) {
//                 new_array.push(true);
//                 break;
//             }
//
//         }
//     }
//     return new_array;
// }