/*
variables!
    1. variable must begin w/ letter, underscore, or dollar sign 
    2. numbers are permitted in var name, after following one of the above
    3. .js is case sensitive; 'Hello' and 'hello' are different.
*/

var a = 1;
var b = 2;
console.log(a + b); //3

/*
Declarations
    1. it is the LEFT SIDE of variable
        1a. simply "var x"
        1b. left side of assignment operator (=)
    
Initializations
    1. RIGHT SIDE of variable
        1a. sets value of variable
        1b. invludes var's name (x), assignment operator (=), and value of var (10) => "x = 10"

*/

var x;
console.log('Declaration:', x); //undefined, because x is uninitialized

x = 10;
console.log('Initialization 1:', x);

x = 33;
console.log('Initialization 2:', x);

/*
var, let, and const:
    var ='old' .js keyword for variables
    let ='new' .js keyword for variables
    const = 'new' keyword, declares unchangeable variables
*/


let today = 'great';

const elevenFifty = 'dope!';

console.log(today, elevenFifty);

today = 'shirt';
console.log(today, elevenFifty);