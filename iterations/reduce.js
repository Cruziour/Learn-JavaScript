// reduce

const arr = [1,2,3,4,5,6,7,8,9]

// const mytotal = arr.reduce((acc,curval)=>{
//     console.log(acc);
//     console.log(curval);
//     return acc + curval
// }, 0)

// const mytotal = arr.reduce((acc,curval)=>{
//     console.log(`acc: ${acc} and curval: ${curval}`)
//     return acc + curval
// }, 5)

// console.log(mytotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);