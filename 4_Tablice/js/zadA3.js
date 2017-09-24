// Napisz funkcję distFromAvarage, która ma przyjmować jako argument tablicę z liczbami. Zwracana przez funkcję tablica ma przedstawiać w kazdej komórce różnicę między liczbą z danej komórki a średnią wartością tablicy. Dla uproszczenia możesz użyć funkcji z poprzedniego zadania. Np.


function add(array) {
    var result = 0;
    for (var i = 0; i < array.length; i++) {
        result += array[i];
    }
    return result
}




function distFromAverage(array) {
    var sum = add(array);
    var dist_array = [];
    for(var i = 0; i < array.length; i++ ){
       dist_array.push(Math.abs(sum / array.length - array[i]));
    }
    return dist_array;
}

console.log(distFromAverage([1, 2, 3, 4, 5, 6,7 ]))