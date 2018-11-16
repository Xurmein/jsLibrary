let gang="Dennis";

switch (gang) {
    case "Dennis":
        console.log("Tools! My tools--these are my--I NEED MY TOOLS!");
        break;
    case "Dee":
        console.log("Shut up, ya stupid bird!");
        break;
    case "Mac":
        console.log("Stop cultivating and start harvesting!");
        break;
    case "Charlie":
        console.log("I don't speak no good, and the words...they get caught up in my mouth sometimes...");
        break;
    case "Frank":
        console.log("The man in the coil!");
        break;
    default:
        console.log("Get out of here, Snail! Ya! Ya!");
}

let dessert = "apples";

switch (dessert){
    case "pie":
        console.log("3.14159")
        break;
    case "cake":
        console.log("Short skirt, long jacket")
        break;
    case "ice cream":
        console.log("Vanilla")
        break;
    default: 
        console.log("How can you have any pudding if you haven't eaten your meats!?!")
}


let K = 8

switch (true){
    case (K < 0 && K > -20):
        console.log("this switch worked");
        break;
    case (K >= 0):
        console.log("still working");
        break;
    default:
        console.log("not working");
}