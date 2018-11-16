//check out "promises" on MDN for more info
let promise = new Promise(function (resolve, reject){
    setTimeout(()=>{
        if(true){
            resolve ("success");
        } else {
            reject ("failure");
        }
    }, 4500);
})

promise
    .then(newResult => {
      return newResult + " we are returning from our first '.then.'";
    })
    .then(resDeux => {
        console.log(resDeux);
    })
    .catch(errOnTheSideOfCaution =>{
        console.log(errOnTheSideOfCaution);
    })

    console.log("este code esta siguiendo nuestra promesa, pero esta linea se aprecer en el primero!")