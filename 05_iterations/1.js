// loops

for (let i = 0; i <= 30; i++) {
    const element = i;
    if(element == 21){
        console.log("21 is the best number");
        break;
    }
    console.log(element);
    
    
}

for (let i = 1; i <= 10; i++) {
   console.log(`Outer loop: ${i}`);
   for (let j  = 1; j <= 10; j++) {
    console.log(i + '*' + j  + '=' + i*j);
    }
}

let myArray = ["Pizza" , "Shake" ,"Puffiza"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}