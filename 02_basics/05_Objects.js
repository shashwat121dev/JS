const course = {
    coursename: "Js Padho",
    price: "0",
    courseInstructor: "Hitesh"
}

// console.log(course.courseInstructor);

// Ise object de-structuring kahte hai 

const {courseInstructor: instructor} = course // Ye ek aur tareeka hai objects ko print karne ka !! 

console.log(instructor);