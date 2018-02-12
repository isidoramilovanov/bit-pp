// 2. zadatak

var combine = function(a, b) {
    var c = [];
    var i = 0;
    var j = 0;

    for(var k = 0; k < a.length + b.length; k++) {
       if(k % 2 == 0) {
           c[k] = a[i];
           i++;
       } else {
           c[k] = b[j];
           j++;
       }
    }
       return c;
};

var firstArray = ['a', 'b', 'c'];
var secondArray = [6, 4, 13];

var finalArray = combine(firstArray, secondArray);

console.log(finalArray);

//  3. zadatak

function rotate(a, n) {

    var k = 0;
    var c = [];

    for (var i = n; i < a.length; i++) {
        c[k] = a[i];
        k++;
    } 
    for(var i = 0; i < n; i++) {
        c[k] = a[i];
        k++;
    }
    return c;
}

console.log(rotate([1,2,3,4,5,6], 2));



//  4. zadatak

function return_digit(m) {

    var number = [];
    var k = 0;
    for(var i = 0; i <m.length; i++) {
        number[k] = m[i];
        k++;
    }
    return number;
}
console.log(return_digit('385'));
