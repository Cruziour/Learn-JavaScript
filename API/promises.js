// fetch('https://something.com').then().catch(),finally()

const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB ChannelSplitterNode, cryptography, network
    setTimeout(function(){
        console.log('Aysnc task is complete');
        resolve()
    },1000)
}) 

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Aysnc Task 2');
        resolve()
    },2000)
}).then(()=>{
    console.log('Promise consumed');
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(()=>{
        resolve({username: "Rupesh", email: "rupeshkr99000@gmail.com"})
    },1000)
})

promiseThree.then((user)=>{
    console.log(user);
})

const promiseFour = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({username: "Cruziour",email:"cruziourwithcode@gmail.com"})
        }
        else{
            reject("ERROR: Something went wrong")
        }
    },1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((myUserName)=>{
    console.log(myUserName);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=> console.log('The promise is either resolved or rejected'))

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({username: "Javascript",password: '123456789'})
        }
        else{
            reject("ERROR: JS went wrong")
        }
    },1000)
})

async function consumePromiseFive(){
   try{
    const response = await promiseFive
    console.log(response);
   }
   catch(error){
    console.log('error');
   }
}

consumePromiseFive()

// async function getAllUser(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);
//         const data = await response.json()
//         console.log(data);
//     } catch(error){
//         console.log(error);
//     }
// }

// getAllUser()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error))