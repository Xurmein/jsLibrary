//callbacks

//the following are NESTED FUNCTIONS
function one(x){
    return x;
}

function deux(dataFmOnce){
    return `I can has ${dataFmOnce}, please?`
}

function three(dataFmTwice){
    return dataFmTwice;
}
console.log(three(deux(one('Satan'))));


//callbacks w/ a promise
let promesa = new Promise((resolve, reject) => {
    setTimeout(()=> {
        (true) ? resolve('it worked!'): reject('no work...');
    }, 3000);
})

promesa
    .then(result => {
        console.log(result);
    })
    .catch(err =>{
        console.log(err);
    })