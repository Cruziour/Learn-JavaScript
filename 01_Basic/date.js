let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

// let myCreateDate = new Date(2023, 0, 23)
// let myCreateDate = new Date(2023, 0, 23, 5, 3)
// let myCreateDate = new Date("2024-01-01")
let myCreateDate = new Date("01-04-2023")
// console.log(myCreateDate);
// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);


newDate.toLocaleString('default',{
    weekday: "long",
})