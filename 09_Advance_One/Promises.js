const promiseOne = new Promise(function(resolve, reject){

    setTimeout(function(){
        // console.log("Async Task 1");
        resolve()
    },2000)

})

promiseOne.then(function(){
    // console.log("Task 1 resolved"); 
    
})


new Promise(function(resolve, reject){

    setTimeout(function(){
        // console.log("Async Task 2"); 
        resolve()
    },4000)

}).then(function(){
    // console.log("Task 2 resolved"); 
    
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){

        resolve({username : "Shashwat", email : "shashwatofficial8933@gmail.com"})

    },2000)
})

promiseThree.then(function(user) {
    // console.log(user); 
    
})


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){

    let error = false;

    if(!error){
        resolve({username: "Shashwat", Password: "!@#$"})
    }

    else{
        reject('Error: Something went wrong')
    }

    },2000)
})


promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    // console.log(username); 
})
.catch(function(error){
    console.log(error);
})// .finally(() => console.log("The Promise is either resolve or rejected"))


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){

    let error = true;

    if(!error){
        resolve({username: "JavaScript", Password: "!@#$"})
    }

    else{
        reject('Error: JS went wrong')
    }
    },2000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
    console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}

consumePromiseFive()


async function getAllUsers(){
    
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ",error);
        
    }
    
}

getAllUsers()