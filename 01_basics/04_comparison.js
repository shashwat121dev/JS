console.log(2 > 1); // true 

console.log("2" > 1); // true

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

// > , >= , < , <=  .. Ye sare dataType ko convert kr deta hai tabhi last wale me true aa raha hai because null converts to 0

// == just compare karta hai convert nahi 

console.log(undefined >= 0); //  false
console.log(undefined == 0); // false
console.log(undefined <= 0); // false

// === -> strictly check karta dataType bhi 

console.log("2" === 2); // false