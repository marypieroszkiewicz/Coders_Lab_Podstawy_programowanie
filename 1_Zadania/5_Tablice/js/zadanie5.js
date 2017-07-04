/* ------- Zadania do samodzielnego wykonania - Tablice ------- */

/* ----- Zadanie 2 ----- */
console.log ("--- Zadanie 2 ---");

var array = '';

    for (var i = 0; i < array.length; i++) {
        console.log(array[i] % 2 == 0);
    }

var arr = [];

for (var i = 0; i < 10; i++) {
    var random = Math.floor(Math.random() * 60 + 1);
    arr.push(random); 
}

var str = arr.join(', ');
console.log(str);

/*

if (i % 2 == 0) {
        console.log(i + " - parzysta"); 
    }
    else {
        console.log(i + " - nieparzysta");
    }
*/

/*
function printArray(array){
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

var arr = [];

for (var i = 0; i < 10; i++) {
    var random = Math.floor(Math.random() * 60 + 1);
    arr.push(random); 
}

printArray(arr);

*/