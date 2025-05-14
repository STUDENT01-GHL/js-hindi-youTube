const mr_heros = ["Spiderman" , "Ironman" , "Thor"]   // created 1st array
const dc_heros = ["Batman" , "Fash", "Superman"]

// mr_heros.push(dc_heros)

// console.log(mr_heros);

const allHeros = mr_heros.concat(dc_heros)
console.log(allHeros);


const all_new_heros = [...mr_heros , ...dc_heros]  //more prefferd

console.log(all_new_heros);

// flat ---- 

const another_arr = [2 , 5 , 5, 6 , [5 ,6, 7],[6 ,7], [5]]
const real_another_array = another_arr.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Suhani")); // for checking
console.log(Array.from("Suhu"));   // for converting in an array
console.log(Array.from({name: "Suhani"}));  // interesting and give [] an empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1 , score2 , score3));


// learn about isArray , from and of





















