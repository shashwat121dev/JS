// For Each Loop Array ka ek special method hai 

const coding = ["js","ruby","python","cpp"]

coding.forEach( function(items) {
    //  console.log(items); 
} )

coding.forEach( (val) => { // Arrow function
    // console.log(val); 
} )

function printMe(items){
    console.log(items); 
}

coding.forEach(printMe) // yaha khali reference pass karna hai 

coding.forEach( (item,index,arr) => {
    // console.log(item,index,arr); 
})

const MyCoding = [
    {
        languageName: "javaScript",
        languageFileName: "js"
    },

    {
        languageName: "java",
        languageFileName: "java"
    },

    {
        languageName: "javaScript",
        languageFileName: "js"
    }
]

MyCoding.forEach( (item) => { // Array ke andar objects ko kitni aasani se access kr liya
    // console.log(item.languageName); 
} )