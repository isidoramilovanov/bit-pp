// zadarak 4. practical


//arithmetic_mean(3, 4, 5, 9);
function arithmetic_mean_1(number1, number2, number3, number4) {

    var sum;

    sum = (number1 + number2 + number3 + number4) / 4;

    return sum;


}

//arithmetic_mean([3, 4, 5, 9]);
function arithmetic_mean_2(a) {
    var sum = 0;
    var i = 0;

    for (; i < a.length; i++) {
        sum = sum + a[i];
    }


    return sum / a.length;

}

console.log(arithmetic_mean_2([5, 6, 2, 3]));

// 9. zadatak

function calculate(x) {
    var sum = 0;

    for (var i = 0; i < x.length; i++) {
        if (x[i] % 2 == 1) {
            sum = sum + x[i];
        }
    }

    return sum;

}

console.log(calculate([2, 5, 10, 11, 25]));


// 10. zadatak

function calculation(m) {

    
    var counter = 0;

    for(var i = 0; i <m.length; i++) {
        if(m[i] == 'a' || m[i] == 'A') {
            counter++;
        } 
    }  

    return counter;
}

console.log(calculation('abrAkadabrA'));