console.log("good morning evryone")
// for loop in array
console.log("for loop  use in array")
let Array = ["juice","monkey","banana", "laptop", "hello123"]
for (let i = 0; i < Array.length; i++)
{
    console.log(Array[i])
}
let Array2=[]
for (let i = 0; i < Array.length; i++)
{
    Array2.push(Array[i].toUpperCase())
}
console.log(Array2)

// while loop in array             
const fruits1 = ["apple" , "banana" , "mango" , "grapes"]
let j = 0
const fruits2 =["pineapple"]
 while(j<=fruits1.length)
 {
    fruits2.push(fruits1[j])
    j++;
 }
 console.log(fruits2)
 console.log(fruits1)

 // for of loop in array
const items = ["i1","i2","i3","i4"]
const items2 = []
for (const item of items) {
    items2.push(item.toUpperCase())
}
console.log(items2)
console.log(items)


const Items = ["i1","i2","i3","i4"]
const Items2 = []
for (const index in Items) {
    console.log(Items[index].toUpperCase())
}

// array destructuring
const myvalue = ["v1","v2","v3","v4","v5","v6"]
let [var1 , var2 , var3] = myvalue
let Myvalue = myvalue.slice(3)
console.log("my var1 value is ", var1)
console.log("my var1 value is ", var2)
console.log("my var1 value is ", var3)
console.log(Myvalue)