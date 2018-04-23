// Write a program that checks if a given element e is in the array a. 
// Input:  e = 3, a = [5, -4.2, 3, 7]
// Output: yes
// Input:  e = 3, a = [5, -4.2, 18, 7]
// Output: no

function check (arr){
    for (var i=0; i< arr.length; i++){
        if(arr[i] == 3){
          return 'yes'
        }
    } return 'no'
}

console.log(check ([5, -4.2, 18, 7]))


// Write a program that multiplies every positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8]
// Output array: [-3, 22, 10, 6.8, -8]

function multiplie (arr) {
   var arr2 = [];
    var j=0;
    for (var i=0; i< arr.length;i++ ) {
        if (arr[i] > 0) {
           arr2[i] = arr[i] * 2;
        } else {
            arr2[i] = arr[i]
        }
    } return arr2;
    
}

console.log(multiplie([-3, 11, 5, 3.4, -8]))


// Write a program that finds the minimum of a given array and prints out its value and index. 
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3


function min (arr) {
   var min=0;
    for (var i=1; i< arr.length; i++){
        if(arr[i] < min){
            return arr[i];
        }
    }
}

console.log(min([4, 2, 2, -1, 6]))

// Write a program that finds the second largest number and prints out its value. 
// Input array: [4, 2, 2, -1, 6]
// Output: 2

function find (arr){
   var min=0;
    for (var i=1; i< arr.length; i++) {
        if(arr[i] > min){
            return arr[i];
        }
    }
}

console.log(find([4, 2, 2, -1, 6]))


// Write a program that calculates the sum of positive elements in the array.
// Input array: [3, 11, -5, -3, 2]
// Output: 16

function calc (arr){
   var sum=0;
    for (var i=0; i< arr.length; i++) {
        if(arr[i] > 0){
         sum += arr[i];
        }
    } return sum;
}

console.log(calc([3, 11, -5, -3, 2]))


// Write a program that checks if a given array is symmetric. 
// An array is symmetric if it can be read the same way both from the left and the right hand side.   
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.
// Input array: [3, 4, 12, 8]
// 	Output: The array isn’t symmetric.

function check(arr) {
    for (var i=0; i<arr.length /2; i++){
      if( arr[i] !== arr[arr.length - 1-i]){
        return false;
      }
   
    } 
    return true;
}

console.log(check([2, 4, -2, -2 ,4,2]))


// Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 3, 5, 8, 6, 11, 2, 9]

function intertwine (arr, arr2){
    var arr3=[];

    for (var i=0, j=0, k=0; k<arr.length + arr2.length; k+=2, i++, j++){
        arr3[k] = arr[i];
        arr3[k+1]=arr2[j];
    }
    return arr3;
}

console.log(intertwine([4, 5, 6, 2], [3, 8, 11, 9]))


// Write a program that concatenates two arrays. 
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 5, 6, 2, 3, 8, 11, 9]

function concat(arr, arr2) {
    var arr3 = [];

    for (var i=0; i<arr.length; i++){
        arr3[i] = arr[i];
    }

    for (var j=0; j< arr2.length; j++){
        arr3[i]=arr2[j];
        i++;
    }
    return arr3;
}

console.log(concat([4, 5, 6, 2], [3, 8, 11, 9]))


// Write a program that deletes a given element e from the array a. 
// Input: e = 2, a = [4, 6, 2, 8, 2, 2]
// Output array: [4, 6, 8]

function del (arr){
    var arr2 = [];

    for (var i = 0; i< arr.length; i++){
        if (arr[i] !== 2){
            arr2[i] = arr[i];
        }
    } return arr2;
}

console.log(del([4, 6, 2, 8, 2, 2]))


// Write a program that inserts a given element e on the given position p in the array a.
//  If the value of the position is greater than the array length, print the error message. 
// Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
// Output: [2, -2, 33, 78, 12, 5, 8]


var arr = [2, -2, 33, 12, 5, 8];
arr.splice(3, 0 , 78);
console.log(arr);


   

// Write a function that combines two arrays by alternatingly taking elements.
// [‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]

function combine (arr1, arr2) {
    var arr3 = [];

    for (var i=0, j=0, k=0; k< arr1.length + arr2.length; k+=2, i++, j++){
        arr3[k] = arr1[i];
        arr3[k+1]=arr2[j];
    }
    return arr3;
}

console.log(combine(['a','b','c'], [1,2,3]))

 

// Write a function that rotates a list by k elements.
// For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]

function rotate (arr, e) {
    var a;
    for (var i=0; i<e; i++){
        a=arr[0];
        for(var  j=0; j<arr.length-1; j++){
            arr[j]=arr[j+1]
        }
        arr[j]=a;
    }
    return arr;
}

console.log(rotate([1,2,3,4,5,6],3))
 

// Write a function that takes a number and returns array of its digits.

function retDigits (num){
    return num.toString().split('');
}

