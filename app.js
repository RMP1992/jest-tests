const add = (num1, num2) => {
    return num1 + num2;
};
let myArray = ['Dean', 'Dan', 'Jacob', 'Jasmine']
let userInput;
let userBalance = 1000;
let booleanValue = true;

const withdrawFunction = (userInput) =>{ //singel parameters don't need brackets
   return (userBalance -= userInput)
}

module.exports = {
    add,
    myArray, 
    userInput,
    userBalance,
    withdrawFunction,
    booleanValue
};