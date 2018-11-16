//IF ELSE

// weather = 75;
//  if(weather < 70){
//      console.log("hoodie encouraged");
//  } else {
//      console.log('tanktop advisory');
//  }

// let name = "Steph";

// if (name == "Jake"){
//     console.log("Hello, my name is Jake.");
// } else {
//     console.log("Who the heck do you think you are?!");
// }


/*
challenge: capitalize FIRST LETTER of name ONLY
using IfElse
*/

// let name = 'jAkE';
// if(name[0] == name[0].toUpperCase()){
//     firstLetter = name[0] + name.slice(1).toLowerCase();
//     console.log(firstLetter);
// } else {
//     otherLetters = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
//     console.log(otherLetters);
// }

let age = 28;

if (age <= 17){
    console.log("You're a child!")
} else if (age >= 18 && age < 21){
    console.log("Register for the draft (if male)!")
} else if (age >= 21 && age < 25){
    console.log("Register for the draft (if male)! You can get into the bars.")
} else {
    console.log("Register for the draft (if male)! You can get into the bars.Now you don't have birthdays to look forward to!")
}