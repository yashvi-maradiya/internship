// object (reference type data)
// object store key value pairs
const person = {
    name:"yashvi",
    age: 20,
    hobbies: ["traveling","slepping","cooking"]
}
console.log(person)
console.log(person["name"])
console.log(person.age)
person.gender = "female"
console.log(person) 

// diff between dot nd bracktes 
const key ="email"
const Person = {
    "name" :"yashvi",
    "age": 20,
    "parson hobbies" : ["traveling","slepping","cooking"]
}
person[key] = "yashvi@gmail.com"
console.log(person)

// itrate with object
const person1 = {
    name:"yashvi",
    age: 20,
    hobbies: ["traveling","slepping","cooking"]
}
for(KEY in person1)
{
    console.log(`${KEY} : ${person1[KEY]}`)
}

// comput propaties 
const obj1 = "object1"
const obj2 = "object2"
 
const value1 = "play game"
const value2 = "drink water"

const key1 = {
    [obj1] : value1,
    [obj2] : value2
}
console.log(key1)

// const  obj ={}
   // key1[obj1] = value1
   // key1[obj2] = value2
//}
//console.log(key1)

// spread opretion 

const Obj1 =["1","2","3"]
const Obj2 =["4","5","6"]
const newObj = [...Obj1, ...Obj2, "yashvi", Obj3 ="phone"]
console.log(newObj)

// other example
const OBJ1 = {
    PHONE : "756483990",
    EMAIL : "KHUSHI@gmail.com",
}
console.log(OBJ1)
const OBJ2 = {
    NAME : "KHUSHI",
    AGE : 21,
    LOCATION : "INDIA",
}
const HELLO = {...OBJ1,...OBJ2, GENDER : "FEMALE"}
console.log(HELLO)
for (V1 in HELLO)
{
    console.log(`${V1} : ${HELLO[V1]}`)

}
const program ={..."program"}
console.log(program)

// object destructring
const any = {
    city : "surat",
    food : "locho , khaman",
    othername : "daimond city , bridges city , silk city",
    state : "gujarat",
}
let { city , food , ...restany} = any
console.log(city)
console.log(food)
console.log(restany)

for(ANY in any)
{
    console.log(`${ANY} : ${any[ANY]}`)
}

// object inside array 
// very useful in real world application
const users =[
    {username : "priya", userid : "IT034" , department : "IT"},
    {username : "riya", userid : "CE023" , department : "CE"},
    {username : "suriya", userid : "CE044" , department : "CE"},
    {username : "aditi", userid : "ME034" , department : "ME"},
]
for( let user of users)
{
    console.log(user)
}