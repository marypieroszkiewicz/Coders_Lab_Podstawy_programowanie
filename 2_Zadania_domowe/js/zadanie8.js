/* ------- Zadania domowe do samodzielnego wykonania - Funkcje ------- */

function power(a, b) {

    var result = a;

    for (var i = 1; i < b; i++) {
        a *= result;
    }
    return a;
}

function factorial(a) {

    var sil = 1;

    if (a == 0) {
        return 1;
    }
    else {
        for (var i = 1; i <= a; i++) {
            sil *= i;
        }
    }
    return sil;
}

function mySin(x, iterNum) {

    var sin = 0;

    for (var i = 1; i < (iterNum * 4) +2; i = i + 4) {
        sin += (power(x,i))/factorial(i) - (power(x,(i+2)))/factorial(i+2);
    }
    return sin;
}
console.log(mySin(0.5, 1));
 
function myCos(x, iterNum) {

    var cos = 0;

    for (var i = 0; i < (iterNum * 4) +2; i = i + 4) {
        cos += (power(x,i))/factorial(i) - (power(x,(i+2)))/factorial(i+2);
    }
    return cos;
}
console.log(myCos(0.5, 1));