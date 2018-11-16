//hoisting

console.log(scissors); //undefined because scissors were hoisted
var scissors ="blue"; //output -> undefined; code logs scissors before var is defined

console.log(scissors);//output -> blue


//example of hoisting below.... can call function before defining function
hiya();
function hiya (){
    console.log('hoisting is interesting');
}
hiya();

//hoisting lets us define function once, and call function anywhere in file.
//hoisting can be cancelled