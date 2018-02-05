var p1 = 150;
var p2 = 10;
var p3 = 20;


if(p1 < p2 && p1 < p3){
    console.log(1 + p2 + p3);
} else if(p2 < p1 && p2 < p3){
    console.log(p1 + 1 + p3);
} else {
    console.log(p1 + p2 + 1);
}