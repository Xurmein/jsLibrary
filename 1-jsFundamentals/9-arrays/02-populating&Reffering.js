let students = ['tony', 'huey', 'dewie', 'louie', 23, true, ['jeff', 'feleesha']];
console.log(students[6] [1]);


console.log(`Bye, ${students[6][1]}!`);



let food = ['pecan pie', 'quesadilla', 'corn chowder', 'tater tots', 'burger'];
for (let F of food){
    console.log(F);
}

//for (i = 0; i < food.length; i++);
//console.log(food[i]);

food.push('pizza');//appends 'pizza' to the end of the array
// console.log(food);

            ///quantity of values to remove f/m array
food.splice(1, 1, 'nanners');
//////////index num   //replacement f/m value
console.log(food);



food.splice(2, 0, 'bangers & mash');
console.log(food);


food.pop();///removes the last value from array

