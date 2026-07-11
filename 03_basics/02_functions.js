function CalculateCartPrice(...num1){ // Rest operator 
    return num1
}

// ... Lagane se ab jitna chahe utna arguments pass kar do sab ek array ke form me return ho jayega baad me use add kar lena .. simple 

console.log(CalculateCartPrice(299,399,499));

const user = {
    username: "Shashwat",
    price: 199
}

function HandleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

// HandleObject(user) 

HandleObject({ // Direct bhi pass kr sakte the 
    username: "Sam",
    price: 399
})

const myNewArray = [200,400,600,800]

function ReturnSecondValue(getArray){
    return getArray[1]
}

// console.log(ReturnSecondValue(myNewArray));

console.log(ReturnSecondValue([199,299,399,499,599])); // Direct bhi pass kr sakte hai 