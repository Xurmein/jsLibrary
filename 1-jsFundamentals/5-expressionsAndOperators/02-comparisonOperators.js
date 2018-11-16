//COMPARISON OPERATORS

//equality checks values are same, not types
console.log('3' == 3); //true; called type coercion
console.log('three' == 3); //false

//strict equality. checks that values and types are same
console.log(3 === 3); //true
console.log(3 === '3');  //false

console.log (0 == false); //true
//"falsy" variables that are assumed to false [includes 0, ' ', false]
//also "truthy" variables

//not equal; doesn't care about type
console.log('3' != 4); //true
console.log('4' != 4); //false


//strict non-equality; does care about type
console.log('3' !== 3); //true
console.log(3 !== 3); //false

//greater than
console.log(3>2);

//less than
console.log(2<3);

//greater than or equal to
console.log(3 >= 3);

//less than or equal to
console.log( 4 <= 4);

//conjunction aka "and"
console.log(true && true); //true

let x = 5;
console.log(x < 10 && x > -5); //true
console.log(x > 6 && x < 7); //false; both left and right sides of && must be true

//disjunction aka "or"
console.log(true || false); //true

let c = 4;
console.log(c > 1 || c === 3); //true; only one side of || must be true
console.log(c == 2 || c >= 1600); //false