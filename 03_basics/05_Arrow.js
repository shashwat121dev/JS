const user = {
    username: "Shashwat",
    price: 999,

    welcomeMessage: function(){ // Aaise bhi functin bana sakete hai
        console.log(`${this.username}, welcome to this website`);
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Shaurya"
// user.welcomeMessage()

// console.log(this); -> Ye refer karega ek empty object ko 

// function chai() {
//     let username = "Shashwat"
//     // console.log(this.username); -> Ye undefined aayega 
// }
// chai()

const chai = () => { // Ye ek arrow function hai 
    let username = "Shashwat"
    // console.log(this.username); --> Undefined 
 
}
// chai() 

// const addTwo = (num1, num2) => {
//     return num1 + num2
// } ... Curly braces use kiye to return likhna hi padega 

// console.log(addTwo(3,4));

// const addTwo = (num1,num2) => num1 + num2 // Ye ek aur tareeka hai define karne ka 

const addTwo = (num1,num2) => (num1 + num2)

console.log(addTwo(2,3));

const myArray = [2,3,4,5,6,7,8,9,0]

// myArray.forEach(() => {}) 