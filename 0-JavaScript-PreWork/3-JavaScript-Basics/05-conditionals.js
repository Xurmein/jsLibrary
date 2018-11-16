/*
//1
var isOn = true;

//2   //3
if(isOn === true) {
    console.log("The light is on."); //4
}

var isOn = true;
    //1
if(isOn) {
    console.log("The light is on. It's bright.");
}

var weather = 75;

if(weather > 70){
    console.log("Wear shorts today! It's going to be hot!");
}
*/

var alarm = true;

if(alarm){
    console.log("Time to wake up!");
}

var thirsty = true;

if(thirsty){
    console.log("drink water");
}

var beforeThreePM = false;

if(beforeThreePM === false){ //is there a way to do this more easily?//
    console.log("It's probably too late for coffee...");
}

var hayDecaf = true;

if(hayDecaf && beforeThreePM === false){
    console.log("...unless they have decaf--do they have decaf?--I might do a half-caf...");
}
var AC = 13;
var attkRoll = 14;

if(attkRoll >= AC){
    console.log("hit");
} else{
    console.log("miss");
}