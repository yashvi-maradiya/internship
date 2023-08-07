// important array method
//foreach
//map
//filter
//reduce

// foreach
const array = [3,4,5,7,8,23,12]
function mul(number)
{
    console.log(number*2)
}
array.forEach(mul)
//array.forEach(function mul(number)
//{
   // console.log(number*2)
//}


//map 
const square = [3,6,8,4,10,5]
function squarenumber(square)
{
    return `${square} square ${square * square}`;
}
const squ = square.map(squarenumber)
console.log(squ)

const person = [
    {firstname: "yashvi", age: 21},
    {firstname: "riya", age: 22},
    {firstname: "kesvi", age: 23},
    {firstname: "mitali", age: 24},
]
const user = person.map((persons)=> {
    return persons.firstname;} )
    console.log(user)