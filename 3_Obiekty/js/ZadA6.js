// Stwórz konstruktor dla obiektów Calculator. Konstruktor ma nie przyjmować żadnych danych. Każdy nowo stworzony obiekt powinien mieć pustą tablicę, w której będzie trzymać historię wywołanych operacji. Następnie przy pomocy prototypu klasy dodaj do niej następujące metody:
//
// add(num1, num2) – metoda ma dodać do siebie dwie zmienne i zwrócić wynik. Dodatkowo w tablicy operacji ma zapamiętać napis: "added num1 to num2 got result" (oczywiście z wartościami zmiennych podstawionymi w odpowiednie miejsce).
// multiply(num1, num2) – metoda ma pomnożyć przez siebie dwie zmienne i zwrócić wynik. Dodatkowo w tablicy operacji ma zapamiętać napis: "multiplied num1 with num2 got result" (oczywiście z wartościami zmiennych podstawionymi w odpowiednie miejsce).
// subtract(num1, num2) – metoda ma odjąć od siebie dwie zmienne i zwrócić wynik. Dodatkowo w tablicy operacji ma zapamiętać napis: "subtracted num1 from num2 got result" (oczywiście z wartościami zmiennych podstawionymi w odpowiednie miejsce).
// divide(num1, num2) – metoda ma podzielić przez siebie dwie zmienne i zwrócić wynik. Dodatkowo w tablicy operacji ma zapamiętać napis: "divided num1 by num2 got result" (oczywiście z wartościami zmiennych podstawionymi w odpowiednie miejsce).
// printOperations() – metoda ma wypisać wszystkie operacje zapamiętane w pamięci.
// clearoperations() – metoda ma wyczyścić wszystkie operacje z pamięci.
// Pamiętaj o używaniu this.


var Calculator = function() {
     this.operations = [];
};

Calculator.prototype.add  = function(num1, num2) {
    var result = num1 + num2;
    this.operations.push(['added', num1, 'to', num2, 'got', result].join(' '));
};

Calculator.prototype.printOperations = function() {
    console.log(this.operations)
};

Calculator.prototype.multiply = function(num1, num2) {
    var result = num1 * num2;
    this.operations.push(['multiplied', num1, 'with', num2, 'got', result].join(' '));
};

Calculator.prototype.subtract = function(num1, num2) {
    var result = num1 - num2;
    this.operations.push(['subtracted', num1, 'from', num2, 'got', result].join(' '));
};

Calculator.prototype.divide = function(num1, num2) {
    var result = num1 / num2;
    this.operations.push(['divided', num1, 'by', num2, 'got', Math.round(result * 100) / 100].join(' '));
};

Calculator.prototype.clearOperations = function() {
    this.operations.length = 0;
};

var action = new Calculator();
action.add(3,2);
action.add(4,9);
action.printOperations();
action.divide(3,7);
action.subtract(2,3);
action.multiply(3,8);
action.printOperations();
action.clearOperations();
action.printOperations();



