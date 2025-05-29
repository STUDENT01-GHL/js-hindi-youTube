function Person (name , age) {
    this.name = name ;
    this.age = age ;
}

// add method using prototype
Person.prototype.greet = function() {
    console.log(`I am ${this.name} and ${this.age} years old`);
    
};

const per1 = new Person ( "Suhani" , 20);
const per2 = new Person ( "Rutul" , 18);

per1.greet();
per2.greet();