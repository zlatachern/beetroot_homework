// МІНІМУМ

// Зберігання персональної інформації в змінних
const firstName = "John";
const lastName = "Doe";
const user = "John Doe";
const fullName = "John Doe";

// Неправильні імена змінних 
// const 1invalidName = "Mistake"; (починається з цифри)
// const last-name = "Mistake"; (використовує дефіс - допустимий символ)
// const const = "Mistake"; (зарезервоване слово у JavaScript)
// const first name = "Mistake"; (містить пробіл)
// const $special@characters = "Mistake"; (містить спеціальні символи (@), що недопустимо у змінних)

// Коментування коду - способи

// 1. Однорядковий коментар

/*
2. Багаторядковий коментар
*/

// Cтилі написання імен змінних 

/*
Camel Case: Імена змінних починаються з малої літери, а кожне наступне слово в назві розпочинається з великої літери. Наприклад: myVariableName, firstName, totalAmount. Цей тип використовуємо саме для JS.

Pascal Case: Імена змінних починаються з великої літери, а кожне наступне слово в назві також починається з великої літери. Часто використовується для іменування конструкторів або класів. Наприклад: MyVariableName, FirstName, TotalAmount.

Snake Case: Імена змінних складаються зі слів, розділених підкресленням. Усі літери є малими. Наприклад: my_variable_name, first_name, total_amount.

Kebab Case: Імена змінних складаються зі слів, розділених дефісом. Усі літери є малими. Наприклад: my-variable-name, first-name, total-amount.

Uppercase: Кожне слово в імені знінної записується з великою літери. 
*/

// НОРМА

// Запитай ім’я користувача та виведи у відповідь “Привіт, *ім’я*”;

let userName = prompt("Напиши своє ім'я");
alert('Привіт' + ' ' + userName + '!');

// Запитай рік народження користувача, порахуй його/її вік і виведи результат. Поточний рік вкажи в коді як константу;

const birthYear = prompt('Введіть свій рік народження:');
const currentYear = 2023;
let ageUser = currentYear - (Number(birthYear));
alert("Ваш вік: " + ageUser);
console.log(typeof ageUser);


// Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата.

const sideLength = prompt('Введіть довжину сторони квадрата:');
let perimeter = (Number(sideLength)) * 4;
alert('Периметр квадрата ' + perimeter);
console.log(typeof perimeter);

// Максимум

// Запитай у користувача радіус кола і виведи площу такої окружності.

const radius = prompt('Введіть радіус кола:');
let area = Math.PI * Math.pow(radius, 2);
alert('Площа кола: ' + area);
console.log(typeof area);

// Запитай у користувача відстань в кілометрах між двома містами і за скільки годин він хоче дістатися. Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно.

const distance = prompt('Введіть відстань між містами (в кілометрах):');
const time = prompt('Введіть бажаний час подорожі (в годинах):');
let speed = (Number(distance)) / (Number(time));
alert('Необхідна швидкість: ' + speed + ' км/год');
console.log(typeof speed);

// Реалізуй конвертор валют. Користувач вводить долари, програма переводить їх в євро. Курс валют зберігається в константі.

const dollarAmount = prompt('Введіть суму в доларах:');
const exchangeRate = 0.9216; // Курс долара до євро
let euroAmount = (Number(dollarAmount)) * exchangeRate;
alert('Сума в євро: ' + euroAmount);
console.log(typeof euroAmount);