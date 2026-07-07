const myArray = [1,2,3,4,5]

// console.log(myArray);
// console.log(myArray[2]);

const names = ["Shashwat", "Shaurya", "Vaibhav", "Tejash"]

// console.log(names);

const myArray2 = new Array(2,4,6,8,10) 
// Ye bhi ek tareeka hai array create karne ka 
// console.log(myArray2);

// shallow copies -> share same reference point
// Deep copies -> Do not share same reference point         

// ++++++++++++++++ Array Methods +++++++++++++++++++++

myArray.push(6)
// console.log(myArray);
myArray.pop() // last element ko remove kr dega  

myArray.unshift(9)
// starting me add kr dega 9 ko aur sabko shift kr dega ek place se
// console.log(myArray);

myArray.shift() 
// Ye jo 9 add hua tha usko remove kr dega aur sabko ek peeche shift kr dega

// console.log(myArray.includes(9)); // false
// console.log(myArray.indexOf(9)); // -1
// console.log(myArray.indexOf(3)); // 2

const newArray = myArray.join()

// console.log(myArray);
// console.log(newArray);

// console.log(typeof newArray); // String 

// Slice and Splice 

console.log("A ", myArray);
const myn1 = myArray.slice(1,3) // last idx not included

console.log(myn1);

console.log("B ", myArray);

const myn2 = myArray.splice(1,3)

console.log(myn2);
console.log("C ", myArray);