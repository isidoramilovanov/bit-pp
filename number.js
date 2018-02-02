var n = 36;
var message;

if(n > 9 && n < 100){
    var second = n % 10; 
    var first = (n - second) / 10; 
    message = second *10 + first; 
    

} else {
    message = "greska";
}

console.log(message);