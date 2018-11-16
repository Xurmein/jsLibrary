//RECAP (9.26.18)


/*
Variable types: 
-strings
-number
-booleans
-null
-undefined
*/

let stringExample = "string";
let numEx = 0;
let boolEx = true;

let conditionEx = 0;

//if else eample
if(typeof conditionEx === "string"){
    console.log('yes, it\'s a string');
} else if (typeof conditionEx === 'number'){
    console.log("si, number");
} else if (typeof conditionEx === "boolean"){
    console.log.log("si bool");
}

console.log(typeof conditionEx); //output -> number

//switch (not concerned, re: truth-values; compares the listed cases)
switch (typeof conditionEx) {
    case 'string':
        console.log("is string");
        break;
    case 'number':
        console.log("is number");
        break;
    default:
        console.log("is neither string nor number");
        break;
}

//ternary
(typeof conditionEx === 'string') ? console.log("variable is string sir")
 : (typeof conditionEx === 'number') ? console.log("var is num")
 : (typeof conditionEx === 'undefined') ? console.log ("undefined var")
 : console.log("I don't know anything");

//FizzBuzz Challenge:
//create var FB that takes number
//if FB is divisible by 3, returns "Fizz"
//if FB is divisible by 5, returns "Buzz"
//if FB is divisible by 3 & 5, returns "Fizz Buzz"


let FB = 15;

if()

