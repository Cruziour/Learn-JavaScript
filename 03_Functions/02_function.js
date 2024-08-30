function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200,300,400,500));

const user = {
    username: "Rupesh",
    price: 999
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);  
}

// handleObject(user)
// handleObject({
//     username: "Raushan",
//     price: 399
// })

const myNewArray = [200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100,800,400,600]));
