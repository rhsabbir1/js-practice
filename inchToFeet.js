// Convert inch To Feet 
function covertFeet(inch){
    const foot = 12;
    var inch = inch / foot;
    var inchDelemel= inch.toFixed()
    var inchNumber = parseFloat(inchDelemel)
    return inchNumber;
}

const dadaInch = 146;
const dadaFeet =covertFeet(dadaInch);
console.log(dadaFeet)


function milesTokm(miles){
    const km = miles*1.609;
    return km;
}

const miles = 5;
const kilomitter = milesTokm(miles);
console.log(kilomitter)
