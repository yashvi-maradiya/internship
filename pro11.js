// map (object) --> iterable
const parson = new Map()
parson.set("yashvi","mardaiya")
parson.set("age","20")
parson.set(1,"one")
parson.set([1,2,3],"onetwothree")
console.log(parson)
for (let key of parson.keys()) {
    console.log(key,typeof key)
}

// clone using object.assing
const obj = {
    name: "khushali",
    age: 22
}
//const obj2 = {...obj}  (optional method)
const obj2 = Object.assign({},obj)
obj.gender =  "female";
console.log(obj)
console.log(obj2)

// optinal chaining
const obj3 = {
    firstname: "sophia",
    Gender:"female",
    //age:23 
}
console.log(obj3?.firstname)
console.log(obj3?.Gender)
console.log(obj3?.age)

// methods
// function inside object
const obj4 = {
    firstname: "lily",
    age:43 ,
    about: function(){
        console.log(`my name is ${this.firstname} and my age ${this.age}`)
    }
}
obj4.about()

//another example

function parsonInfo(){
    console.log(`my name is ${this.name} and my age ${this.age}`)
}

const parson1 = {
    name: "khushali",
    age: 22,
    about: parsonInfo
}
const parson2 = {
    name: "shalini",
    age: 32,
    about: parsonInfo
}
const parson3 = {
    name: "alice",
    age: 15,
    about: parsonInfo
}
parson1.about()
parson2.about()
parson3.about()


// call , apply ,  bind
function about(x,y){
    console.log(`my name is ${this.name} and my age ${this.age}`, x,y)
}

const parson6 = {
    name: "olivia",
    age: 18
}
const parson7 = {
    name: "luna",
    age:19
}
 about.call(parson6," I love games","like a vollyball")
 about.call(parson7)
 
 // apply
 //same as call method but apply use array
 // like 
 //about.apply(parson6,[" I love game","like a vollybal"])

 //bind
 // bind as a function return karta hai
 const parson8 = {
    name: "bella",
    age:10
}
const func = about.bind(parson8," I love food","like a panipuri")
func()