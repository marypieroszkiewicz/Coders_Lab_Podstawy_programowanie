/* ------- Zadania z wykładowcą - Pętle ------- */

/* ----- Zadanie 2 ----- */
console.log ("--- Zadanie 2 ---");

n = 5;

for(var i = 1; i<=n; i++){ //wiersze
    var str=i+': ';
    for(var j=1; j<=n; j++){ //kolumny
        if( i==1 || //jeżeli jest to pierwszy wiersz
            i==n || //jeżeli jest to ostatni wiersz
            j==1 || //jeżeli jest to pierwsza kolumna
            j==n    //jeżeli jest to ostatnia kolumna
        ){
            str+='*';
        }else{
            str+=' ';
            
        }
    }
    console.log(str);
    
}
