// Napisz funkcję create2DArray przyjmującą dwie liczby całkowite (rows i columns). Zadaniem funkcji jest zwrócenie tablicy dwuwymiarowej o podanej liczbie rzędów i kolumn. Każda komórka ma być wypełniona kolejną liczbą całkowitą. Nastepnie użyj rozwiązania z zadania B1 do wypisania tej tablicy w konsoli.
// Hint: Użyj petli zagnieżdżonych.



function create2DArray(rows, columns) {
    var matrix = [];
    var element = 1;
    for (var i = 0; i < rows; i++) {
        matrix.push([]);

        matrix[i].push(new Array(columns));

        for(var j = 0; j < columns; j++) {
            matrix[i][j]= element;
            element++
        }

    }
    return matrix;
}
console.log(create2DArray(5,4));

