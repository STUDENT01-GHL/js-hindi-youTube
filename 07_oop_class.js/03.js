const person = {
    name : "Suhani",
    age : 20,
    greet : function() {
        console.log(`Hello , my name is ${this.name}`);
        
    }
};
 person.greet() ;