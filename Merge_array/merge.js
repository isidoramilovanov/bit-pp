// spojiti dva niza


function merge(a, b) {
    var i;
    var j;

    var c = [];

    for (i = 0; i < a.length; i++) {
        c[i] = a[i];
    }
    for (j = 0; j < b.length; j++) {
        c[i] = b[j];
        i++;
    }
    return c;
}

var firstArray = [3, 4, -2];
var secondArray = [8, 7];
var finalArray = merge(firstArray, secondArray);

console.log(finalArray);


// proveriti da li su nizovi istih duzina

function check(a, b) {

    var i;
    var j = 0;
    var k = 0;
    var c = [];

    for (i = 0; i < a.length + b.length; i++) {
        if (i % 2 == 0) {
            c[i] = a[j];
            j++;
        } else {
            c[i] = b[k];
            k++;
        }
    }

    return c;
}

var firstArray = [3, 8, 7];
var secondArray = [6, 4, 13];

var finalArray = check(firstArray, secondArray);

console.log(finalArray);


