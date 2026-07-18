const userEmail = "shah@gmail.com" // [] -> Truthy value

if (userEmail) {
    console.log("Got user Email");
}else{
    console.log("Didn't get the user email");
}

// Falsy Value :-

// false, 0, -0, BigInt 0n, "", null, undefined, Nan 

// Truthy Value :-

// "0", 'false', " ", [], {}, function(){}, 

const Array = []

if(Array.length === 0){
    console.log("Array is Empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is Empty");
}

// Object.keys(Array ka naam) -> Yaad karo ye karne se sare keys ek array ke form me return hoti thi ab us array ka length nikal lo ... Simple 

// Nullish Coalescing Operator (??) :- null aur undefined ki sari kahani

let val1;

// val1 = 5 ?? 10
// val1 = null ?? 10

// val1 = undefined ?? 30 

val1 = null ?? 10 ?? 15

console.log(val1);

// Ternary Operator

// condition ? true : false

const price = 300

price > 100 ? console.log("More than 100") : console.log("less than 100")