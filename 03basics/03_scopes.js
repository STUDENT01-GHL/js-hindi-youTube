
let a = 300

if (true) {
    let a = 10
    const b = 21
    c = 30
    console.log("INNER:" , b);
    
}


console.log(a);
console.log(b);
console.log(c);

function one(){
    const username = "Suhani"

    function two(){
        const website = "YouTube"
        console.log(username);
    }
    //console.log(website);
   
    // two()
}

// one()

if (true) {
    const username = "Suru"

    if(username === "Suru") {
        const website = "  Utube"
        console.log(username + website);
        
    }

    console.log(website);
    
}

console.log(username);

// ----- interesting -------

console.log(addOne(5));


function addOne(num) {
    return num + 1
}

//console.log(addTwo(7))

const addTwo = function(num) {
    return num + 3
}

// console.log(addTwo(7))


