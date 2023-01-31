function getOddNumbersSumOfArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
    }
    return sum;
}

function getOddNumbers(numbers){
    const oddNUmbers = [];
    for(let i = 0; i <numbers.length; i++){
        const index = i;
        const element = numbers[index]
        if(element % 2 !== 0){
            oddNUmbers.push(element)
        }
    }
    return oddNUmbers;
}

const myNumbers = [ 12, 16, 8, 17 ,18 ,20 ,15 , 11,24 , 55 , 22 , 17]
const oddNumbers = getOddNumbers(myNumbers)

const oddNUmbersSum = getOddNumbersSumOfArray(oddNumbers);
console.log(oddNUmbersSum)