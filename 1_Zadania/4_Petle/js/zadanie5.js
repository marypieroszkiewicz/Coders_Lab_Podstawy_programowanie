/* ------- Zadania do samodzielnego wykonania - Pętle ------- */

/* ----- Zadanie 5 ----- */
console.log ("--- Zadanie 5 ---");

var stars = 5;
var line = ' ';

for (var i = 1; i <= stars; i++) {
	line = ' ';
	for (var j = 1; j <= stars; j++) {
		if ( (i + j) % 2 != 0) {
			line = line + '*';
		} else {
			line = line + ' ';
		}
	}
	console.log(line);
}

/*

var n=5;
for(var i=1;i<=n;i++){
    var text="";
    for(var j=1;j<=n;j++){
      if((i+j)%2!=0){
           text=text+"*";
        }else{ 
           text=text+" ";
        }
    }
     console.log(text);
}


// Wykonać te samo zadanie z pętlą while.



/*

// inne rozwiązanie zadania 8

var i = 1;
while (i <= 5) { //rozpoczynamy pętlę typu while
    var msg = '';

    for (var x = 0; x < i; x++) { //za każdym razem wykonujemy pętlę for
        msg += '*';
    }

    console.log(msg); //po każdej iteracji pętli while wypisujemy tekst
    i++; //zwiększamy "i"
}

*/