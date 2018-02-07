//1. zadatak

var a  = "My random string";
var b = 12;

function check (a){
    if(typeof a == "string"){
        console.log("true")
    } else{
        console.log("false");
    }
}

check(b);

//2. zadatak

var m = "Something";
var n = "";

function check (m){
    if(m == ""){
        console.log("false");
    } else {
        console.log("true");
    }
}

check(m);

//3.zadatak

var z = 'Ha';
var n = 5; 

function concat(string, num) {
    var newString = "";

    for(var i = 0; i < num; i++){
        newString += string;
    }

    return newString;
}

var result = concat(z, n);
console.log(result);

// 4. zadatak

function countChar(string, letter) {
    var counter = 0;

    for(var i = 0; i < string.length; i++) {
        if (string[i] === letter) {
            counter++;
        }
    }

    return counter;
}

console.log(countChar("mama", "m"));

//5. zadatak


function findPosition(string, letter) {
    var position = -1;

    for(var i = 0; i < string.length; i++) {
        if(string[i] === letter) {
            position = i + 1;
            break;
        }
    }
    
    return position;
}

var hello = "keyboard";
var search = "b";
console.log(findPosition(hello, search));



//6. zadatak

function lastPosition(string, letter) {
    var position = -1;

    for(var i = string.length - 1; i >= 0 ; i--){
        if(string[i] === letter) {
            position = i + 1;
            break;
        }
    }
    return position;
}

console.log(lastPosition("success", "s"));
