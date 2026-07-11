function one(){
    const username = "Shashwat"

    function two(){
        const website = "Youtube"
        console.log(username);
    }

    // console.log(website); -> Ye scope se bahar hai so not defined 

    two()
}

// one() 

if(true){
    const username = "Gupta Jii"
    if(username === "Gupta Jii"){
        const website = " Youtube"
        // console.log(username + website);
    }
    // console.log(website); 
}

// console.log(username); 

// +++++++++++++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++++++++

console.log(addone(5));

function addone(num){
    return num + 1
}

// ------------------ Ye bhi dusra tareka hai function ko initialize karne ka

// console.log(addTwo(4));  -> Yaha error aa jayega *** Hosting *** 

const addTwo = function(num){
    return num + 2
}



