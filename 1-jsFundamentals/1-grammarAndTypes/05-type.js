/* 
TYPES
    A. seven different "types" of variables 
        1. booleans (true/false)
        2. null
        3. undefined
        4. numbers
        5. strings
        6. character
        7. object

*/

//booleans (on/off, 0/1, true/false, etc.); represent choices n
let work = true;
console.log(work); //output -> 'true'

let lazy = false;
console.log(lazy); //output -> 'false'

//Null type
/*
null = empty value (not 0; not undefined)

like empty container; cup still exists but isn't holding anything

null variables must be explicitly defined as null
*/

let blank = null;
console.log(blank);

//Undefined
/*
undefined = no assigned value (not even container to hold a var)

undefined is NOT an error
*/

let undef = undefined;
console.log(undef);

let grass;
console.log(grass);

//think of null and undefined as UPS packages
//null -> the package/box is sent from UPS, meant to be
//undefined -> package was forgotten/never ordered for delivery

//NUMBERS
let temp = 65;
console.log(temp);

let precise = 9535918956532195959653219598983592510535322896632
console.log(precise);

let almost = 0.1 + 0.2;
console.log(almost);

let num = 0.3;
console.log(num);
//////////////////(2      +        1)/10
let mathSucks = (0.2 * 10 + 0.1 * 10)/10;

//STRINGS
//any collection of characters between ' ' or " "; console.log() will print everything w/in quotes to console

//numbers vs. strings
let first = 1050 + 100;
let second = '1050' + '100'; //output -> 1050100 (aka string concatenation)
let third = 1050 + '100';
console.log(typeof first);
console.log(typeof second);
console.log(third);
console.log(typeof third);


// let firstName = 'Jake';
// let lastName = 'Peacock,';
// let houseNumber = '133';
// let street = 'N. Sugar Cliff Dr.,';
// let city = 'Crawfordsville,';
// let state = 'IN';
// let zipcode = '47933';

// console.log(firstName, lastName);
// console.log(houseNumber, street);
// console.log(city, state, zipcode);


//objects = are containers for holding multiple data types
//denoted as variable "= {.......}"
//syntax===>>> [key] : [value],

let bathroomBreak = {
    drinkCoffee: true,
    amounts: 3,
    discomfortDesc: 'real bad, yo',
}

console.log(bathroomBreak);
console.log(typeof bathroomBreak);

//ARRAYS
//great for lists; denoted by []; contains values separated by commas

let myArray = ['string', 000, false];
console.log(myArray);
console.log(typeof myArray);