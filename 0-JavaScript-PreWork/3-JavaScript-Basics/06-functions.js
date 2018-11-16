/*function pacersWon(){
    console.log("Pacers won!");
}
pacersWon();
pacersWon();
pacersWon();
pacersWon();
pacersWon();

function numberEntered(x){
    console.log("The number you entered was: ", x);
}

numberEntered(5);
numberEntered(4);
numberEntered(3);
numberEntered(2);
numberEntered(1);

function addAnyTwoNumbers(x, y){
    console.log(x + y);
}

addAnyTwoNumbers(4, 5);
addAnyTwoNumbers(6, 11);
addAnyTwoNumbers(7, 8);

//practice (do before Orientation)

//Declare it
function subtractTwoNumbers(firstNum, secondNum){
    console.log(secondNum - firstNum);
}

//Call it
subtractTwoNumbers(5, 7);

function getMyTaxReturnAndDoMyTaxesAndStuff(a, x, y, z){
    let myInc = a * x;
    let myTaxes = myInc - y;
    let total = myTaxes + z;
    return total; 
}

getMyTaxReturnAndDoMyTaxesAndStuff(10000, 5, 50000, 0);

//more practice (before orientation)

function add(x, y){
    let sum = x + y;
    console.log(sum);
    return sum;
}

add(1, 1);

function fullName(first, last){
    var wholeName = first + " " + last;
    console.log(wholeName);
    return wholeName;
}

fullName("Paul", "O'Connor");

function petNameAndBreed(name, breed){
    var petDetails = name + ", " + breed;
    console.log(petDetails);
    return petDetails;
}
petNameAndBreed("Sansa", "Generic");

//great challenge (before orientation)

function calculatePriceIndiana(quantity, price){
    var tax = 0.07;
    var totalTax = quantity * price * tax;
    var totalPrice = totalTax + quantity * price;
    console.log(totalPrice);
    return totalPrice;
}

calculatePriceIndiana(17, 5);
*/

function mathMath(v, w, x, y, z){
    let sum = w + v;
    let minus = sum - x;
    let mult = minus * y;
    let quo = mult / z;
    console.log("The result is: ", quo);
    return quo;
}

mathMath(3, 5, 98, 3, 62);

function whatsThisDo(bling, blang, blong){
    console.log("Try to figure out what I did to those numbers!");
    let modiOne = bling % blang;
    let modiTwo = modiOne / blong;
    var mathSorcery = "Now here's the the answer: " + modiTwo;
    console.log(mathSorcery);
    return mathSorcery;
}

whatsThisDo(13, 13, 13);
whatsThisDo(71, 43, 5);
whatsThisDo(23495033, 2345923442231, 6545623242350234);