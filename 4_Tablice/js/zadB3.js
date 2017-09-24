// Napisz funkcję factors, która ma przyjmować tylko jeden argument – liczbę, która musi być większa od 0. Funkcja ta ma zwracać tablicę zawierającą wszystkie dzielniki podanej liczby (w kolejności malejącej). Jeżeli liczba jest mniejsza lub równa 0, to funkcja ma zwracać pustą tablicę.
//
// factors(2) => [2, 1]
// factors(54) => [54, 27, 18, 9, 6, 3, 2, 1]
// factors(-4) => []



function factors(number) {
    var factor_array = [];
    if (number > 0) {
        for(var i = 1; i <=number; i++) {
            if (number % i === 0) {
                factor_array.push(i)
            }
        }
    }
    return factor_array.reverse()
}

 console.log(factors());
//
// function factors(num) {
//     var result = [];
//     for(var i=num; i>0; i--) {
//         if(num % i === 0) {
//             result.push(i);
//         }
//     }
//     return result;
// }