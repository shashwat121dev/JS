// Data Type do type ke hote hai :- 
//  1) Primitive 
//  2) Non Primitive 

// Primitive (Call by value)
// 7 types 
// String, Number, Boolearn, null, undefined, Symbol, BigInt

// Non-Primitve : (Call by Reference)

// Array, Objects, Functions

// Inka dataType object aata hai , Function ka Function aata hai but Function object bola jata hai  

const Id = Symbol('123')
const aId = Symbol('123')

console.log(Id); // Symbol(123)
console.log(aId);

console.log(Id === aId); // false

const heros = ["Dr.APJ Abdul Kalam", "Mahatma Gandhi", "Atal Bihari Bajpai"] // Array 

console.log(heros);

let obj = { // Ye objects hai Key:Value pair 
    name: "Shashwat Gupta",
    age: 20
}

console.log(obj);

const MyFunction = function(){
    console.log("Hello Sweetheart");
}

