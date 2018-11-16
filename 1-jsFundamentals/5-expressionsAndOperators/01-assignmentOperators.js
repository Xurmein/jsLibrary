//ASSIGNMENT OPERATORS

let c = 30; // "=" is the assignment variable

c = c + 1; //
console.log(c); // JS starts w/ "c + 1", then reassigns the new value to c

c += 1; // "+=" addition operator, equal to c = c + 1
c ++; // increment operator
c --; //decrement operator
c -= 2; // subtraction operator, equal to c = c - 2
c /= 3; // division operator, equal to c = c / 3
c *= 12; // multiplcation operator, equal to c = c * 12


//modulus (%) operator returns remainder
console.log(7%5); //output -> 2, 7 divided by 5 equals 1 & 2/5s
c %= 5; // equal to c = c % 5

//exponential assignment
let x = 5;
x = x ** 2; // "**" means "to the power of"
console.log(x);
x **= 1; //output -> 25, puts x (reassigned to 25) to the power of 1