// #1

// Function Declaration
function calcSum1(a, b) {
  return a + b;
}

const result1 = calcSum1(3, 7);

// Function Expression
let calcSum2 = function(a, b) {
  return a + b;
};

const result2 = calcSum2(1, 3);

// Arrow function
let calcSum3 = (a, b) => a + b;

// #2

function writeArg() {
  console.log('Number of arguments:', arguments.length);
}

writeArg(1, 2, 3);
writeArg('a', 'b', 'c', 'd', 'e');

// #3

function compareNumbers(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}

console.log(compareNumbers(2, 4)); 
console.log(compareNumbers(12, 6)); 
console.log(compareNumbers(5, 5)); 

// #4

function calcFactorial(factorialNumber) {
  let result = 1;
  let i = 0;

  while (i < factorialNumber) {
    i++;
    result = result * i;
  }

  console.log('Your result:', result);
}

calcFactorial(5);

// #5

function combineDigits(digit1, digit2, digit3) {
  let combinedNumber = +(`${digit1}${digit2}${digit3}`);
  return combinedNumber;
}

console.log(combineDigits(1, 5, 7)); 

// #6

function calсSquareOfFigure (sideOne, sideTwo) {
  if (sideTwo === undefined) {
    return sideOne ** 2;
  } else {
    return sideOne * sideTwo; 
  }
}

console.log(calсSquareOfFigure(3, 5));

// #7

function isPerfectNumber(number) {
  let tempNumber = 0;

  for (let i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      tempNumber += i;
    }
  }

  if (tempNumber === number && tempNumber !== 0) {
    return true;
  } else {
    return false;
  }
}

// #8

function findPerfectNumbers(minNumber, maxNumber) {
  for (let i = minNumber; i <= maxNumber; i++) {
    if (isPerfectNumber(i)) {
    console.log(i);
    }
  }
}

findPerfectNumbers(2, 30);