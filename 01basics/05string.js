const name = "Suhani"
const work = "Mehndi class"

// console.log(name + " has started " + work);

console.log(`Hello , My name is ${name} and I have started my ${work}`);

const gameName = new String('Suhani-ghl')

console.log(gameName[0]);
console.log(gameName. __proto__);  // {}
console.log(gameName.length); 
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));  //once go through with all the methods

const newString = gameName.substring(0,4)
console.log(newString);

const anotherName =  gameName.slice(-8,4)
console.log(anotherName);

const newStringOne = "     hgfhfv"
console.log(newStringOne);
 //console.lognew(StringOne.trim());

const url = "https://google.com/suhani%30ghl"

console.log(url.replace('%30','_'));






