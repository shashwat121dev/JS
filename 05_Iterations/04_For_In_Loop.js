// for in loop 

// Abhi tk objects pe loop nahi lag raha tha .. ab lagega 

const myObject = {
    js: 'Java Script',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'Swift by apple'
}

for (const key in myObject) {
    // console.log(`${key} := ${myObject[key]}`); 
}

const programming = ["js", "ruby", "python", "c++"]

for (const key in programming) {
    console.log(programming[key]);
}