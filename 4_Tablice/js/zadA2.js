function add(array) {
    var result = 0;
    for(var i = 0; i < array.length; i++) {
    result += array[i];
    }
    return result
}

// for (var i = 0, sum = 0; i < array.length; sum += array[i++])
//     ;


console.log(add([1,2,3]));


function multiply(array) {
    var res = 1;
    for(var i = 0; i < array.length; i++) {
        res *= array[i];
    }
    return res
}

console.log(multiply([1, 2, 4]));


function distFromAverage(array) {
    var avg = add(array) / array.length;
    var new_array;
    for(var i = 0; i < array.length; i++) {
        new_array.push(Math.abs(array[i]-avg));
    }
    return new_array;
}