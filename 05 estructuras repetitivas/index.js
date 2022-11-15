// do while
var num = 0;
do{
    console.log("hola mundo");
}while (num == 4);


var n1 = 1;
var n2= 1;
do{
    do{
    console.log(n1 + "*" + n2 + "=" + (n1*n2));
    n2++;
    }while(n2<=12)
    n2=0
    n1++;
}while(n1<=12)

//while

while (num == 4) {
    console.log("hola mundo");
}

/* var n1 = 1;
var n2= 1;
while (n1<=12) {

    while (n2<=12) {
        console.log(n1 + "*" + n2 + "=" + (n1*n2));
        n2++;
    }
    n2=0
    n1++;
} */

//for

for (let i = 1; i <= 12; i++) {
    for (let j = 1; j <= 12; j++) {
        console.log(i + "*" + j + "=" + (i*j));
    }
    
}

var n2 = 1;
var aux = 0;
for (let index = 1; index <13; index++) {
     if (aux == 12) {
      break;  
     }
    console.log(n2 + "*" + index + "=" + (index * n2));
     if (index == 12) {
        n2++;
        index = 1;
        aux++
     }
}
 
