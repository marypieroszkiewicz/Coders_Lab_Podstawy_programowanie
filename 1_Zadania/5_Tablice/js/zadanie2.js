/* ------- Zadania z wykładowcą - Tablice ------- */

/* ----- Zadanie 2 ----- */
console.log ("--- Zadanie 2 ---");


function printArray(array){
    for (var i=0; i < array.length; i++){
        console.log(array[i]);
    }
} 

var arr = [];
 
for (var i = 0; i < 10; i++){
    var random = Math.floor( Math.random() * 100 );
    arr.push(random);
}
 
printArray(arr);
 
 
var numbers = [];
for (var i = 0; i < arr.length; i++){ // Przechodzimy przez kolejne liczny w tablicy
    
    if (numbers.indexOf(arr[i]) == -1 ){ //Sprawdzy czy pobrana liczba nie jest już wśród znalezionych powtórzeń
        //Jeśli nie to weź sprawdź czy w kolejnych elementach nie znajduje się
        for (var j = i + 1; j < arr.length; j++){
            if (arr[i] == arr[j]){ //jeżeli znalazł powtórzenie 
                numbers.push(arr[i]); //dodaje liczbę do tablicy z powtórzeniami
                break;
            }
            
        }
    }
}
console.log('Ilość powtarzających się liczb ='+ numbers.length);
