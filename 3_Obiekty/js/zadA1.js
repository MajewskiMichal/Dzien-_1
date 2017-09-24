// Za pomocą prototypu dodaj metodę upperLower do wbudowanego w JavaScript obiektu String. Metoda zamieni podany ciąg znaków tak, że każdy znak nieparzysty w wyrazie będzie zamieniony na mała literę, a parzysty – na duża. Jeśli w ciągu występuje spacja, pomiń ją. Po rozwiązaniu zadania pomyśl, czy można funkcję zapisać w inny, łatwiejszy sposób.


// var String = "Smiesznie";

String.prototype.UpperLower = function() {
    var text = this;
    var result = '';
    var isCapital = false;

    for (var i = 0; i < text.length; i ++) {
        if (text.charAt(i) !== " ") {

            if(isCapital) {
                result += text.charAt(i).toUpperCase();
            } else {
                result += text.charAt(i).toLowerCase();
            }
            isCapital = !isCapital


        } else {
            result += " "
        }
    }
        return result;

};


console.log("Javascript jest super".UpperLower());
















// var Text = function(string) {
//     this.string = string;
// };
//
// var funnyText =  new Text("Smiesznie");
//
// String.prototype.UpperLower = function() {
//     var result = "";
//     for(var i = 0; i < this.string.length; i++){
//         if (i % 2 === 0) {
//            result += this.string[i].toUpperCase();
//         } else if(i % 2 !== 0) {
//             result += this.string[i].toLowerCase();
//         }
//     }
//     return result
// };
//
//
// console.log(funnyText.UpperLower());