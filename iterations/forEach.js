// ForEach loops
const coding = ["js","py","cpp","rb","swift","c","html","css"]

// coding.forEach((item)=>{
//     console.log(item);
// })

function printme(item){
    console.log(item);
}

// coding.forEach(printme)

// coding.forEach( (item, index, arrList) => {
//     console.log(item,index,arrList);
// })

const myCoding = [
    {
        langName: "Javascript",
        filename: "js"
    },
    {
        langName: "Java",
        filename: "java"
    },
    {
        langName: "Pyhton",
        filename: "py"
    },
]

myCoding.forEach( (e) => {
    console.log(e.langName);
})