console.log(retDigits(5678))

// Write a program that prints a multiplication table for numbers up to 12.

function multiplie (num) {
  var s = '';

  for (var i=0; i <= num; i++){
    for (var j = 1; j <= num; j++) {
        s += i * j + '';
    }
    s+= '\n';
  }
  return s;
}

console.log(multiplie(2))
 

// Write a function to input temperature in Centigrade and convert to Fahrenheit.


 

// Write a function to find the maximum element in array of numbers. 
// Filter out all non-number elements.

function find (arr) {
    var arr2 = [];
    var j=0;
    for (var  i=0; i< arr.length; i++){
        if (typeof (arr[i]) == 'number' && !isNaN(parseInt(arr[i]))){
            arr2[j] = arr[i];
            j++;
        }
    }
    var max = arr2[0];
    for (var j=1; j<arr2.length; j++){
        if (max< arr2[j]){
            max = arr2[j];
        }
    }
    return max;
}

console.log(find([2, -1, 9, 'a', Infinity, 3, NaN]))
 

// Write a function to find the maximum and minimum elements. Function returns an array.

function minMax(arr){
    var min = arr[0];
    var max = arr[0];
    
    for (var i=1; i< arr.length; i++){
        if(min > arr[i]){
            min = arr[i];
        }
    }
    
    for (var i=1; i< arr.length; i++){
        if (max < arr[i]){
            max =arr[i];
        }
    }
    var m =[min, max];
    return m;
}

console.log(minMax([4, 6, 2, -9, 7, -3, 7.5]))


 

// Write a function to find the median element of array.

function find(arr){

        if(arr.length % 2 == 0){
         var x=  arr[arr.length / 2];
         var y= arr[arr.length / 2 -1];
         var z = (x+y) / 2;
         return z;
        }

        if(arr.length % 2 !==0){
            var a = arr[(arr.length -1) /2];
            return a;
        }
}

console.log(find([2, 7, 3, 1, 5, 8]))
 

// Write a function to find the element that occurs most frequently.

function find (arr) {
    var counter = 0;
    var max = 1; 
    var e;
    for (var i=0; i<arr.length; i++){
        for (var j=1; j<arr.length; j++){
            if(arr[i] == arr[j]){
                counter++;
            }
            if(counter > max){
                max =counter;
                e = arr[i];
            }
        }
        counter = 0;
    }
    return [e, max];
}

console.log(find([2, 2, 7, 3, 1, 5, 5, 5, 8, 5]))

 

// Write a function to find and return the first, middle and last element of an array 
// if the array has odd number of elements. If number of elements is even, 
// return just the first and the last. 
// In other cases (empty array), input array should be returned.

function find (arr) {
    var first=arr[0];
    var middle = arr[(arr.length-1) /2 ];
    var last=arr[arr.length-1];

    if (arr.length == 0){
        return arr;
    }

    if(arr.length % 2 !== 0){
        return [first, middle, last];
    }

    if(arr.length % 2 == 0){
        return [first, last];
    }
}

console.log(find([2,4,6,7,8,9]));
 

// Write a function to find the average of N elements. 
// Make the function flexible to receive dynamic number or parameters.

function find(arr){
    var sum = 0;
    for (var i=0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(find([2,4,6]))
 

// Write a function to find all the numbers greater than the average.


function find(arr) {
    var arr2 = [];
    var sum=0;
    var x;
    var j=0;
    
    for(var i=0; i< arr.length; i++){
        sum+=arr[i];
        x = sum / arr.length;
    }

    for (var i=0; i<arr.length; i++){
        if(x < arr[i]){
            arr2[j] = arr[i];
            j++;
        }
    }
    return arr2;
}
 
console.log(find([2,4,6,8,10]))

// The body mass index (BMI) is the ratio of the weight of a person (in kilograms) 
// to the square of the height (in meters). Write a function that takes two parameters, 
// weight and height, computes the BMI, and prints the corresponding BMI category:
// Starvation: less than 15
// Anorexic: less than 17.5
// Underweight: less than 18.5
// Ideal: greater than or equal to 18.5 but less than 25
// Overweight: greater than or equal to 25 but less than 30
// Obese: greater than or equal to 30 but less than 40
// Morbidly obese: greater than or equal to 40

function compute (w, h){
    var bmi = w / (h * h);

    if (bmi < 15){
        return 'starvation';
    } else if(bmi < 17.5){
        return 'anorexic';
    } else if(bmi < 18.5){
        return 'underweight';
    } else if(bmi >= 18.5 && bmi <25 ){
        return 'ideal';
    } else if(bmi >= 25 && bmi < 30){
        return 'owerweight';
    } else if(bmi >= 30 && bmi < 40){
        return 'obese';
    } else if (bmi >= 40){
        return 'morbidly obese';
    }

}

console.log(compute(54, 1.70))
 








 










