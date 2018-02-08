// zbir svih cifara nekog broja


function sumOfDigits(n) {

    var sum = 0;
    var lastDigit;


    if (typeof n != "number") {
        return -1;
    }
    if (n < 0) {
        n = - n;
    }


    while (n > 0) {

        lastDigit = n % 10;

        n = (n - lastDigit) / 10;

        sum = sum + lastDigit;
    }

    return sum;
}

console.log(sumOfDigits(481));


// zbir prve i poslednje cifre nekog broja

function sumOfDigits(n) {
    var sum = 0;
    var digitArr = [];
    var i = 0;

    /*
    if (typeof n != "number") {
        return -1;
    }

    if (n < 0) {
        n = - n;
    }
    */


    while (n > 0) {
        var lastDigit = n % 10;

        digitArr[i] = lastDigit;

        n = (n - lastDigit) / 10;

        i++;
    }

    sum = digitArr[0] + digitArr[digitArr.length - 1];

    return sum;
}

console.log(sumOfDigits(259));