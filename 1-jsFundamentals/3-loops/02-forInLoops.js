//For in Loops
//great for iterating over values in an object

let student = {name: "Burt", moustache: true, film: "Deliverence", eyes: 2}

for (let item in student){
    console.log(item);
    console.log(student[item]);
}

let catArray = ['tabby', 'siamese', 'burmer', 'maine coone']
for (cat in catArray){
    console.log(catArray[cat]);
}


let nom = 'jake';
let capNom = '';
for (let ch in nom){
    if (ch == 0){
        capName = nom.toUpperCase();
    } else {
        capName = capName + nom.toLowerCase(ch);
    }
}
console.log(nom);
let arr = [1,2,3,4,5,6,7,8,9,10];

let odds = arr.filter(n => n%2)


console.log(odds)

let toTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
toTen.forEach([ ] % 2 === 0);
console.log(toTen);