// 2. zadatak

function multiple(z) {
    var product = [];

    for (var i = 0; i < z.length; i++) {
        if (z[i] > 0) {
            product[i] = z[i] * 2;
        } else {
            product[i] = z[i];
        }
    }

    return product;
}

console.log(multiple([-3, 11, 5, 3.4, -8]));


// 4.zadatak 


