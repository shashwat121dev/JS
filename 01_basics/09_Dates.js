// Isme ek naya feature aane wala the ek baar check karna ki kya aa chuka mai mdn pe

let myDate = new Date()
// console.log(myDate.toString());

console.log(typeof myDate); // object 

// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());

// Ye upar sare different ways hai dates ko represent karne ke

const myCreatedDate = new Date(2006,2,27)
//console.log(myCreatedDate.toDateString());

// Month jo hai js me vo 0 se start hote hai 

const anotherDate = new Date("2006-03-27")
//onsole.log(anotherDate.toLocaleDateString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(anotherDate.getTime());

// console.log(Math.floor(Date.now()/1000)); ye seconds me aa jayega time

let newDate = new Date()
console.log(newDate.getMonth() + 1)
console.log(newDate.getDate());

newDate.toLocaleString('default',{
    weekday: "long",
}) 
// Isse aur zada define kr sakte ho time ko 