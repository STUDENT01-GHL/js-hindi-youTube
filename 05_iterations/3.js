const coding = ["Python" , "php" , "C" , "Java"]
// in this function() -- you can assume its value like val or value or item
// coding.forEach( function(val) {
//     console.log(val);
    
// } )

// coding.forEach( (item) => {
//     console.log(item);
    
// } )

function printMe(item) {
    console.log(item);
    
}

coding.forEach(printMe)