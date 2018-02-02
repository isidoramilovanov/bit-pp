var a = 5;
var b = 7;
var c = 1;
var message;

if(a > b && a > c){
    message = "a is max";
} else if (b > c && b > a){
    message = "b is max";
} else {
    message = "c is max";
}
console.log(message);