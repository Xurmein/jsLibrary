let marvelHero={
    hero: 'The Punisher',
    secretID: 'Frank Castiglioni',
    powers: 'guns & revenge',
    avenger: false,
}

function isAvenger(marvelHero){
    if(marvelHero.avenger == true){
        console.log(true);
        console.log(`${marvelHero.hero} is an Avenger`);
        return true;
    } else {
        console.log(false);
        console.log(`${marvelHero.hero} ain't no Avenger`);
        return false;
    }
}

isAvenger(marvelHero);

// //tyler's solution

// let exObj = {
//     color: 'green',
//     name: 'Hulk',
//     smashes: true,
// }

// console.log(objCheck(exObj, 'pants'));

// function objCheck(obj, key){
//     let objKeys = Object.keys(obj);
//     return (objKeys.includes(key)) ? true : false;
// }