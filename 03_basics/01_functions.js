function SayMyName(){
    console.log("K");
    console.log("R");
    console.log("$");
    console.log("N");
    console.log("A");
}

// SayMyName -> Jab khali ye likhte hai to hum reference dete hai 

// SayMyName() => Jab ye likhte hai to hum function ko call karte hai.
// SayMyName()

function addTwoNumber(number1, number2) {
    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result = addTwoNumber(2,3)
// console.log(result); 

function loginUserMessage(username = "Nobody"){ // Aaise default value de di jati hai 
    // if(!username){
    //     console.log("Please Enter the name..");
    //     return
    // }
    return `${username} just logged in !!`
}

console.log(loginUserMessage("Shashwat"));
console.log(loginUserMessage());
// agr kuch na pass kiya jaye argument me to undefined aata hai agr default value na di ho to.

const greet = function(){ // => Isko Function Expression bolte hain.
     // Functions bina naam ke bhi banaye ja sakte hain. Aise functions ko Anonymous Function bolte hain.
    console.log("Hello World"); 
}
console.log(greet); // => Ye pura function return karega kyuki humne function ko call nahi kiya hai.