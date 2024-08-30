


function sayMyName(){
    console.log("R");
    console.log("u");
    console.log("p");
    console.log("e");
    console.log("s");
    console.log("h");
}

// sayMyName()

// function addTwoNumbers(num1, num2){
//     console.log(num1+num2);
// }

// // addTwoNumbers(3,4)
// addTwoNumbers(3,null)

function addTwoNumbers(num1, num2){
    // let result = num1+ num2
    // return result

    return num1 + num2
}

// addTwoNumbers(3,4)
console.log(addTwoNumbers(85,14));


function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return  
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Rupesh"));
console.log(loginUserMessage(""));
console.log(loginUserMessage());
