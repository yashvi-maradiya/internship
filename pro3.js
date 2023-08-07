console.log("play game")
// if else condition
let age= 17
if (age>=18) {
 console.log("you are able to play game")    
} else {
    console.log("you are  not able to play game")
}
//other example
let num= 14
if (num<14) {
    console.log("true")
} else {
    console.log("false")
}
//odd and even number
let number=34
if (number%2===0) {
    console.log("even")
} else {
    console.log("odd")
}

// ternary operator
let Age=6
let drink= Age>=12 ? "soda" : "juice"
console.log(drink)

//AND OR operator
let firstname= "Yashvi"
let AGE= 14
if (firstname[0] === "Y" && AGE>=14) {
    console.log("inside if")
} else {
    console.log("inside else")
}

// OR 
let Firstname= "yashvi"
let AGEis= 12
if (Firstname[0] === "Y" || AGEis>=14) {
    console.log("inside if")
} else {
    console.log("inside else")
}
//nested if else
let winNumber= 55
let userNumber= prompt("gusse a number")
if (userNumber === winNumber) {
    console.log("you are win")
    
} else {
    if (userNumber<=winNumber) {
        console.log("too low !!!")
    } else {
        console.log("too high !!!")
    }
    
}
// if 
// else if 
// else if
// else if
// else
 
let NUMBERwin = 67
if (NUMBERwin < 0) {
    console.log("extremely extremely low !!")    
} else if(NUMBERwin < 20) {
    console.log(" extremely low !!")
} else if(NUMBERwin < 55) {
    console.log("nearest number !!")
} else if(NUMBERwin < 70) {
    console.log(" very nearest number !!")
} else {
    console.log("too high")
}
// switch opartion
let day= 7
switch (day) {
    case 0:
        console.log("sunday")
        break;
    case 1:
        console.log("monday")
            break;
    case 2:
        console.log("tuesday")
        break;
    case 3:
        console.log("wednesday")
            break;
    case 4:
        console.log("thrsday")
                break;
    case 5:
        console.log("friday")
        break;
    case 6:
        console.log("saturday")
        break;
    default:
        console.log("Invalid")
        break;
}


