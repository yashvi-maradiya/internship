// arrow function
const any = () =>{
    console.log("hello guys ! good morning...")
}
any()

const isEven = (Number) => {
    if(Number%2 === 0){
        return true;
    }
        return false;
}
const ans = isEven(12)
console.log(ans)

// function inside function
function app(){
    const addtwo = (num1 , num2) =>{return num1 + num2;}
    const mul = (Num1 , Num2 , Num3) =>{
        return Num1*Num2*Num3;
    }
    const sub = (Number1 , Number2) => {
        return Number1-Number2;
    }
    console.log(addtwo(3,6))
    console.log(mul(4,6,8))
    console.log(sub(7,5))
    console.log("hello world")
}

app()

// lexical scope
const App = "instagram"
function myapp()
{
    const function1 = () => {
        console.log("wlecome to my app" , App)
    } 
    function1()
}
myapp()

// practice example
// find factorial number

function factorial(n) {
	let ans = 1;
	
	if(n === 0)
		return 1;
	for (let i = 2; i <= n; i++)
		ans = ans * i;
	return ans;
}

console.log( "The factorial number",factorial(6));

// default perameters
 function ADD(a , b=0){
    return a+b;
 }
 console.log(ADD(6,8))

// rest perameters 
function addall(...Numbers)
{
    Total = 0;
    for(NUM of Numbers)
    {
        Total = Total + NUM;
    }
    return Total;
}

 console.log(addall(1,2,3,4,4,5,6))

 // perameters destructring
 const person = {
    name: "lela",
    IDnumber: "44"   
 } 
 function get({name , IDnumber})
 {
    console.log(name)
    console.log(IDnumber)
 }
 get(person)

 // callback function
 function myfun(callback){
    console.log("hello! I am function 1 and I can...")
    callback("yashvi");
 }
 function myfun2(NAME){
    console.log("inside function 2")
    console.log(`hello ma'am i am ${NAME}`)
 }
 myfun(myfun2)