/* ------- Zadania z wykładowcą - Instrukcje warunkowe ------- */

/* ----- Zadanie 1 ----- */
console.log ("--- Zadanie 1 ---");

var random = Math.floor(Math.random() * 100 + 1);
console.log(random);

// v1
if (random > 50) {
	console.log('Hurra');
} else {
	console.log('Łeee');
}

// v2
(random > 50) ? console.log('Hurra') : console.log(':(');

// v3
console.log( (random > 50) ? 'Hurra' : 'Łeee');

// v4
switch (true) {
	case (random > 50) :
		console.log('Hurra in switch');
		break;
	default:
		console.log('Łeee in switch');
		break;
}
