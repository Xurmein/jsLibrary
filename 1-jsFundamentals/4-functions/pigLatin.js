// let plainEng = "String";
// let stepOne = plainEng.substring();
// let stepTwo = plainEng.substring(1, );
// let vowels = ["a", "e", "i", "o", "u"];

// function pigLat(){
//     if(String.atChar(0) == vowels.includes()){
//         console.log(plainEng + "ay");
//     } else {
//     let pL = (stepOne.charAt(0)+ "ay");
//     console.log(plainEng)
//     console.log(stepTwo + pL);
// }
// }
// pigLat(plainEng);

//Tyler's solution:
let sampStr = "i will marry my fiancee";
function pLatin(str){
    let wordsArray = str.trim().split('');
    wordsArray.forEach((word, index) => {
        let lettersArray = word.split('');
        while (lettersArray[0] !== 'a' && lettersArray[0] !== 'e' && lettersArray[0] !== 'i' && lettersArray[0] !== 'o' && lettersArray[0] !== 'u'){
            lettersArray.push(lettersArray[0]);
            letters.shift();
        }
        lettersArray.push('ay');
        wordsArray[index] = lettersArray.join('')
        console.log(lettersArray());
    });
    return wordsArray.join(' ');
}

pLatin(sampStr);