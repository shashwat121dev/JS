// Memory 2 Type ki hoti hai :- 
// Stack and Heap

// Stack(Primitive) .. Heap(Non-Primitive)
// Stack -> Variable ka copy milta hai
// Heap -> Variable ka address milta hai 

let userOne =  {
    email: "user@google.com",
    upi: "user@fam"
}
let userTwo = userOne

userTwo.email = "shashwat@google.com"


console.log(userOne.email);
console.log(userTwo.email);

