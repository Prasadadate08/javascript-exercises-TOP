// Need a year parameter to check if it is leap year
// if a year is divisible by 4 it is leap year
// if year is divisible by 100 then it is not a leap year
// if it is divisible by 400 then it is leap year
// leap is both year % 4 && (!year % 100 or year % 400)

const leapYears = function(year) {
    if (year % 4 === 0 && (year % 100 !==0 || year % 400 === 0)) {
        return true;
    }
    else{
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
