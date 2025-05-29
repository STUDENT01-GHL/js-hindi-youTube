const person = {
    name : "Suhani" ,
    greet : function () {
        console.log(`Hello , I'm ${this.name}`);
        
    }
};
 
const per2 = {
    name : "Rutul"
}

per1.greet();
per1.greet.call(per2);