// for of

const arr = [1,2,3,4,5]
 
for (const num of arr) { 
    // console.log(num) 
}

const greeting  = "Hello World !!"

for (const greet of greeting) {
    // console.log(greet); 
}

// Maps

const map = new Map

map.set('In', "India")
map.set('USA', "United States of America")
map.set('JP', "Japan")
map.set('In', "India") // Map unique value leta hai aur jis order me tumne values bheji hai usi order me rakhta hai

// console.log(map);

for (const [key,value] of map) {
    // console.log(key, ':-', value); 
}

const myObject = {
    'game1': 'NFS',
    'game2': 'GTA',
    'game3': 'Spider Man'
}

for (const [key,value] of myObject) {
    // console.log(key, ':-', value);  -> Isse object iterate nahi hote hai 
}
