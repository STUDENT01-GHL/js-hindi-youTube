let myDate = new Date()
console.log(myDate.toString());   //Thu May 15 2025 03:14:55 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // using to-- write all properties and write their outputs //Thu May 15 2025
console.log(myDate.toLocaleDateString());  //5/15/2025
console.log(typeof myDate);  // object

let myCreateDate = new Date(2023, 0 , 23 , 3 , 5)  //Mon Jan 23 2023
console.log(myCreateDate.toDateString());

console.log(myCreateDate.toLocaleString());  //1/23/2023, 3:05:00 AM

let myDateIs = new Date("2024-01-14")
console.log(myDateIs.toLocaleString());  //toLocaleString is  a method here

let myTimeStamp = Date.now()
console.log(myTimeStamp);   // print milisecond
console.log(myCreateDate.getTime());

console.log(Math.floor(Date.now()/1000));   // for converting into second

// ----- few more methods ---- 

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getHours());
console.log(newDate.getMilliseconds);
console.log(newDate.getMinutes());
console.log(newDate.getMonth());
console.log(newDate.getSeconds());
console.log(newDate.getTime());
console.log(newDate.getTimezoneOffset());
console.log(newDate.getUTCDate());
console.log(newDate.getUTCDay());

 //`${newDate.getDay()} and the time is:::`

 newDate.toLocaleString('default' , {
    weekday: "long"
 })

