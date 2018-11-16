//for of loops are ideal for arrays



let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon'];

for (cat of catArray){
    console.log(cat, 'says meow');
}






let nPut = prompt('')
let oPut = function flipWord(){
  nPut.split('').reverse('').toString(); 
};
  
if(oPut === nPut){
    alert("no!");
 } else {alert("yes!");
}