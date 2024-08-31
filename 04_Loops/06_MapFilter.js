// const coding = ['js','python','ruby','cpp','java']

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item
// })

// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )

// const newNums = myNums.filter( (nums) => (nums > 4))

// console.log(newNums);

// const newNums = []
// myNums.forEach( (nums) => {
//     if (nums > 4) {
//         newNums.push(nums)
//     }
// })

// console.log(newNums);

let studentInfo = [
    {name: 'Adhiraj Gupta', marks: '94%', class: 'B-Tech', address: 'Delhi'},
    {name: 'Nikhil Kumar', marks: '74%', class: 'BCA', address: 'Motihari'},
    {name: 'Rupesh Kumar Raushan', marks: '74%', class: 'BCA', address: 'Jandaha Jandaha'},
    {name: 'Arti Kumari', marks: '73%', class: 'BCA', address: 'Hajipur'},
    {name: 'Arti Kumari', marks: '73%', class: 'BCA', address: 'Hajipur'},
    {name: 'Shivani Kumari', marks: '81%', class: 'BCA', address: 'Sitamarhi'},
    {name: 'Shivani Kumari', marks: '81%', class: 'BCA', address: 'Sitamarhi'},
    {name: 'Arya Andita', marks: '78%', class: 'BCA', address: 'Motihari'},
    {name: 'Arya Andita', marks: '78%', class: 'BCA', address: 'Motihari'},
    {name: 'Arya Andita', marks: '78%', class: 'BCA', address: 'Motihari'},
    {name: 'Arya Andita', marks: '78%', class: 'BCA', address: 'Motihari'},
    {name: 'Arya Andita', marks: '78%', class: 'BCA', address: 'Motihari'},
    {name: 'Arya Andita', marks: '78%', class: 'BCA', address: 'Motihari'},
    {name: 'Arya Andita', marks: '78%', class: 'BCA', address: 'Motihari'},
    {name: 'Arya Andita', marks: '78%', class: 'BCA', address: 'Motihari'},
    {name: 'Arya Andita', marks: '78%', class: 'BCA', address: 'Motihari'},
    {name: 'Arya Andita', marks: '78%', class: 'BCA', address: 'Motihari'},
    {name: 'Arya Andita', marks: '78%', class: 'BCA', address: 'Motihari'},
    {name: 'Arya Andita', marks: '78%', class: 'BCA', address: 'Motihari'},
];

const student = studentInfo.filter( (st) => st.name === "Shivani Kumari")

console.log(student);
