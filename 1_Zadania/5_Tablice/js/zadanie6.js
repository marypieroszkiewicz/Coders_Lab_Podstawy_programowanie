/* ------- Zadania do samodzielnego wykonania - Tablice ------- */

/* ----- Zadanie 3 ----- */
console.log ("--- Zadanie 3 ---");

var arr1 = [4, 55, 17, 22, 1];
var arr2 = [4, 53, 11, 22, 20];


var arr = arr1.concat(arr2);
var sortedArr = arr.sort();
var results = [];

for (var i = 0; i < arr.length - 1; i++) {
	if (sortedArr[i + 1] == sortedArr[i]) {
		results.push(sortedArr[i]);
	}
}

console.log(results);