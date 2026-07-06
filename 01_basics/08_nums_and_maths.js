const score = 400
// console.log(score); 400

const balance = new Number(500)
// console.log(balance) 
// Ye specifically batata hai ki number hi hai -> [Number:400]

// console.log(balance.toString()); 
// Ye number se string me convert ho jayega

//console.log(balance.toFixed(2)); 
// 2 decimal places tak precision answer -> 400.00

const otherNumber = 129.3482

// console.log(otherNumber.toPrecision(3)); 
// Ye padna hai samajh me kam aaya hai 

const hundreds = 1000000

// console.log(hundreds.toLocaleString('en-IN')); 
// readability badha deta hai zeros ki 

// +++++++++++++++++ Maths ++++++++++++++++++++++++

console.log(Math);

console.log(Math.abs(-4)); // Ye absolute value deta hai kisi bhi number ka 
console.log(Math.round(4.6)); // Ye round of kr deta hai value ko

console.log(Math.ceil(5.3)); // 6 hamesha upper value hi choose karega
console.log(Math.floor(5.9)); // 5 hamesha lower value hi choose karega

console.log(Math.min(3,5,0,8,2,1)); // Ye min value deata hai
console.log(Math.max(3,5,0,8,2,1)); // Ye max value deata hai

console.log(Math.random()); // ye hame ek random value deti hai 0 aur 1 ke beech me
console.log((Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random()* (max - min + 1)) + min); // Ye dhyaan se samjho 
