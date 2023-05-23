// #1
console.log(+(0.1 + 0.2).toFixed(2));

// #2
const n1 = '1';
const n2 = 2;

console.log(+n1 + n2);

// #3
const moneyAmount = Number.parseFloat(prompt('Enter the amount of money:'));
const chocolatePrice = Number.parseFloat(prompt('Enter the price of one chocolate:'));
const numberOfChocolates = Math.floor(moneyAmount / chocolatePrice);
const change = moneyAmount % chocolatePrice;

console.log(`You can buy ${numberOfChocolates} chocolates and your change will be ${change.toFixed(2)}`);

// #4
const flashSizeGb = Number.parseInt(prompt("Enter the volume of the flash drive in GB:"));
const fileSizeMb = 820;

console.log(`The number of files that can be placed on a flash drive: ${Math.trunc(flashSizeGb * 1024 / fileSizeMb)}`);

// #5
const numberOfUser = Number.parseInt(prompt('Enter a number'));
const firstNum = Math.floor(numberOfUser / 100);
const secondNum = Math.floor(numberOfUser % 100 / 10);
const thirdNum = numberOfUser % 10;

console.log(`Your inverted number: ${thirdNum}${secondNum}${firstNum}`);

// #6
const deposit = Number.parseFloat(prompt('Enter the deposit amount:'));
const monthlyRate = 5 / 12 / 100; 
const numberOfMonths = 2; 
const accumulatedInterest = deposit * monthlyRate * numberOfMonths;

console.log(`Accumulated interest: ${accumulatedInterest.toFixed(2)}`);

// #7
2 && 0 && 3 // 0 will be displayed

2 || 0 || 3 // 2 will be displayed

2 && 0 || 3 // 3 will be displayed
