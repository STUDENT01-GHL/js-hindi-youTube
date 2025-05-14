// singleton -- while you are using constructor

// here we are going to discuss object literals ---- for declaring an obje false,

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


JsUser.name = ""