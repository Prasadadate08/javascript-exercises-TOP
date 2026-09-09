// Need to pass 2 parameters
// both should be positive
// if parameter is anything else than positive number then give error
// Need a variable to store the sum of numbers
// sum the numbers between first to last parameter



const sumAll = function(startNum,endNum) {

    if (!Number.isInteger(startNum) || startNum < 0 || endNum < 0 || !Number.isInteger (endNum)) {
        return 'ERROR';
    }

    if (startNum > endNum){
       [startNum, endNum] = [endNum, startNum]
    }

    let sum = 0
    for (i = startNum; i <=endNum; i++){
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
