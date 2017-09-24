// **
//  * Zagnieżdżanie funkcji.
//  * Prześledź krok po kroku każdą linijkę kodu. Każdą!
//  * Spróbuj napisać komentarze dla każdej z linijek kodu
//  */


//Twój komentarz ...
// Tworzymy funkcję jedne o zakresie lokalnym dla niej samej i globalnym
function jeden() {

    //Twój komentarz ...
    // Tworzymy zmienną lokalną (zmienna 1)
    var zmienna1 = 1;

    //Twój komentarz ...
    // Tworzymy funkcję zagnieżdżoną dwa, która ma zakres lokalny dla siebie oraz funkcji jeden, a także globalny.
    function dwa() {

        //Twój komentarz ...
        // korzystmy z dostępu do zmiennej1 w funcji jeden i ją printujemy.
        console.log(zmienna1);

        //Twój komentarz ...
        // Zmienna lokalna 2, do której jest dostęp tylko z poziomu tej funkcji.
        var zmienna2 = 3;
    }

    //Twój komentarz ...
    // wywołujemy funkcję dwa()
    dwa();

    //Twój komentarz ...
    // chcemy printnąć zmienną dwa ale nie mamy do niej dostępu z poziomu funkcji jeden.
    console.log(zmienna2)
}

//Twój komentarz ...
// wywołujemy funkcję jeden co anam wyprintuje zmienną jeden.
jeden();