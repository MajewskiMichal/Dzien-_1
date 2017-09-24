var printer = function() {
    for (var i = 0; i < 10; i++) {
        console.log("Gdy piszę kod zawszę i wszędzie używam funkcji oraz nie tworzę zmiennych globalnych")
    }
};

printer();

var i = 0;
var printer2 = function() {
    while (i != 10) {
        console.log("Gdy piszę kod zawszę i wszędzie używam funkcji oraz nie tworzę zmiennych globalnych") ;
        i++
    }
};

printer2();