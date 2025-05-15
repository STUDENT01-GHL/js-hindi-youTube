const tinderUser = new Object()   // this is a singleton object

//const tinderUser = {}   // non - singleton object

tinderUser.id = "s12"
tinderUser.name = "Suhani"
tinderUser.surname = "Gohhel"
tinderUser.isLoggedIn = true

// console.log(tinderUser);

const regUser = {
    email: "s1@ggogle.com" ,
    user: {
        fullname: {
            firstname: "Suhani" ,
            middlename: "RajeshKumar" ,
            lastname: "Gohel"
        }
    }
}



console.log(regUser.user.fullname.middlename);

// ----- combinig array --------------

const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"a" , 4:"b"}

//const obj3 = Object.assign({} , obj1 , obj2)   // here object assign is the static method  and {} is a target  and obj1 , 
// obj2 is source
  
// using spred operator 

obj3 = {... obj1 , ... obj2}

console.log(obj3);


// whwn it comes from database

//  const users = [
//     {
//         id: "s1@google.com",
//         name: "Suhani"
//     },
//     {

//     },
//     {

//     },
//  ]

//  user[1].email // for accessing values

 console.log(tinderUser);

 console.log(Object.keys(tinderUser)); 
  console.log(Object.values(tinderUser));  // here datatypes is array
   console.log(Object.entries(tinderUser));  // showing key : value pairs
    console.log(tinderUser.hasOwnProperty('isLoggedIn'));
     console.log(tinderUser.hasOwnProperty('isLogged'));
 
 

