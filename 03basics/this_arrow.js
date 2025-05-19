// for creating current context , we use this keyword  // refers current context

const user = {
    userName: "Suhani",
    age: 20,
    price: 999,

    welcomeMessage: function() {
     console.log(`${this.userName} , How Are You?`);  // this.username works only in objects 
     console.log(this);
     
     
    }
    
}

user.welcomeMessage()
user.userName = "Suru"
user.welcomeMessage()
console.log(this);    // gives output {}


function chai() {
    let username = "Suhani"
    console.log(this.username);   // it gives undefined
    
}
chai()

// const addTwo = (no1 , no2) => {
//    return no1 + no2 ;
// }

// console.log(addTwo(10,21));

const addTwo = (no1 , no2) => (no1 + no2) ;
   
console.log(addTwo(10,21));  // this is called implicit return



