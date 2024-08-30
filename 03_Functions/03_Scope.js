var c = 300
let a = 600
if(true){
    let a = 10
    const b = 20
    var c = 30
}


// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Rupesh"

    function two(){
        const website = "youtube"
        console.log(username);    
    }
    // console.log(website);
    
    two()
}

// one()


// console.log(addTwo(5)); error hoisting
const addTwo = function(num){
    return num + 2
}

console.log(addTwo(8));

