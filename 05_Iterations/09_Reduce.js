const myNums = [1,2,3]

const myTotal = myNums.reduce( (acc,curval) => {
    // console.log(`acc: ${acc} and currval: ${curval}`); 
    return acc + curval
}, 0)

console.log(myTotal);

const fullTotal = myNums.reduce( (acc,currval) => acc + currval, 0)
console.log(fullTotal)

const shoppingCart = [
    {
    itemName: "Js Course",
    price: 999
    },

    {
    itemName: "Mobile Dev Course",
    price: 5999
    },

    {
    itemName: "Python Course",
    price: 1999
    },

    {
    itemName: "DS Course",
    price: 12999
    },

]

const priceToPay = shoppingCart.reduce( (acc,item) => acc + item.price,0)
console.log(priceToPay);