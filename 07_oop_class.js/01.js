class person {
    constructor(name , age , role) {
        this.name = name ; // this refers to current object
        this.age = age ; 
        this.role = role ; 

    }

    // method inside a class
     greet() {
        console.log(`hello , My name is ${this.name} , I'm a ${this.role}`);
        
     }

}

// create objects from the class 
const per1 = new person ("Suhani" , "Designer");
const per2 = new person ("Rutul" , "HR");

per1.greet();
per2.greet();