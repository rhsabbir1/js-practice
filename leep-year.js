function isLeepYear(year){
    const remainder = year % 4;
    if(remainder == 0){
        return true;

    }
    else{
       return false;
    }
}

var inputYear = 2028;
var cheekLeepYear = isLeepYear(inputYear);
console.log(inputYear,'is leep year',cheekLeepYear)