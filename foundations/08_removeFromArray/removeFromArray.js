// Need to pass array and a number and parameters in func
// Need to check if the number which is second arg in present in array or not
// For this need to loop  
// check with if condition that value is present or not
// if present either can delete it
// or create a new array and push other values skipping this one

const removeFromArray = function(array, ...theArgs) {
let newArr = []
let args = theArgs

for (let num of array){
    
    if (args.includes(num)){
        continue
    }
    else{
        newArr.push(num)
    }
}

return newArr
};

// Do not edit below this line
module.exports = removeFromArray;
