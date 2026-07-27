const coding = ["java","js","python","cpp","ruby"]

const value = coding.forEach( (item) => {
    // console.log(item);
    // return item  => ye undefined return kar raha hai 
} )

// console.log(value); 

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter( (nums) => nums > 4 )
// console.log(newNums); 

//  Agr yaha mai {} se scope on kr du to return keyword use karna padega 

const newNums = []

myNums.forEach( (nums) => {
    if(nums > 4){
        newNums.push(nums)
    }
} )

console.log(newNums);