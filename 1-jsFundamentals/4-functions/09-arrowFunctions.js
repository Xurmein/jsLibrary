//ARROW FUNCTIONS

function coffee(){
    console.log("coffee rules")
}

let tea = () => {
    console.log("tea is an acceptable alternative, though")
}

coffee();
tea();

//cats(0, 1) ---> error: does not hoist
var cats = (kitty, puppy) => {
    console.log(`I have a ${kitty} and a ${puppy}`);
}
cats(0, 1);

//arrow function body styles
//concise
let apples = K => console.log(`there are ${K} apples`)
apples(4000);


//block
let slurm = (F) => {//can only put block style on multiple lines following the opening '{'
    console.log(`drink more ${F}!`)
}
slurm("Duff")