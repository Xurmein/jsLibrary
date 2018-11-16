/*
BRONZE
Given a parameter of an array  [ 40, 17, 10, 76, 22 ] 
Create a function that returns the product of every element in the array
*/

let arr = [40, 17, 10, 76, 22];

let producto = arr.reduce(function(a, b){
    return a * b;
});

console.log(producto);

/* 
SILVER
  Given two arrays 
          EX::  const firstArr = [ 1, 2, 3, 4, 5];
                const secondArr = [ 1, 2, 3, 4, 5];
                Create a function that checks to make sure the arrays are the same length
                
                Then returns an array of the products of the elements with matching indexes 
                ( multiply 0 with 0, 1 with 1, etc.).
                EX :: the example arrays should return  [ 1, 4, 9, 16, 25 ]
                If the arrays are not the same length, return an error message
                EX:: 'Please provide valid arrays'
*/

const arrOne = [1, 2, 3, 4, 5];
const arrTwo = [1, 2, 3, 4, 5];

function check(first, second){ //make variable to hold param variables!!!
    if (first.length != second.length){
        return 'you done goofed!';
    } else {
        let p = [];
        for(let i = 0; i < first.length; i++){
            p[i] = first[i] * second[i];
        } return p;
    }  
}
console.log(check(arrOne, arrTwo));

// function checker (arrOne, arrTwo){
//     if(arrOne.length = arrTwo.length){
//         console.log(Array);
//         return new Array(arrOne[i] * arrTwo[i]);
//     } else if(arrOne.length !== arrTwo.length){
//         console.log("Error yo, provide arrays of equal length");
//     }
// }

// checker();

/*
GOLD 
  Given 2 arrays:
  [10,20,30,40,50,70]
  [5,3,2,5]

  Create a function that multiplies 'like' indexes (0 with 0, 1 with 1, etc.) together then place the value in a new array. 

  The function you create should return [50, 60, 60, 200, 50, 70] based on the arrays above.

  Make sure the values given to the function are an array type and they have data inside of them.

  If the first array has more values than the second, return that same number
*/