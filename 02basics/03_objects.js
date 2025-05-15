// singleton -- while you are using constructor

// here we are going to discuss object literals ---- for declaring an object

const mySmb = Symbol("key1")

const JsUser = {
    name: "Suhani",
    "full name": "Suhani Gohel",
    [mySmb]: "myKey1",
    age: 20,
    address: "Ahmedabad",
    email: "abc1@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday" , "Saturday"]
}

// there are two ways to access object elements

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySmb]);


JsUser.name = "Suhu"
 // Object.freeze(JsUser)    // for changing the value
JsUser.name = "Suhu"

console.log(JsUser["name"])

console.log(JsUser);

// adding a function 

JsUser.greetings = function() {
    console.log("Hello JS User");
    }

    JsUser.greetingsTwo = function() {
    console.log(`Hello JS User, ${this.name}`);                   // it is called string interpallution
    }

    
 console.log(JsUser.greetings()); // gives the proper output
 console.log(JsUser.greetingsTwo());

  console.log(JsUser.greetings);    // gives the reference

 


