/* ------- Zadania domowe do samodzielnego wykonania - Funkcje ------- */

function isPrimeNumber(n) {
  for (var i = 2; i < n; i++) {
    if(n % i === 0) {
    	return false;
    }
  }

  return n > 1;

}

console.log(isPrimeNumber(1));
console.log(isPrimeNumber(2));
console.log(isPrimeNumber(9));
console.log(isPrimeNumber(11));