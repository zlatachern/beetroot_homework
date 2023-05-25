// #1

const ageUser = parseFloat(prompt('How old are you?'));

if (ageUser <= 11) {
  console.log(`You're a child!`);
} else if (ageUser <= 59) {
  console.log(`You're an adult!`);
} else {
  console.log(`You're pensioner`);
}

// #2

const signOfNumber = prompt('Enter a number');

switch (signOfNumber) {
  case '1':
    console.log("Your sign is '!'"); 
    break;
  case '2':
    console.log("Your sign is '@'"); 
    break;
  case '3':
    console.log("Your sign is '#'"); 
    break;
  case '4':
    console.log("Your sign is '$'"); 
    break;
  case '5':
    console.log("Your sign is '%'"); 
    break;
  case '6':
    console.log("Your sign is '^'"); 
    break;
  case '7':
    console.log("Your sign is '&'"); 
    break;
  case '8':
    console.log("Your sign is '*'"); 
    break;
  case '9':
    console.log("Your sign is '('"); 
    break;
  default:
  console.log("You don't have a choice. Numbers only from 1 to 9 :)"); 
}

// #3

const start = parseFloat(prompt('Enter the start number'));
const end = parseFloat(prompt('Enter the end number'));
let sum = 0;

for (let i = start; i <= end; i++) {
  sum += i;
}

console.log('The sum of numbers in the range is:', sum);

// #4

const num1 = parseInt(prompt("Enter first number"));
const num2 = parseInt(prompt("Enter secondary number"));
let min = num1 < num2 ? num1 : num2;
let gds = 1;

for (let i = 1; i <= min; i++) {
  if (num1 % i === 0 && num2 % i === 0) {
    gds = i
  }
}

console.log(gds);

// #5

const number = parseFloat(prompt('Enter a number:'));

console.log('Divisors of a number', number);

for (let i = 1; i <= number; i++) {
  if (number % i === 0) {
    console.log(i);
  }
}

// #6

const number1 = prompt('Enter number');
const reversedNumber = parseInt(number1.toString().split('').reverse().join(''));

if (parseInt(number1) === reversedNumber) {
  console.log(`${number1} is palidrom`)
}
else {
  console.log(`${number1} isn't palidrom`)
}

// #7

const sumNumb = parseFloat(prompt('Your number:'));
let discount = null;

if (sumNumb >= 200 && sumNumb <= 300) {
  discount = 0.03;
} else if (sumNumb >= 300 && sumNumb < 500) {
  discount = 0.05;
} else if (sumNumb => 500 ) {
  discount = 0.07;
}

let discountAmount = sumNumb - (sumNumb * discount);

console.log('Your discount', discountAmount);

// #8

let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;
let evenCount = 0;
let oddCount = 0;

for (let i = 0; i < 10; i++) {
  let number = parseFloat(prompt('Enter a number:'));

  if (number > 0) {
      positiveCount++;
  } else if (number < 0) {
      negativeCount++;
  } else {
      zeroCount++;
  }

  if (number % 2 === 0) {
      evenCount++;
  } else {
      oddCount++;
  }
}

console.log("Number of positive numbers: " + positiveCount);
console.log("Number of negative numbers: " + negativeCount);
console.log("Number of zeros: " + zeroCount);
console.log("Number of even numbers: " + evenCount);
console.log("Number of odd numbers: " + oddCount);

// #9

let dayOfWeek = "Monday";
let answer;

do {
  answer = confirm(`Day of week: ${dayOfWeek}. Do you want to see the next day?`);
  
  switch (dayOfWeek) {
    case "Monday":
      dayOfWeek = "Tuesday";
      break;
    case "Tuesday":
      dayOfWeek = "Wednesday";
      break;
    case "Wednesday":
      dayOfWeek = "Thursday";
      break;
    case "Thursday":
      dayOfWeek = "Friday";
      break;
    case "Friday":
      dayOfWeek = "Saturday";
      break;
    case "Saturday":
      dayOfWeek = "Sunday";
      break;
    case "Sunday":
      dayOfWeek = "Monday";
      break;
    default:
      break;
  }
} while (answer);

// #10

let minNumber = 0;
let maxNumber = 100;
let guess;

while (true) {
  guess = Math.floor((minNumber + maxNumber) / 2);
  const response = prompt(`Your number > ${guess}, < ${guess} or == ${guess}? Enter ">", "<" or "=".`);

  if (response === '>') {
    minNumber = guess + 1;
  } else if (response === '<') {
    maxNumber = guess - 1;
  } else if (response === '=') {
    console.log(`Congratulations! Your number - ${guess}`);
    break;
  } else {
    console.log('Incorrect answer. Please enter ">", "<" or "="');
  }
}

// #11

for (let i = 2; i <= 9; i++) {
  console.log(`Multiplication table for a number ${i}:`);
  for (let j = 1; j <= 10; j++) {
    let result = i * j;
    console.log(`${i} * ${j} = ${result}`);
  }
}

// #12

let currentDate = new Date();
let day = currentDate.getDate();
let month = currentDate.getMonth() + 1;
let year = currentDate.getFullYear();

do {
  alert(`Поточна дата: ${day}-${month}-${year}`);

  // Обчислення наступної дати
  let nextDate = new Date(year, month - 1, day + 1);
  day = nextDate.getDate();
  month = nextDate.getMonth() + 1;
  year = nextDate.getFullYear();

  // Перевірки наступного місяця та року
  if (month > 12) {
    month = 1;
    year++;
  }

} while (confirm("Want to see the next date?"));



