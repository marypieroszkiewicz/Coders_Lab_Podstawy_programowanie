/* ------- Zadania domowe do samodzielnego wykonania - Funkcje ------- */

function getFibonacciNumbers(n) {
    
    var sequence = [0, 1];
    
    if (n === 0 || n === 1) {
        return sequence[n];
    } 
    else {
    	for (var i = 2; i < n; i++ ) {
        	var sum = sequence[i - 1] + sequence[i - 2];
        	sequence.push(sum);
    	}

    return sequence;
    
    }
}

console.log(getFibonacciNumbers(0));
console.log(getFibonacciNumbers(1));
console.log(getFibonacciNumbers(9));
