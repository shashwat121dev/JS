// While Loop 

// let i = 1
// while (1) {
//     console.log(i);
//     i++
//     if(i == 10) break
// }

let myArray = ["Shashwat", "Shaurya", "Vaibhav", "Tejash"]

let arr = 0

while (arr < myArray.length) {
    //console.log(`Value is: ${myArray[arr]}`);
    arr++
}

let score = 11 // Kaam pahle hota hai condition baad me check hoti hai

do {
    console.log(`Score is: ${score}`);
    score++
} while (score <= 10);