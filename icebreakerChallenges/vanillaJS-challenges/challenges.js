/*
Challenge (Arrays):
Color List:

Create a function that can take in arrays.
Create an array of colors
Create an array of suffixes for placement (i.e. st (for 1st), nd (for 2nd), rd (for 3rd), etc)

In the function, filter through both arrays and print out the placement and the color for each individual colors (i.e. 1st is green, 2nd is blue, 3rd is red, 4th is orange, etc) until all of the colors are listed out with the appropriate placement.

Not to make it too hard on yourself, you can stop the count at ten
*/


let colors = ["red", "blue", "green", "yellow", "pink", "purple", "brown", "indigo", "mauve", "orange"];

let placement = ["st", "nd", "rd", "th",];



function placer(colors, placement){
    for(let c of colors.indexOf(prototype >= [3])){
        console.log(c + placement.indexOf([3]));
    }
}

placer(colors, placement);
console.log(placer());


//tyler's solution

// let colArr = ["black", "white", "chartreuse", "gray", "maroon", "taupe", "gold", "silver", "ebony", "violet"];
// let suffArr = ["st", "nd", "rd", "th", "th", "th", "th", "th", "th", "th"];\

// function colorPlace(colors, suffixes){
//    colors.forEach(element, index => {
//        console.log(`${index+1}${suffixes[index]} is ${colors[index]}`);
//    });
// }

// colorPlace(colArr, suffArr);


