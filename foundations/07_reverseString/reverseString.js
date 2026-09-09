// Need a str parameter in function to accept the argument that will be reversed
// since str are immutable need a new variable where i can build reverse string
// Need to loop through string one letter in reverse
// Now add those letter to new variable and return

const reverseString = function(str) {
let reverseStr =''

for (i = str.length - 1; i>=0; i--) {
    reverseStr += str[i]
}
return reverseStr
};

// Do not edit below this line
module.exports = reverseString;
