// Singleton
// object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Shashwat",
    "Full Name": "Shashwat Gupta",
    [mySym]: "myKey1", // jab [] lagayenge tabhi symbol ki tarah use hoga
    age: 19,
    location: "Basti",
    email: "shaswat@google.com",
    isLoggedIn: false,
    lastLogginDate: ["Monday","Tuesday"]
}

// Behind the seen ye keys jo hai vo string ke form me save ho rahi hai 

// console.log(JsUser.email); 
// console.log(JsUser["email"]); 

// console.log(JsUser["Full Name"]);
// console.log(JsUser.full Name); Aise access hi nahi hoga ab ye 

// console.log(JsUser[mySym]); 

JsUser.email = "guptashashwat1700@gmail.com"

// Object.freeze(JsUser) // Koi changes nahi hoga ab Jsuser me 

JsUser.email = "shashwatofficial8933@gmail.com"

// console.log(JsUser); 

JsUser.greeting = function(){
    console.log("Hello Js User");
}

// console.log(JsUser.greeting());
// JsUser.greeting()

JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}

JsUser.greetingTwo()