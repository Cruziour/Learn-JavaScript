// const arr = [1,2,3,4]

// const initialValue = 0

// const sumWithInitial = arr.reduce( (accumulator, currentValue) => (accumulator + currentValue),initialValue)

// console.log(sumWithInitial);


const shoppingCart = [
    {
        itemName: "js course",
        price: 999
    },
    {
        itemName: "java course",
        price: 1999
    },
    {
        itemName: "Python course",
        price: 1599
    },
    {
        itemName: "Cpp course",
        price: 1000
    },
];


const priceToPay = shoppingCart.reduce( (acc, currval) => (acc + currval.price),0)
console.log(priceToPay);

