/* ------- Zadania domowe do samodzielnego wykonania - Funkcje ------- */

var myArray = [2, 3, 1, 6, 100, 49, 5, 7, 8, 9 ];

function getSecondMaxNumber(array) {



}


function processData(myArray) {
  var sorted = unique.sort(function(a, b) {
    return a - b;
  });
  var result = sorted[sorted.length - 2];
  return result;
}


var myArray =['20','120','111','215','54','78'];
var secondLargest = myarray.sort(function(a,b){return a - b})[myArray.length-2];
console.log(secondLargest); //120;