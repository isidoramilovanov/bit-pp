//1. zadatak
var x;

for (x = 0; x <= 15; x++) {
    if (x % 2 == 0) {
        console.log("number is even");
    } else {
        console.log("number is odd");
    }
}


//2. zadatak
var sum = 0;
var i;

for (i = 0; i < 1000; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        sum += i;
    }
}
console.log(sum);


//3. zadatak
var a = [1, 4, 7, 3];
var n = a.length;
var sum1 = 0;

for(i = 0; i < n; i++){
    sum1 = sum1 + a[i];
}
console.log(sum1);

var a = [1, 4, 7, 3];
var n = a.length;
var pro = 1;
for(i = 0; i < n; i++){
    pro = pro * a[i];
}
console.log(pro);


//4. zadatak
var y = ["1", "A", "B", "c", "r", true, NaN, undefined];
var line = "";

for(i = 0; i < y.length; i++){
    line += y[i];
}
console.log(line);

//5. zadatak

var z = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27]];
var i;


for( i = 0; i < z.length; i++) {
    for (j = 0; j < z[i].length; j++) {
        console.log(z[i][j]);
    } 
}





// pronaci minimalni element niza i poziciju na kojoj se taj element pojavljuje

var d = [6, 5, 7, 19, 11, 18, 5, 11, 10];
var i;
var min = d[0];
var position = 0;

for(i = 1; i < d.length; i++){
    if(d[i] < min) {
        min = d[i];
        position = i;
    }
}

console.log(min + ' is on the position ' + position);


//min i max element da zamene mesta

var m = [2, 1, 7, 10, 25, 32];
var i;
var min = m[0];



//iscrtati kvadrat od zvwzdica

var n = 4;
var s = "*";


for(var r = 0; r <= n-1; r++){

    if(r == 0 || r == n-1){
        /* print n s symbols */
        var line = "";
        for(var i =0; i < n; i++){
            line += s;
        }
        
        line += "\n";
        console.log(line);

    } else{
        var line = "";
        /* print s */
        line = line +s;
        /* print n-2 spaces */ 

        for( var i = 0; i < n-2; i++){
            line = line + " ";
        }
        
        line = line + s;
        line += "\n";
        console.log(line);
    }
}
