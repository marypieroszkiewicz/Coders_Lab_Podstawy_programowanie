/* ------- Zadania domowe do samodzielnego wykonania - Funkcje ------- */

var myArray = [2, 3, 1, 6, 100, 49, 5, 7, 8, 9 ];

function getSecondMaxNumber(array) {

	var arr = array.sort(function(a, b) {
		return a - b;
	});

	var secondLargest = arr[arr.length - 2];
		return secondLargest;
}

console.log(getSecondMaxNumber(myArray));
