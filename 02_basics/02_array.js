const names = ["shashwat","shaurya","jay","vaibhav"]
const games = ["cricket","football","vollyball","swimming"]

// names.push(games) // Array ke andar Array aa gaya 

// console.log(names);
// console.log(names[4]); // entire games array hi print hoga

// const newArray = names.concat(games) 
// console.log(newArray); 

const newArray2 = [...names, ...games]

// console.log(newArray2);

const anotherArray = [1,2,3,[4,5,6],7,[7,8,[9,10]]]

const real_another_array = anotherArray.flat(Infinity)

// console.log(real_another_array); 


console.log(Array.isArray("Shashwat"));
console.log(Array.from("Shashwat"));

console.log(Array.from({names: "shashwat"})); // Ye depth me padho hai kya ye 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); // Teeno variable ka ek array create kr deta hai 