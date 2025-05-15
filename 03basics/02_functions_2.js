// for adding more than one value in parameter , we can use (...) -- here 3 dots are known as rest operator as well as spread operator

function calculateCartPrice(val1 , val2 , ...num1) {    //for giving multiple values using (...)   // in this 100 will assign to val1 
    // 200 will assign to val2 and remaining will assign to ...num1
    return num1
}

console.log(calculateCartPrice(100 , 200 , 300 , 400));   

const shopping = {
    clothes: "Jeans" , 
    price: "999"
}

function shoppingDetails(obj) {
    console.log(`${obj.clothes} is at just rupess ${obj.price}`);
    
}

shoppingDetails(shopping)

shoppingDetails({
    clothes: "Top" , 
    price: "349"
})

const myNewArray = [100 , 200 , 300 , 400]

function returnValue(getArray) {
   return getArray[2]
}

console.log(returnValue(myNewArray));

