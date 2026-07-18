// if

// const IsUsserLoggedIn = true

// if (IsUsserLoggedIn == true){
//     console.log("Hello Shashwat");
// }

// 2 == "2" -> true
// 2 === "2" -> false
// 3 != "3" -> true 

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User Power: ${power}`);
// }

// const balance = 1000 

// if (balance > 500) console.log("Paisa 500 se zada hai"), console.log("Aaise , lagake mt likhna");

// if (balance < 500) {
//     console.log("Balance less than 500");
// }
// else if (balance < 750){
//     console.log("Balance less than 750");
// }
// else if (balance < 900){
//     console.log("Balance less than 900");
// }
// else{
//     console.log("Balance less than 1200");
// }

const UserLoggedIn = true
const debitCard = true  
const LoggedInFromGoogle = true
const LoggedInFromEmail = true 

if (UserLoggedIn && debitCard) {
    console.log("Allowed to buy course");
}

if (LoggedInFromEmail || LoggedInFromGoogle) {
    console.log("User Logged In");
}