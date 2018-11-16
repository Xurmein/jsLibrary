//ITERATING

let abScores = ["STR", "DEX", "CON", "INT", "WIS", "CHA"];

// abScores.forEach(score => {console.log(score)})

abScores.forEach((score, number) => {
    console.log(score);
    console.log(number);
})

let movies = ["Eraser Head", "Metropolis", "Citizen Kane", "Nosferatu"];
// movies.forEach((film) => {
//     console.log(film);
// })

movies.push("It's a Wonderful LIfe");
console.log(movies);
movies.splice(3, 1, "The Wizard of Oz");
console.log(movies);


let long = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(long.length);

let newArray = new Array(73);
console.log(newArray.length);
newArray.forEach(el => {
    console.log(el);
})
console.log(newArray);