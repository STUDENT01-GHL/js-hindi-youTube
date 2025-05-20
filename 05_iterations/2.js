// for of 

// ["" , "" , ""]
// [{} , {} , {}]

const arr = [1 , 2 , 3 ,4 ]
for (const num of arr ) {
    console.log(num);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

// maps

const map = new Map()
map.set('IN' , "India")
map.set('USA' , "United state")
map.set('FR' , "France")
console.log(map);

for (const [key , value] of map) {
    console.log(key , '-' , value);
}

// const myObj = {
//     'g1' : "NFS",
//     'g2' : "Spiderman"
// }

// for (const [key , value] of myObj) {
//     console.log(key , '-' , value);
// }


const myObjects = {
    js: 'Javascript',
    cpp: 'c++'
}

for(const key in myObjects) {
    console.log(myObjects[key]);  // ypu can use `` backticks here
 }

 const prog = ["js " , "C" , "c++"]

 for (const key in prog) {
    console.log(prog[key]);
}




