const promiseOne = new Promise(function(resolve ,  reject) {
    // do async
    // db , crptography , network
    setTimeout(function(){
        console.log("Async task is completed");
        resolve()
    } , 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
    
})

// second 

new Promise(function(resolve , reject) {
    setTimeout(function() {
        console.log("Async 2");
        resolve()
    } , 2000)
}).then(function() {
    console.log("Promise 2 resolved");
    
})

//third

const promiseThree = new Promise(function(res , rej) {
    setTimeout(function() {
       res({username: "Suhani" , surname: "Gohel"})
    } , 3000)
})

promiseThree.then(function(user) {
    console.log(user);
    
})

// fourth
