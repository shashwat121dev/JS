// for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
   // console.log(element);
} 


for (let i = 1; i <= 10; i++) {
  //  console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        
        // console.log(`Inner loop value: ${j}`);
       // console.log(`${i} * ${j} = ${i*j}`);
    }
    
}

let MyArray = ["Shashwat", "Shaurya", "Tejash", "Vaibhav",]

for (let i = 0; i < MyArray.length; i++) {
    const element = MyArray[i];
   // console.log(element);
}

// +++++++++++++ Break and Continue +++++++++++++++++


for (let i = 0; i <= 20; i++) {
    const element = i
    if(element == 5){
        break
    }
    console.log(`Value of i is ${i}`);
    
}
for (let i = 0; i <= 20; i++) {
    const element = i
    if(element == 5){
        continue
    }
    console.log(`Value of i is ${i}`);
    
}