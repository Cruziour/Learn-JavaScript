// fetch('https://api.github.com/users/Cruziour').then().catch().finally()

// 1st Promise 
const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB ChannelSplitterNode, cryptography, network call 

    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
    
})

// 2nd Promise 
new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log('Async task 2');
        resolve()
    },2000)
}).then(()=>{
    console.log('Async 2 resolved'); 
})

// 3rd Promise
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@exapmle.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

// 4th Promise 
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "Rupesh", password: "Rupesh@2002"})
        }
        else{
            reject('ERROR: Something went Wrong')
        }
    },2000)
})

promiseFour
.then(function(user){
    console.log(user); 
    return user.username   
})
.then(function(username){
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(function(){
    console.log('The promise is either resolved or rejected.');
})

// 5th Promise 

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username:"Javascript", password: "Rupesh@2002"})
        }
        else{
            reject('ERROR: JS went Wrong')
        }
    },1000)
})

async function consumePromiseFive(params) {
    try{
        const response = await promiseFive
        console.log(response);
    } catch(error){
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUser(params) {
//     try{
//         const response = await fetch('https://api.github.com/users/Cruziour')
//         const data = await response.json()
//         console.log(data);
//         // console.log(response);
        
//     } catch(error){
//         console.log('E: ',error);
//     }
// }

// getAllUser()
const ownObject = {
    username: "Rupesh"
}
fetch('https://api.github.com/users/Cruziour',ownObject)
.then((response)=>{
    console.log(ownObject.username);
    
    return response.json()
})
.then((data)=>{
    console.log(data);   
})
.catch((error)=>{
    console.log(error);
})
