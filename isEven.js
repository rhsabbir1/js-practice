console.log(4/2)
console.log(158/2)
console.log(552/2)
console.log(742/2)
console.log(326/2)

function isEven(number){
    if(number % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}
var number = 0;
var cheekEven = isEven(number)
// console.log(cheekEven)

// odd number Cheek 

function isOdd(number){
    if(number % 2 != 0){
        return true;
    }
    else{
        return false;
    }
}

var number2 = 21;
var cheekOdd = isOdd(number2)
console.log('This number is odd :', cheekOdd)