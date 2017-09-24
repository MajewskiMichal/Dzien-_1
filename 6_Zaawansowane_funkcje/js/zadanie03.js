/**
 * Funkcje wyższego rzędu.
 * Prześledź krok po kroku każdą linijkę kodu. Każdą!
 * Spróbuj napisać komentarze dla każdej z linijek kodu
 */

//Twój komentarz ...
// Tworzymy funkcję sortArray()
function sortArray() {

    //Twój komentarz ...
    // Tworzymy tablicę
    var points = [41, 3, 6, 1, 114, 54, 64];

    //Twój komentarz ...
    // Tworzymy funkcję wyższego rzędu, która ma za zadanie posortować tablicę points.
    points.sort(function(a, b) {
        //Twój komentarz ...
        // wykonujemy działanie odejmowania na argumentach przekazanych do funkcji aby sortownie zostało potraktowane algebraicznie.
        return a-b;
    });

    //Twój komentarz ...
    // zwracamy posortowaną tablicę.

    return points;

}

//Twój komentarz ...
// wywołujemy funkcję nadrzędną.
sortArray();
