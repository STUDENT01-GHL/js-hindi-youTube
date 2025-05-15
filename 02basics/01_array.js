//array   ----- []-> Brackets , ()-> Parentheses , {}-> Braces ---- storing multiple items under a single variable

const myArr = [0 , 1 , 2 , 3 , 4 , 5] //these are elements and they can be a type of numbers , string or mix

console.log(myArr[2]);

const myAnimals = ["Tiger" , "Lion" , "Deer"]

const myArr2 = new Array(1 , 3 , 6 , 7 , 8)
  

// Array methods ---- 

// myArr.push(9)
// myArr.push(11)
// myArr.pop()    // removed last value of the given array
myArr.unshift(6)    // places the value at the starting of the array
myArr.shift()     // removes an element

console.log(myArr.includes(9));
console.log(myArr.indexOf(8))   // returns the answer in minus value

console.log(myArr);
  

const newArr = myArr.join()
console.log( typeof newArr);

//  ---- slice and splice

console.log("A" , myArr);

const arn1 = myArr.slice(1,4)
console.log(arn1);
console.log("B" , myArr);

// splice   --- removed all elements which mentioned in splice(....)

const arn2 = myArr.splice(1,4)
console.log("C" , myArr);
console.log(arn2);


















