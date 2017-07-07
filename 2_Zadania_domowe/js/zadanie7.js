/* ------- Zadania domowe do samodzielnego wykonania - Funkcje ------- */

function whatNumber(n) {

	var sum = 0;
	var info = '';

	for (var i = 1; i < n; i++) {
		if (n % i === 0) {
			console.log(i);
			sum += i;
		}
		if (sum == n) {
			info = ' doskonała';
		} else if (sum < n) {
			info = ' niekompletna';
		} else {
			return false;
		}
	}
	console.log(n + info);
}
console.log(whatNumber(6));
console.log(whatNumber(10));