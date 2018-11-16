//For Loops

/*
sorts of loops:
-For statement
-do while statement
-while statement
-labeled statement
-break statement
-continue statement
-for in statement
-for of statement
*/

for (let i = 0; i < 10; i++){
    console.log(i);
}

for (let x = 0; x <= 20; x += 2){
    console.log(x);
}

for (let y = 10; y >= 0; y--){
    console.log(y);
}

let name = "gurp"; //familiarize self with this sort of for loop; very common
for (let i = 0; i < name.length; i++){
    console.log(name[i]);
}

let sum = 0;
for(let i = 0; i <= 50; i++){
    console.log(sum);
    sum = sum + i;
}
console.log(sum);