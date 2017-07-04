/* ------- Zadania do samodzielnego wykonania - Tablice ------- */

/* ----- Zadanie 1 ----- */
console.log ("--- Zadanie 1 ---");

var arr = [4, 4, 1, 2, 5, 40];
var total = 0;
for(var i = 0; i < arr.length; i++) {
    total += arr[i];
}
var avg = total / arr.length;
console.log (avg .toFixed(3));

