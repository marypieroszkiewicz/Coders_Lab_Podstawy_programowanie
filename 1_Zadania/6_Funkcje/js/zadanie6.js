function rentCost(days) {

	var costOfRoom;
	var numbersOfWeeks = Math.floor(days / 7);

	if (days == 1) {
		costOfRoom = 200;
	} else if (days <= 3) {
		costOfRoom = days * 180;
	} else if (days <= 7) {
		costOfRoom = (days * 160) - (50 * numbersOfWeeks);
	} else if (days >= 8) {
		costOfRoom = (days * 150) - (50 * numbersOfWeeks);
	}

	return costOfRoom;
}

console.log(rentCost(7)); //1070
console.log(rentCost(8)); //1150
console.log(rentCost(14)); //2000
console.log(rentCost(16)); //2300


// Funkcja rentCost z wykorzystaniem pętli switch

// function rentCost(days) {

// 	var discount = 50;
// 	var numbersOfWeeks = Math.floor(days / 7);
// 	var cost = 0;

// 	switch (days) {
// 		case 1:
// 			cost = 200;
// 			break;
// 		case 2:
// 		case 3:
// 			cost = 180 * days; 
// 			break;
// 		case 4:
// 		case 5:
// 		case 6:
// 			cost = 160 * days;
// 			break;
// 		case 7:
// 			cost = (160 * days) - discount;
// 			break;
// 		default:
// 			cost = (150 * days) - (discount * numbersOfWeeks);
// 			break;
// 	}

// 	return cost;
// }

// console.log(rentCost(7)); //1070
// console.log(rentCost(8)); //1150
// console.log(rentCost(14)); //2000
// console.log(rentCost(16)); //2300
