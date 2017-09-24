// Stwórz konstruktor dla obiektów Rectangle, który będzie przyjmować informację na temat długości i szerokości nowo stworzonej figury. Następnie przy pomocy prototypu klasy dodaj do niej następujące metody:
//
// getArea() – metoda ma zwracać pole powierzchni,
// getPerimiter() – metoda ma zwracać obwód.
// Stwórz kilka obiektów i zobacz, czy metody działają tak jak powinny.



var Rectangle  = function(height, width) {
    this.height = height;
    this.width = width;
};

Rectangle.prototype.getArea = function() {
    var result = this.height * this.width;
    console.log(result);

};

var figure1 = new Rectangle(3,7);

figure1.getArea();

Rectangle.prototype.getPermiter = function() {
    var result = 2 * this.height + 2 * this.width;
    console.log(result);
};

figure1.getPermiter();