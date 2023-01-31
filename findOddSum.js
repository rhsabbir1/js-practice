function getSumOfArray(numbers){
    sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        // if(element % 2 == 0){
        //     sum = sum + element;
        // }
        sum = sum + element;
    }
    return sum;
}




var myNumbers = [ 15 , 11 , 55 , 22 , 17 , 21];
const sumOfArray = getSumOfArray(myNumbers)
console.log(sumOfArray)