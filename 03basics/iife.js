// global scope ke pollution ko hatane ke liye -- we use IIFE --> Immediately Invoked Function Expression


(function chai() {
    console.log(`DB connected`);
    
}) ();

( (name) => {
    console.log(`DB connected two , ${name}`);
    
}) ("Suhani")