//ternaries

var w=1;

(w > 0) ? console.log("w is a positive number") : console.log("w is 0, or less")

let x = 0;
                                                                    //the default case                                                                
(x === 0) ? console.log("x is 0") : (x < 0) ? console.log("x is neg"): console.log("x is pos")
                                                                    //ternaries require a default case, unlike switch

let age = 1000;
(age >= 25) ? console.log("Go rent a car") 
: (age >= 21) ? console.log("drinking") 
: (age >= 18) ? console.log("vote") 
: (age === 1000) ? console.log("Gaht-damn, Methusella!") 
: console.log("You're a child!");


let ugo = 6;

(ugo < 0 && ugo > -1) ? console.log("buenis")
:(ugo > 50 || ugo < 7) ? console.log("when in rome")
:(ugo === -9 || ugo === 9) ? console.log("the absolute value of ugo is 9")
:console.log("what the hell is this code trying to achieve?");