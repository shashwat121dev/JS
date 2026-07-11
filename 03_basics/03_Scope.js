
// var c = 299 -> agr yaha declare kr diya var tb bhi value 30 hi print hoke aayegi isiliye var ka use hi nahi karte hai 

let a = 300 // Ye global declaration hai 

if(true){
    let a = 10
    const b = 20 // Yaha teno ka type number hi aata hai 
    // var c = 30
    // c = 30 -> ye bhi var ki tarah hi apne rang dikhayega 
    console.log(`Inner a value = ${a}`);
}

// console.log(a); -> Ye not defined aa gaya 
// console.log(b); -> Ye bhi not defined aa gaya
// console.log(c);  Ye chal gaya but Kyu ?? 

console.log(`Outer a value = ${a}`);



