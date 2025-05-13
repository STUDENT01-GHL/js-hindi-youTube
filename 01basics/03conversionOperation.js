let score = false
console.log(typeof score);
console.log(typeof (score));


let valueInNumber = Number(score)
console.log(typeof valueInNumber);

console.log(valueInNumber);   // it will be not a number


// "33" => 33
// "33abc" => NaN => not a number 
// true =>1 ; false =>0 


let isLoggedIn = "Suhu"

let booleanLoggedIn = Boolean(isLoggedIn)
console.log(booleanLoggedIn);

// 1 => true ; 0 => false



let someNumber = 33
let stringNumber =  String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);



//    Operations   //


let number = 5
let negValue = -number
console.log(negValue);


console.log(3+3);
console.log(3-3);
console.log(3*3);
console.log(3**3);
console.log(3/3);
console.log(3%3);


let str1 = "hello"
let str2 = " Suhani"
let str3 = str1 + str2
console.log(str3);


console.log(2 + "4");
console.log("2" + 4);
console.log("1" + 2 + 2 + "2");


console.log(+"");
console.log(+true);

let gameCounter = 100
// gameCounter++;
++gameCounter;
console.log(gameCounter);


let a = 5
const b = a++

console.log(`a:${a} , b:${b}`);

let x = 11;
const y = ++x

console.log(`x:${x} , y:${y}`);













