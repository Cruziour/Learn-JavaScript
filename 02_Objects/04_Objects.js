const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Raushan"
}

// course.courseInstructor 

const {courseInstructor} = course
const {courseInstructor: instructor} = course

console.log(courseInstructor);
console.log(instructor);

// JSON 
// {
//     "name": "Rupesh",
//     "courseName": "JS in HIndi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]