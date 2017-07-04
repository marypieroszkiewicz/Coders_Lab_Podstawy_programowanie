
function stars(n){
    
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
    
}

//stars(5,5,2,3,45,6);
//stars(10);



function sumNumbers(min,max){
    var sum = 0;
    for(var i=min; i<=max;i++){
        sum+=i;
    }
    return sum;
}

function sumArrayElements(array){
    var sum = 0;
}


var sumNumber1 = sumNumbers(5,10);
var sumNumber2 = sumNumbers(100,500);
console.log(sumNumber1 + sumNumber2);


//Przykład wykorzystania wyrazenia funkcyjnego

function customForEach(array, func){
    
    for(var i=0; i<array.length; i++ ){
        func(array[i],i);
    }
    
}

var arr1 = [1,3,4,5,6];
customForEach(arr1,function(value,index){
    console.log(value,index);
});

//Przykład wykorzystania wyrazenia funkcyjnego


function customForEach(array, func){
    
    for(var i=0; i<array.length; i++ ){
        func(array[i],i);
    }
    
}

var arr1 = [1,3,4,5,6];

customForEach(arr1,
                function(value,index){
                    console.log(value,index);
                }
             );

/* ------- Zadania z wykładowcą - Funkcje ------- */

/* ----- Zadanie 1 ----- */
console.log ("--- Zadanie 1 ---");


function fooBar(x){
    var text = ""; // zmienna, która będzie przechowywać nasz tworzony tekst
    
    for (var i = 1; i<=x; i++){ //przechodzimy przez kolejne liczny od 1 do podanego x
        
        if (i%3==0 && i%5==0){ //zaczynamy od najbardziej szczegółowego warunku
            text+='FOOBAR'; //dołączamy tekst do zmiennej
        } else if (i%3==0){
            text+='Foo';//dołączamy tekst do zmiennej
        } else if (i%5==0){
            text+='Bar';//dołączamy tekst do zmiennej
        } else{
            text+=i;//dołączamy numer do zmiennej (ponieważ do tekstu dołączamy liczbę, jest ona traktowana jako tekst
        }
        
    }
    return text; //zwracamy z funkcji stworzony tekst
}

var createdText = fooBar(30); //wywołanie funkcji i przypisanie jej zwróconego wyniku do zmiennej
console.log(createdText);


