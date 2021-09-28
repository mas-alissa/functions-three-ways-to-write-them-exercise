// function declaration 
function squared(num1,num2){
    let squnum1 = (num1 * num1);
    let squnum2 = (num2 * num2);
    let plusSquNumers = squnum1 + squnum2;
    return plusSquNumers * plusSquNumers
}

console.log(squared(1,2));

// function expression 
const squaredNumbers = function(nu1,nu2){
    let sqnum1 = nu1 * nu1;
    let sqnum2 = nu2 * nu2;
    let plusSqurNumbers = sqnum1 + sqnum2;
    return plusSqurNumbers * plusSqurNumbers;
}

console.log(squaredNumbers(1,2))

// arrow function

const squarNumbers = (number1,number2) =>{
let squardNumber1 = number1 * number1;
let squardNumber2 = number2 * number2;
let plussquardNumbers = squardNumber1 + squardNumber2;
return plussquardNumbers * plussquardNumbers;
}

console.log(squarNumbers(1,2))