/* ------- Zadania z wykładowcą - Pętle ------- */

/* ----- Zadanie 1 ----- */
console.log ("--- Zadanie 1 ---");

// v1
var  n = 5;
var result = 1;

for (var i=1; i<=n; i++) {
	result *= i;
}
console.log (result);

// v2
result = 1;
var j = 1;

while(j<=n) {
	result *= j;
	j++;
}
console.log(result);
