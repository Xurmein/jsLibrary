// /*
// SCOPE

// .js has both LOCAL and GLOBAL scope
// */

// var x = 12; //global scope

// function scope() {
//     var x = 33;   //local scope
//     console.log(x);
// }

// scope(); //output -> 33
// console.log(x); //output -> 12

// //
// var x = 12;

// function scope2() {
//     x = 33; //grabs global scope var, does not create var of same name operated on at local scope
//     console.log(x);
// }

// scope2(); //output -> 33
// console.log(x); //output -> 33

// //first example, effectively, has 2 vars named 'x'; second has one var named 'x.'

// let x = 12;

// function scope3() {
//     let x = 33;
//     if (true) {
//         let x = 45;
//         console.log(x); //runs first, most local scope 
//     }  //{} w/in {}, when using var, causes "bleed"; using let prevents "bleed."
//     console.log(x); //runs second, local scope
// }

// scope3();
// console.log(x);//runs third, global scope

// /*var obeys global and functional 
// scope rules, but not sub-functional scope.
// let obeys all scope rules
// */

function consTest() {
    const scope4 = 1;
    if (true) {
        const scope4 = 2;
        console.log(scope4);
    }
    console.log(scope4);
    if (true) {
        const scope4 = 3;
        console.log(scope4);
    }
    console.log(scope4);
}
consTest();
console.log(consTest);

/*
    variable declar.   obeys functional scope    obeys block scope   can be mutated (changed after initialization)
    var                 x                         o                   x
    let                 x                         x                   x
    const               x                         x                   o
*/
