//String + number
var text = "Ala ma kota";
var number = 87;

var resultAddTextToNumber = text + number;
console.log(typeof resultAddTextToNumber);
// Wynik: Ala ma kota87 -> String


/* ------- Zadania do samodzielnego wykonania ------- */

/* ----- Zadanie 4 ----- */
console.log ("--- Zadanie 4 ---");

// String + Number
var number = 7;
var str = "tekst";
var resultAddTextToNumber = number + str;
console.log(resultAddTextToNumber);
console.log(typeof resultAddTextToNumber);
// Wynik: 7tekst -> String

// Number + Number (Porównanie liczb - Boolean)
var liczba1 = 5;
var liczba2 = 8;
var wynik = liczba1 > liczba2;
console.log(wynik);
console.log(typeof wynik);
// Wynik: false -> Boolean

// Srting + Boolean
var tekst1 = "Ala ma kota ";
var prawda = true;
var result = tekst1 + prawda;
console.log(result);
console.log(typeof result);
// Wynik: Ala ma kota true -> String

// Tablica + Objekt
var tab = [3, 5, 7, 2];
var pies = {imie: "Lili", wiek: 5};
var result1 = tab + pies;
console.log(result1);
console.log(typeof result1);
// Wynik 3,5,6,2 [object Object] -> String

// Number + Special
var num = 7;
var foo = null;
var result2 = num + foo;
console.log(result2);
console.log(typeof result2);
// Wynik 7 -> Number
