const tinderUser = new Object()

// const tinderUser = {} -> Non-Singelton object

// console.log(tinderUser); 

tinderUser.id = "123abc"
tinderUser.name = "Shashwat"
tinderUser.isLoggedIn = false

// console.log(tinderUser); 

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userfullname:  {
            firstname: "Shashwat",
            lastname: "Gupta"
        }
    }
}

// console.log(regularUser.fullName.userfullname.firstname); 
// Dot lagate jao andar badhte jao 

const obj1 = {1: "a", 2: "b", 3: "c"}
const obj2 = {4: "d", 5: "e", 6: "f"}

// const obj3 = {obj1,obj2}
// console.log(obj3); 
// Is case me object ke andar object bn jayega 

//const obj3 = Object.assign({},obj1 , obj2)

const obj3 = {...obj1, ...obj2}

// console.log(obj3);

const user = [
    {
        id: 1,
        email: "user@gmail.com"
    }, 
]

// user[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // array data type me aaya hai

console.log(Object.entries(tinderUser)); // hr key value pair ko ek array bana dega 

console.log(tinderUser.hasOwnProperty('isLoggedIn'))