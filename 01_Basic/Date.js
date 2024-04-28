// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleDateString("en-IN"));
// console.log(typeof myDate);

// let mycreatedDate = new Date(2023,0,23)
// console.log(mycreatedDate.toDateString());
// let mycreatedDate = new Date(2023,0,23,5,3)
let mycreatedDate = new Date("01-04-2025")
// console.log(mycreatedDate.toDateString());

// console.log(mycreatedDate.toLocaleDateString());
// console.log(mycreatedDate.getTime());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(mycreatedDate.getTime());
// console.log(Date.now());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay()+1);
// console.log(newDate.getTime());

// console.log(`${}`);

let customiseDate = newDate.toLocaleString('default',{
    weekday: "long"
})
console.log(customiseDate);