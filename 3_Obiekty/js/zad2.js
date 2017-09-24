var Car = function(brand, color) {
    this.brand = brand;
    this.color = color;
    this.km = 0;

}

Car.prototype.printCarInfo  = function() {
    console.log(this.color + " " + this.brand + " ran " + this.km);
}

Car.prototype.drive = function(km){
    this.km += km;
}


Car.prototype.services = [];

Car.prototype.addService = function(date) {
    this.services.push(date);
}

Car.prototype.printAllServices = function() {
    for(var i=0; i<this.services.length; i++) {
        console.log("- " + this.services[i]);
    }
    console.log("inside i = " + i);
}

var mercedes = new Car('mercedes', 'black');
mercedes.printCarInfo();
mercedes.drive(38);
mercedes.printCarInfo();
mercedes.services = ['19.12.2014'];
mercedes.addService('31.1.2015');
mercedes.addService('21.12.2016');
mercedes.printAllServices();