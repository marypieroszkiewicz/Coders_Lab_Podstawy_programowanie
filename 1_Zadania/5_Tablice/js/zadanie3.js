/* ------- Zadania z wykładowcą - Tablice ------- */

/* ----- Zadanie 3 ----- */
console.log ("--- Zadanie 3 ---");

var string =  "My name is Bond, James Bond";

var stringArray = string.split(" ");//Dzielimy string po spacjach - otrzymujemy tablicę
var stringToPrint = "";
for(var i=0; i<stringArray.length; i++){
    stringToPrint+=stringArray[i].length;
    if(i<stringArray.length-1){//nie jest to ostatni element
        stringToPrint+=', '; //dodaje przecinek tylko gdy nie jest to ostatni element
    }
}
console.log(stringToPrint);



var string =  "My name is Bond, James Bond";

var stringArray = string.split(" ");//Dzielimy string po spacjach - otrzymujemy tablicę
console.log(stringArray);

var stringToPrint = "";
for(var i=0; i<stringArray.length; i++){
    stringToPrint+=stringArray[i].replace(',','').length; //obliczenie długości po usunięciu ewnetualnych przecinków
    if(i<stringArray.length-1){//nie jest to ostatni element
        stringToPrint+=', '; //dodaje przecinek tylko gdy nie jest to ostatni element
    }
}
console.log(stringToPrint);
