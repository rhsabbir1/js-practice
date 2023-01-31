// addition
function addition(number) {
    let sum = 0;
    for (let i = 0; i < number; i++) {
        sum = sum + i;
    }
    return sum;
}
const sum =addition(7)

// multiplaction
function multiplaction(numbers){
    let result = 1;
    for(let i = 1; i <= numbers; i++){
        result = result * i;
    }
    return result;
}

const result =multiplaction(7)
console.log(result)
