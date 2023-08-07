// function
function play() {
    console.log("play game and win the game...")
}
play();
play();
play();
play();

function sum(number1,number2)
{
    return number1 + number2;
}
const ans = sum(45,9)
console.log("sum of two number is ", ans)

//isEven
function isEven(number) {
    {
    if(number%2 === 0)
    return true;
    }
    return false;
}
console.log(isEven(8))

// find index number in array
function array(Array,target)
{
    for(let i=0 ; i<Array.length ; i++)
    {
        if(array[i]===target)
        {
            return i;
        }
    }
    return -1;
}
const myarray = [1,2,3,4,5,6,7,8,9,0]
const ANS = array(myarray,4)
console.log(ANS)