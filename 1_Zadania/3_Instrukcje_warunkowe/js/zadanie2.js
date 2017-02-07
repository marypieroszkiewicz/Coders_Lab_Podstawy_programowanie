/* ------- Zadania do samodzielnego wykonania - Instrukcje warunkowe ------- */

/* ----- Zadanie 2 ----- */
console.log ("--- Zadanie 2 ---");

var a = 7;
var b = 9;

// v1
if (a > b) {
	console.log('a jest większe od b');
} else {
	console.log('b jest większe od a');
}

// v2
(a > b) ? console.log('a jest większe od b') : console.log('b jest większe od a');

// v3
console.log( (a > b) ? 'a jest większe od b' : 'b jest większe od a' );

// v4
switch (true) {
	case (a > b) :
		console.log('a jest większe od b');
		break;
	default :
		console.log('b jest większe od a');
		break;
}
