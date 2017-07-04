/* ------- Zadania z wykładowcą - Tablice ------- */

/* ----- Zadanie 1 ----- */
console.log ("--- Zadanie 1 ---");

//stworzenie ręczne
var arr1 = [0,1,2,3,4,5,6,7,8,9,10,11];
console.log(arr1);

//stworzenie za pomocą pętli
var arr2=[]; //trzeba ustawić pustą tablicę, aby móc korzystać z metod tablicowych
for(var i=0; i<12; i++){
    arr2.push(i);
}
console.log(arr2);

//Wypisywanie elementów z tablicy
function printArray(array){
    for(var i=0; i<array.length; i++){
        console.log(array[i]);
    }
}

printArray(arr1);
printArray(arr2);
