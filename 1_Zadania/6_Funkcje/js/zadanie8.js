	var veryGood = 'Bardzo dobra obsluga';
	var good = 'Dobra obsluga';
	var average = 'Srednia obsluga';
	var bad = 'Zla obsluga';
	var unknown = 'Opis nieczytelny';


function calculateTip(amount, raiting) {

	var tip;

	if (raiting == veryGood) {
		tip = amount * 0.25;
	} else if (raiting == good) {
		tip = amount * 0.20;
	} else if (raiting == average) {
		tip = amount * 0.15;
	} else if (raiting == bad) {
		tip = amount * 0;
	} else {
		tip = unknown;
	}

	return tip;	
}

console.log(calculateTip(100, veryGood));
console.log(calculateTip(80, good));
console.log(calculateTip(60, average));
console.log(calculateTip(100, bad));
console.log(calculateTip(100, 'bleh'));

// Funkcja calculateTip z wykorzystaniem instrukcji warunkowej switch

function calculateTip(amount, raiting) {

	var tip;

	switch(raiting) {
		case ('Bardzo dobra obsluga') :
			tip = amount * 0.25;
			break;
	 	
	 	case ('Dobra obsluga') :
	 		tip = amount * 0.20;
	 		break;

	 	case ('Srednia obsluga') :
	 		tip = amount * 0.15;
	 		break;

	 	case('Zla obsluga') :
	 		tip = amount * 0;
	 		break;

	 	default:
	 		tip = 'Opis nieczytelny';
	}
	
	return tip;
}

console.log(calculateTip(100, 'Bardzo dobra obsluga'));
console.log(calculateTip(80, 'Dobra obsluga'));
console.log(calculateTip(70, 'Srednia obsluga'));
console.log(calculateTip(100, 'Zla obsluga'));
console.log(calculateTip(100, 'bleh'));
