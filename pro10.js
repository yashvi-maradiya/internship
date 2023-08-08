// filter method
const numbers = [1,2,3,4,5,6,7,8,9]
 const isEven = numbers.filter((number)=>{
    return number % 2 === 0;
})
console.log(isEven)

// reduce method
const array = [2,4,6,8,1,23,45]
const total = array.reduce((x,y)=>{
    return x + y;
})
console.log(total)
//other example
const cart = [
    {productId: 1 , productName: "phone" , price: 15000},
    {productId: 2 , productName: "laptop" , price: 25000},
    {productId: 3 , productName: "Tv" , price: 20000},
]
const totalPrice = cart.reduce((totalamount , currentprice)=>{
    return totalamount + currentprice.price;
},0)
console.log("total 3 product price", totalPrice)


// short method
//short method consider ASCII value
const Array = [2,4,6,8,1,23,45]
Array.sort((a,b)=>a-b)
// const arrays = Array.sort((a,b)=>{            a-b == positive number --> number wirte like b,a
    //return a-b;                                a-b == negative number --> number wirte like a,b
//})console.log(arrays)
console.log(Array)

const list =["abcd","AC","yashvi","nirva","KUNJ"]
list.sort()
console.log(list)
 
const product = [
    {productId: 1 , productName: "phone" , price: 50000},
    {productId: 2 , productName: "laptop" , price: 21000},
    {productId: 3 , productName: "Tv" , price: 23000},
    {productId: 4 , productName: "camera" , price: 8000},
    {productId: 5 , productName: "smartwatch" , price: 2000},
    {productId: 6 , productName: "ipod" , price: 70000},
]
//consider price low to high
product.sort((x,y)=>{
    return x.price - y.price;
})
console.log(product)

// find method
const LIST = ["hello","cat","lion","dog"]
const ANS = LIST.find((string)=>{
    return string.length === 3;
})
console.log(ANS)

const users = [
    {userID: 1, username: "niti"},
    {userID: 2, username: "parita"},
    {userID: 3, username: "riya"},
    {userID: 4, username: "supriya"}
]
const UI = users.find((Q)=>Q.userID===4)
console.log(UI)

// every method   -->    check every element --> given true or false ans
const Mycart = [
    {productId: 1 , productName: "phone" , price: 15000},
    {productId: 2 , productName: "laptop" , price: 25000},
    {productId: 3 , productName: "Tv" , price: 30000},
]
const myans = Mycart.every((R)=>R.price < 27000)
console.log(myans)

// some method   --> check element --> one element are satified --> then given true ans otherwise false
const xyz = [1,3,2,5,7]
const myAns = xyz.some((pqr)=>pqr % 2 === 0)
console.log(myAns)

const some = [
    {productId: 1 , productName: "phone" , price: 15000},
    {productId: 2 , productName: "laptop" , price: 25000},
    {productId: 3 , productName: "Tv" , price: 30000},
]
const someAns = Mycart.some((y)=>y.price > 27000)
console.log(someAns)

//fill method
const pqrs = [1,2,3,4,5,6,7,8,9]
pqrs.fill(0,3,6)
console.log(pqrs)

// splice method 
const item = ["item1","item2","item3","item4"]
const delet = item.splice(1,2,"item21","item22")
console.log(item)
console.log("delete item is",delet)

//set method --> it's iterable --> also write string into the set
const List =  new Set([1,2,3,4])
console.log(List)