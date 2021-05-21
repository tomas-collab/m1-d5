/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/

function areaOfRectangle(l1,l2){
    return l1 * l2
}
console.log(areaOfRectangle(4,4))

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

function crazySum (a,b){
    if(a===b){
        return 3*(a + b)
    }else{
        return a + b
    }
}

console.log(crazySum(3,3))

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/

function crazyDiff(a){
    if(a > 19){
        return 3 * Math.abs(a-19)
    }else{
        return Math.abs(a-19)
    }
}

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/


function boundary(n){
    if(n>=20 && n<100 || n === 400){
        return true
    }
}


/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/
let b = "strive"
function strivify(a){
  if(a.includes("strive")){
      return a
  }else{
    return b.concat(a)
  }
}

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

function check3and7(a){
if(a%3===0 || a%7===0){
    return "the number you provided is multiple of 3 and 7"
}
}

console.log(check3and7(21))

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

function reverseString(strg){
    let reversed = ""
    for(let i = strg.length -1 ; i >=0; i-- ){
        reversed += strg[i]
    }
    return reversed
}   

console.log('strive')


/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

function upperFirst(a){
    let  splitted = a.split('')
    for (let i = 0;i <splitted.length; i++){
        let j = splitted[i].charAt(0).toUpperCase()
        splitted[i] = j + splitted.substr(1)
    }
    return splitted.join('')
}
console.log('stive')


/* WRITE YOUR CODE HERE */

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

function cutString(a){
    a.pop(a)
    a.shift(a)
}


/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

function giveMeRandom(min, max){
    return Math.floor(Math.random()*(max-min +1)) + min

}