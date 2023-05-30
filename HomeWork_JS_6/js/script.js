// Функція-конструктор
function ShoppingItem(name, quantity, purchased, unitPrice) {
  this.name = name;
  this.quantity = quantity;
  this.purchased = purchased;
  this.unitPrice = unitPrice;
}

ShoppingItem.prototype.totalPrice = function() {
  return this.quantity * this.unitPrice;
};

let shoppingList = [
  new ShoppingItem("Йогурт", 2, false, 20),
  new ShoppingItem("Хліб", 1, true, 15),
  new ShoppingItem("Яйця", 12, false, 2),
  new ShoppingItem("Банани", 3, false, 30),
  new ShoppingItem("Молоко", 1, true, 18)
];

function displayShoppingList(list) {
  const sortedList = [...list].sort((a, b) => {
    if (a.purchased && !b.purchased) {
      return 1;
    } else if (!a.purchased && b.purchased) {
      return -1;
    } else {
      return 0;
    }
  });

  sortedList.forEach(item => {
    console.log(`${item.name} - Кількість: ${item.quantity}, ${item.purchased ? 'Куплено' : 'Не куплено'}, Ціна за одиницю: ${item.unitPrice}, Загальна сума: ${item.totalPrice()}`);
  });
}

function purchaseItem(itemName) {
  const item = shoppingList.find(item => item.name === itemName);
  if (item) {
    item.purchased = true;
    console.log(`Продукт ${itemName} придбаний.`);
  } else {
    console.log(`Продукт ${itemName} не знайдений у списку.`);
  }
}

function removeFromShoppingList(itemName) {
  const updatedList = shoppingList.filter(item => item.name !== itemName);
  if (updatedList.length === shoppingList.length) {
    console.log(`Продукт ${itemName} не знайдений у списку.`);
  } else {
    shoppingList = updatedList;
    console.log(`Продукт ${itemName} видалений зі списку.`);
  }
}

function addItemToShoppingList(itemName, quantity, unitPrice) {
  const existingItem = shoppingList.find(item => item.name === itemName);
  if (existingItem) {
    existingItem.quantity += quantity;
    existingItem.totalPrice = existingItem.quantity * existingItem.unitPrice;
    console.log(`Кількість продукту ${itemName} збільшена. Нова кількість: ${existingItem.quantity}`);
  } else {
    const newItem = new ShoppingItem(itemName, quantity, false, unitPrice);
    shoppingList.push(newItem);
    console.log(`Продукт ${itemName} доданий до списку покупок.`);
  }
}

console.log("Початковий список покупок:");
displayShoppingList(shoppingList);

console.log("Виконується покупка продукту...");
purchaseItem("Молоко");

console.log("Оновлений список покупок:");
displayShoppingList(shoppingList);

console.log("Видалення продукту зі списку...");
removeFromShoppingList("Молоко");

console.log("Додавання покупки в список...");
addItemToShoppingList("Печиво", 3, 10);

console.log("Оновлений список покупок:");
displayShoppingList(shoppingList);