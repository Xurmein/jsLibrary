//RETURNS

function playWright(title, author){
    return title + " " + author;
}
 
let play = playWright("Hamlet", "Billy Shakes");
console.log(play);

tip=0.15;

function myWaiterEarned(charge, tip){
    return (charge * tip);
}

let totals = myWaiterEarned(75, tip);
console.log(totals)
