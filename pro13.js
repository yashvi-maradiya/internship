//synchronous & Asynchronous programing
// javascript is synchronous programing language
// javascript also single threaded

//settimeout function

console.log("start the function")
setTimeout(()=>{
    console.log("inside the function")
},200)

for(let i=0; i < 10; i++){
    console.log("hello..!!")
}
console.log("end the function")

//cleartimeout function 
console.log("script start")
const id = setTimeout(()=>{
    console.log("my name is luna")
},200)

for(let i=0; i < 100; i++){
    console.log("hello..!!")
}
console.log("function id ",id)
clearTimeout(id)
console.log("srcipt end")

// other example
console.log("script start")
const maths = setTimeout(()=>{
    console.log(Math.random())
},1000)

console.log("function maths ",maths)
//clearTimeout(id)
console.log("srcipt end")

//call hell & pyramid dom 

   //  task //

// text    color    time
// one     red      1
//two      blue     3
//three    green    2
//four     brown    4
//five     yellow   1
//six      pink     2
//seven    orange   3
//eight    black    1
//nine     cyan     1
//ten      maroon   1

const heading1 = document.querySelector(".heading1")
const heading2 = document.querySelector(".heading2")
const heading3 = document.querySelector(".heading3")
const heading4 = document.querySelector(".heading4")
const heading5 = document.querySelector(".heading5")
const heading6 = document.querySelector(".heading6")
const heading7 = document.querySelector(".heading7")
const heading8 = document.querySelector(".heading8")
const heading9 = document.querySelector(".heading9")
const heading10 = document.querySelector(".heading10")

function task(element , text , color , time , onsuccessCallback , onfailureCallback){
    setTimeout(()=>{
       element.textContent = text;
       element.style.color = color;
       if(onsuccessCallback){
        onsuccessCallback();
       }else{
        if(onfailureCallback)
        onfailureCallback();
       }
    },time)
}

task(heading1 , "one" , "red" , 1000 , ()=>{
    task(heading2 , "two" , "blue" , 2000 , ()=>{
        task(heading3 , "three" , "green" , 3000 , ()=>{
            task(heading4 , "four" , "brown" , 4000 , ()=>{
                task(heading5 , "five" , "yellow" , 1000 , ()=>{
                    task(heading6 , "six" , "pink" , 2000 , ()=>{
                        task(heading7 , "seven" , "orange" , 1000 , ()=>{
                            task(heading8 , "eight" , "purple" , 2000 , ()=>{
                                task(heading9 , "nine" , "cyan" , 1000 , ()=>{
                                    task(heading10 , "ten" , "maroon" , 3000 , ()=>{
  
                                    },()=>{console.log("does not exist")})
                                },()=>{console.log("does not exist")})
                            },()=>{console.log("does not exist")})
                        },()=>{console.log("does not exist")})
                    },()=>{console.log("does not exist")})
                },()=>{console.log("does not exist")})
            },()=>{console.log("does not exist")})
        },()=>{console.log("does not exist")})
    },()=>{console.log("does not exist")})
},()=>{console.log("does not exist")})