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

function loginUserMessage(username){
    return `${username} just logged in !!`
}
