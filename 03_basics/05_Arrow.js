const user = {
    username: "Shashwat",
    price: 999,

    welcomeMessage: function(){ // Aaise bhi functin bana sakete hai
        console.log(`${this.username}, welcome to this website`);
        // console.log(this); => Pura object return ho raha hai kyuki this keyword refer kar raha hai us object ko jiske andar ye function hai.
    }
}
// Jab object ke andar function hota hai to hum use Method kehte hain.

// user.welcomeMessage()

// user.username = "Shaurya" => Username Change ho jayega !!
// user.welcomeMessage()

// console.log(this); -> Ye refer karega ek empty object ko 

function Chai() {
    let username = "Shashwat"
    console.log(this.username); 
    // Ye undefined return karega kyuki ye function kisi object ke andar nahi hai isliye this keyword kisi object ko refer nahi kar raha hai.
}
// Chai() 

// +++++++++++++++ Arrow Function +++++++++++++++++++++ 

const chai = () => {  // => Ye ek arrow function hai 
    let username = "Shashwat"
    console.log(this.username); // --> Undefined 
}
// chai() 

const AddTwo = (num1, num2) => {
    return num1 + num2
} //  ... Curly braces use kiye to return keyword likhna hi padega 

// console.log(addTwo(3,4));

const addTwo = (num1,num2) => num1 + num2 // Ye ek aur tareeka hai define karne ka 

// console.log(addTwo(2,3)); 
// console.log(addTwo); => Iske andar pura function return hoga kyuki humne function ko call nahi kiya hai.

const myArray = [2,3,4,5,6,7,8,9,0]

// myArray.forEach(() => {}) -> Ye ek arrow function hai jo ki forEach method ke andar pass kiya gaya hai.