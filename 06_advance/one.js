// 1 . synchronous strart

console.log(" Start fetching user data .... ");

// 2 . Function thatbreturn a promise
function fetchUserData() {
    return new Promise ((resolve) => {
        setTimeout(() => {
            console.log("Fetch data from API..");
            resolve({name: "Suhani" , role: "Designer"})
            
        } , 2000) //    simultanous network delay
    })
}

// 3 . synchronous processing function
 function formatUser(user) {
    return `${user.name} is working as ${user.role}`;
 }

 // 4 . Async function using asybc / await

 async function displayUser() {
    try {
        const user = await fetchUserData() ; // await the promise
        const message = formatUser(user); // synchronous formatting
        console.log("Done"  + message);
     } catch (error) {
        console.log("Error:" , error);
        
     }
 }


 // 5 . Event loop 

 displayUser();

 console.log("Doing other work while data loads..");
 