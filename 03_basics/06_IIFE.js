// Immediately Invoked Function Expression (IIFE)

// Jo function immediately execute ho jaye aur global variables unhe polute na kr paye vo IIFE function hote hai

(function chai(){ // Ye named IIFE hai 
    console.log(`DB Connected`);
})(); // semicolon compulsory hai lagana agr do IIFE likh rahe ho to 

// Pahla parenthesis me function ki defination likhte hai aur dusre wale me execution call hoti hai 

( (name) => {
    console.log(`DB Connected Two ${name}`);
})('Shashwat') 