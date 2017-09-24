// Napisz funkcję liczącą pole i obwód okręgu. Funkcja przyjmuje promień tej figury geometrycznej jako argument. Jeśli przekazany argument jest nieodpowiedniego typu, to funkcja ma zwrócić false.

function Circle(r) {
    if (typeof r !== "number") {
        return false;
    } else {
        return [2 * 3.14 * r , 3.14 * Math.pow(r, 2)];
    }
}

console.log(Circle(4));