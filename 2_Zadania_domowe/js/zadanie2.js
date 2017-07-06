/* ------- Zadania domowe do samodzielnego wykonania - Funkcje ------- */

var myArray = [4, -5, 0, 2, -67, 8, 10, -34 ];

function getNegativeNumbers(array) {

	var negatives = [];

	for (var i = 0; i < array.length; i++) {
		if (array[i] < 0) {
			negatives.push(array[i]);
		}
	}
	return negatives;

}
console.log(getNegativeNumbers(myArray));


// Inne rozwiązanie 

var myArray = [4, -5, 0, 2, -67, 8, 10, -34];

function getNegativeNumbers(array) {

	var negatives = myArray.filter(function(value) {
		return value < 0;
	});

    return negatives;
}
console.log(getNegativeNumbers(myArray));