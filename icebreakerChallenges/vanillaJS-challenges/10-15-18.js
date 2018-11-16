// class Hero {
//     constructor (p, o, a, gf) {
//         this.powers = p;
//         this.origin = o;
//         this.age = a;
//         this.girlfriend = gf;
//     }
// }

let person = {
    name: 'Walter',
    age: 27,
    eyes: 'blue',
};
console.log(person);

function swap(input, propO, propT){
    let ob = {};

    for (let key in input){
        ob[key] = input[key];
    }

    ob[propO] = input[propT];
    ob[propT] = input[propO];

    return ob;
}

console.log(swap(person, 'name', 'age'));


let kaiju = {};

kaiju.name = 'Gojira';
kaiju.age = 270000000;

console.log(kaiju);

console.log(kaiju['name']);

let key = 'name';

console.log(kaiju[key]);

for (let key in kaiju){
    console.log(kaiju[key]);
}