//You are given an array of numbers. Your task is to use iteration methods to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];

/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
Q1) Create a new array containing numbers that are greater than or equal to 25.
Q2) Create a new array containing numbers that are divisible by 5.
******************************************************************/
console.log("Q1:");
function filterGorE(numbers) {
  return numbers >= 25;
}
const newNum = numbers.filter(filterGorE);
console.log(newNum);

console.log("Q2:");
function divbyfive(numbers) {
  if (numbers % 5 == 0) {
    return numbers;
  }
}
const newNum5 = numbers.filter(divbyfive);
console.log(newNum5);

/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

Q3) Create a new array that contains each number squared.
Q4) Create a new array that contains each number multiplied by 2.
******************************************************************/
console.log("Q3:");
function square(numbers) {
  return numbers * numbers;
}
const squared = numbers.map(square);
console.log(squared);

console.log("Q4:");
function timesTwo(numbers) {
  return numbers * 2;
}
const timestwo = numbers.map(timesTwo);
console.log(timestwo);
/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

Q5) Filter the numbers that are greater than or equal to 20 and then square each of them.


Q6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/
console.log("Q5:");
function filtertwenty(numbers) {
  return numbers >= 20;
}
let array5 = numbers.filter(filtertwenty).map(square);
console.log(array5);

console.log("Q6:");
function multiplythree(numbers) {
  return numbers * 3;
}
function divbyfive(numbers) {
  if (numbers % 5 == 0) {
    return numbers;
  }
}
let array6 = numbers.filter(divbyfive).map(multiplythree);
console.log(array6);
