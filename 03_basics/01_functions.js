function SayMyName(){
    console.log("K");
    console.log("R");
    console.log("$");
    console.log("N");
    console.log("A");
}

// SayMyName -> Jab khali ye likhte hai to hum reference dete hai 

// SayMyName()
// SayMyName()

// function addTwoNumber(number1, number2) {
//     console.log(number1 + number2);
// }

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
// agr kuch na pass kiya jaye argument me to undefined aata hai 