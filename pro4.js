// while loop
let i = 0
while (i<=6) {
    console.log(i)
    i++;
}
console.log("sum first 50 numbers")
let num=50
let total = (num*(num+1))
console.log(total)
// for loop
console.log("for loop example")
let NUM= 15
let Total= 0
for (let p = 0; p<=NUM; p++)
{
    Total= Total + p;
}
console.log(Total)

//do while loop 
let N_is= 15
do {
    console.log(N_is)
    N_is++;
} while (N_is<=9);
console.log("value of N_is is ", N_is)

//array 
let mixed= ["apple", 123, 2.345, "yashvi"]
console.log(mixed)
console.log(mixed[2])
mixed[1]= "768"
console.log(mixed)
console.log(Array.isArray(mixed))

// array operation
//push pop shift unshift
let Mixed= ["apple", 123, 2.345, "yashvi"]
console.log(Mixed)

Mixed.push("banana")
console.log(Mixed)

Mixed.pop()
console.log(Mixed)
let poppedmixed = Mixed.pop()
console.log(poppedmixed)
 
Mixed.unshift("hello")
Mixed.unshift("000")
console.log(Mixed)

Mixed.shift("2.345")
let shiftmixed = Mixed.shift()
console.log(shiftmixed)
