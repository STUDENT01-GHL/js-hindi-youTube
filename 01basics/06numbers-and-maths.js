const score = 500
console.log(score);

const balance = new Number(100)  // here is an object..
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));    //can use this == toFixed() for making website

const otherNumber = 123.5678    // if you are using a value greater then 5 then value will be changed if precision value is 3..
console.log(otherNumber.toPrecision(4));    // imp property -- using a value less than 5 after (.) then value won't be changed

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));  
// here is another property of showing how many zeros are included and for doing that you can use toLocaleString and if you want to see it as an indian rupee you can use "en-IN" 
 

   //--------     Maths --------------     
   
   console.log(Math);
   console.log(Math.abs(-10));
   console.log(Math.round(-10.8));
   console.log(Math.ceil(10.8));  //top value
   console.log(Math.floor(10.8));  //down value

   console.log(Math.min(2,3,45,6)); // minimum value
   console.log(Math.max(3,4,55,66)); // maximum value

   console.log(Math.random());  // give always changed value and it's answer will be in 0 and 1
     console.log(Math.random()* 10 + 1);
     console.log((Math.random()* 10) + 1);

     const min = 10
     const max = 20
      
     console.log(Math.floor(Math.random() * (max - min +1)) + min);
   
   
   


