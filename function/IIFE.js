// Immediately Invoked Function Expressions (IIFE)
// function chai(){
//     console.log(`DB Connected`);

// }

// chai()

// IIFE -> Global scope ke pollution ko hatne ke liye use karte hai
(function code(){
    // named IIFE
    console.log(`Rupesh`);
})();

(()=>{
    // unnamed IIFE
    console.log(`DB Connected`);
})();

((name)=>{
    console.log(`DB Connected ${name}`);
})("Rupesh");

