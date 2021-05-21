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
        return 3*(a-9)
    }else{
        return (a-9)
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