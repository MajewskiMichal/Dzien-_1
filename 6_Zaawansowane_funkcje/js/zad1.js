// Napisz funkcję boilEgg, która jako argument przyjmie czas w sekundach, a jej wywołanie spowoduje, że po zadanym czasie na konsoli wyświetli się komunikat "jajko ugotowane". Dodatkowo co 5 sekund, podczas gotowania w konsoli wyświetl napis "jajko się gotuje". Przetestuj swoją funkcję dla 30 sekund (czas gotowania).


function BoilEgg() {
    var boiling_info = setInterval(function(){
        console.log('boiling...');
    }, 5000);

    var EggTimeout = setTimeout(function() {
        console.log('The egg is boiled');
        clearInterval(boiling_info)
    }, 30000);

}

BoilEgg();



