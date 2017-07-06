/* ------- Zadania do samodzielnego wykonania - Funkcje ------- */

function rockPaperScissors(player1, player2) {

	var paper = 'papier';
	var scissors = 'nozyce';
	var rock = 'kamien';

	if (player1 == player2) {

		console.log('Remis');

	} else if (((player1 == paper) && (player2 == rock)) ||
		((player1 == scissors) && (player2 == paper)) ||
		((player1 == rock) && (player2 == scissors))) {

			console.log('Player 1 Win');

		} else if (((player1 == rock) && (player2 == paper)) ||
				   ((player1 == paper) && (player2 == scissors)) ||
				   ((player1 == scissors) && (player2 == rock))) {

				console.log('Player 2 Win');

		} else {

			console.log('Wrong information');
		}
}

rockPaperScissors('papier', 'nozyce');
rockPaperScissors('nozyce', 'kamien');
rockPaperScissors('papier', 'kamien');
rockPaperScissors('papier', 'papier');
rockPaperScissors('noz', 'kamien');