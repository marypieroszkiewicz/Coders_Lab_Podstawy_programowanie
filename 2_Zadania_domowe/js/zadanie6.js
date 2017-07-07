/* ------- Zadania domowe do samodzielnego wykonania - Funkcje ------- */

function getPI(n) {

    var pi = 0;

    for (var i = 0; i < n; i++) {
        pi = pi + 4 * Math.pow(-1, i) / (2 * i + 1);
    }
    return pi;
}

console.log(getPI(9));