// Write your code here
//describe the equation 'multiply' whose multiplication result will be =62
//have variables num1 and num2 be numbers 
let num1 = 2
let num2 = 31
const multiply = num1 * num2
//confirming expression works(gives result as 62):
console.log(multiply);


//describe 'mod' to be an equation that calculates a remainder =4
//num3, num4 are numbers:
let num3 = 29
let num4 = 5
const mod = num3 % num4
//confirming expression for remainder operator works(gives rem as 4):
console.log(mod);

//describe 'max' that will return 20 as the highest number in a set:
const max = (5, 10, 15, 20)
Math.max(max)
//confirming expression returns 20 as the highest number:
console.log(max);

//describe 'random' that generates:
//1. random integer
//2. integer greater than 0
//3. integer NOT EQUAL 0
const random = Math.round(Math.random() * 100) + 1
//confirming 'Number.isInteger(random)' results to 'TRUE':
console.log(Number.isInteger(random));

