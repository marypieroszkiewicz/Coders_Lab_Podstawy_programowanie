/* ------- Zadania domowe do samodzielnego wykonania - Funkcje ------- */

function getEvenSum(n) {

	var sum = 0;

	for (var i = 1; i <= n; i++) {
		if (i % 2 === 0) {
			sum += i;
		}
	}
	
	return sum;
}

console.log(getEvenSum(5));