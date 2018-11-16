// const theGang = [
//     { name: 'Mac', job: 'bouncer', role: 'the brains' },
//     { name: 'Charlie', job: 'janitor', role: 'wildcard, bitches!' },
//     { name: 'Dennis', job: 'bartender', role: 'the looks' },
//     { name: 'Dee', job: 'waitress', role: 'the useless chick' },
//     { name: 'Frank', job: 'manager', role: 'the muscle' }
// ]

// // let theGang_names = [];

// // for (let i = 0; i < theGang.length; i++) {
// //     theGang_names.push(theGang[i].name);
// // }

// // console.log(theGang_names);

// let whoIsTheGang = theGang.map(i => i.name + ': ' + i.role + ', also--' + i.job);
// console.log(whoIsTheGang);


var kvArray = [
    {key: 1, value: 20},
    {key: 2, value: 10},
    {key: 3, value: 30}
];

console.log(kvArray);

var reformatArray = kvArray.map(obj => {
    var reformat = {};
    reformat[obj.key] = obj.value;
    console.log(reformat);
    return reformat;
})