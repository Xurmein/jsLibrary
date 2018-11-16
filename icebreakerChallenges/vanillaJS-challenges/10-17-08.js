/** BRONZE
Give a string parameter, create an arrow function that checks if the string meets these requirements
 - is of type string //
 - is at least 30 characters long // !== null
 - is not full of whitespace //.trim

If the string does not pass the tests, return 'Parameter does not meet requirements'
If the string passes, return true;
*/
let test = '                                                                                                    ';
let words = 'I am Poseiden, King of all the Seas!';


const bronze = (test) => {
    (typeof test == 'string' && test.trim() !== null && test.trim() != '' && test.length >= 30) ? console.log(true)
    :console.log('Parameter does not meet reqs');
}

bronze(test);


//   /** SILVER
// Given a string parameter "I love .NET!!" create an arrow function that check to make sure our parameter is a string,
// then replace instances of .NET with React.

// If the parameter is not a string, it should return an error message

// If the string -does not- contain .NET, return a message saying 'Nothing to change'

// "I love .NET!!" => "I love React!!"
//  */

// // let param = 'I love .NET';
// // const flex = (checker) => {
// //     (typeof checker != 'string') ? console.log('no string')
// // }
 
//   /** GOLD
// Given the string -> 'Welcome to eleven fifty'

// Create a function that accepts a string. 
    
// In the function check to see if the value of the string is: 
// - of type string
// - has a length greater than zero
// - has a length less than 30

// If any of these are invalid send it to the else condition and show the message -> 'String must not be empty, null, or exceed 30 characters'

// If the string is valid, change the string so that the 'e' and the first 'f' in 'eleven fifty' is capitalized

// Make sure that trailing whitespace is trimmed off of the string. 

// If finished, add a second param to the function for a callback function and instead of returning the data, place it inside of the callback arguments 
//  */

// let string = "Welcome to eleven fifty.";
// const gold = (input) => {
//     if(typeof input == 'string' && 30 <= input.length > 0)
// }