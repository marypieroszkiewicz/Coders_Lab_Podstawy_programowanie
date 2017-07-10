/* ------- Zadania domowe do samodzielnego wykonania - Funkcje ------- */

function sumFactors(n) {

    var sum = 0;

    for (var i = 1; i < n; i++) {
        if ( n % i === 0) {
            sum += i;
        }
    }
    return sum;
}

function isNumberPerfect(n) {

    if (sumFactors(n) == n) {
        console.log(n + ' to jest liczba doskonala');
    }
    else if (sumFactors(n) < n) {
        console.log(n + ' to jest liczba niekompletna');
    }
    else {
        console.log(n + ' to nie jest zadna z nich');
    }
}

function whatNumber(n) {

    for (var j = 1; j <= n; j++) {
        isNumberPerfect(j);
    }
}
whatNumber(100);