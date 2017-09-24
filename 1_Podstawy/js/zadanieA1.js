function mathInfo() {
    var randomNumber = Math.floor(Math.random() * 100);
    //poniżej napisz rozwiązanie zadania

     console.log(randomNumber);

    //pkt 1
    if (randomNumber % 2 == 0) {
         console.log('even')
     } else {
        console.log('odd')
    }

    //pkt 2
    var result = '';
    for (var i = 1; i <= randomNumber; i++) {
         if (randomNumber % i == 0) {
             result += i + ' ';
         }
    }
    console.log(result);

    //pkt3
    var i = randomNumber % 5;
     console.log(i);
    result = Math.pow(randomNumber, i);
    console.log(randomNumber + ' ^ ' + i + ' = ' + result)
}




//to wywołanie ma spowodować wyświetlenie w konsoli informacji z zadania
mathInfo();


// Czy liczba jest parzysta czy nieparzysta.
// Wszystkie dzielniki liczby, np. dla 10 wyświetli 5, 2, 1 (liczby mają wyświetlić się w jednej linii).
// Wyświetli wynik potęgowania liczby, wykładnikiem potęgi ma być reszta z dzielenia tej liczby przez 5.
// **Przykład dla polecenia 3.**:
// Wylosowana liczba: 8
// 8 % 5 = 3
// 8^3 = 512