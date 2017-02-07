/* ------- Zadania do samodzielnego wykonania - Instrukcje warunkowe ------- */

/* ----- Zadanie 4 ----- */
console.log ("--- Zadanie 4 ---");

var menAge = 31;
var pet = 'pies';

// v1
switch(pet) {
	case 'pies':
		console.log(Math.floor(menAge / 7) + ' lat');
//		break;
	default:
		console.log(pet);
		break;
}

//v2
pet = 'pies';
console.log(pet);
if (pet == 'pies') {
	console.log(Math.floor(menAge / 7) + ' lat');
}
