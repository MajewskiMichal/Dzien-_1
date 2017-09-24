// Do obiektu samochód z zadania 2. dodaj tablicę z listą dat przeglądów (niech będą to zwykłe napisy). Dodaj ten nowy atrybut poza ciałem obiektu. Dodaj też następujące metody:
//
// metodę dodającą wpis do tej tablicy,
// metodę wyświetlającą wszystkie przeglądy samochodu.
// Użyj słowa kluczowego this, żeby odwołać się do obiektu w środku metody.


var Car = {
    brand: 'polonez',
    color: 'red',
    km: 0,
    printCarinfo: function() {
        console.log(this.brand);
        console.log(this.color);
        console.log(this.km);
    },
    drive: function(km) {
        this.km += km
    }

};

Car.printCarinfo();
Car.drive(76);
Car.printCarinfo();

Car.overview_date = [];

Car.add_overview_date = function(date) {
    this.overview_date.push(date);
};

Car.printOverview = function() {
    console.log(this.overview_date)
};

Car.add_overview_date('24.10.2014');
Car.printOverview();
Car.add_overview_date('3.11.2015');
Car.printOverview();