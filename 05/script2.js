'use strict';
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at  ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your tasty pasta with ${ing1}, ${ing2} and ${ing3}`);
  },
  orderPizza(mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  },
};
////////////////////////////////
//Цикл for-of

let menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item); //Цикл for-of. Берет каждый элемент указанного массива (menu) и выполняет цикл чего-либо (здесь выводит в консоль). Можно использовать break и continue
/* for (const item of menu.entries()) {
  //console.log(item);
  console.log(`${item[0] + 1}: ${item[1]}`);
} */ //Получаем индекс каждого элемента массива и сам элемент. [0, 'Facaccia']. То есть мы получаем 7 массивов, где каждый массив — это индекс и сам элемент. Далее мы выводим в консоль индекс каждого элемента (то есть первый элемент каждого из 7 массивов) и прибавляем к нему 1 (так как меню не начинается с нуля) и выводим второй элемент каждого массива (то есть блюда). То это старый вариант вывода и не оч красивый, можно сделать иначе (ниже).

for (const [i, item] of menu.entries()) {
  console.log(`${i + 1}: ${item}`);
} // Здесь мы сразу распаковываем каждый массив в переменные. И получается то же, что и сверху

//ES6 Объект 1 можно добавить в объект 2 просто вписав туда переменную: openingHours. Также можно убрать слово function и двоеточие из всех функций внутри объекта и ничего не изменится.
//Еще можно за пределами объекта создать массив и передать элементы массива во вложенный объект. Или даше посчитать его. Пример: https://i.imgur.com/LYV7YKv.jpeg

////////////////
//Optional Chaining - Опциональная цепочка
//console.log(restaurant.openingHours.mon.open); // Выдаст ошибку, так как restaurant.openingHours.mon не существует. Чтобы такой ошибки не было, нужно проверить, существует ли restaurant.openingHours.mon
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open); //Здесь ничего не выполнится, и ошибки не будет. Но может быть так, что openingHours тоже не существует и тогда нужна еще проверка:
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);
//Но можно сделать следующим способом:
console.log(restaurant.openingHours?.mon?.open); // (?.) Проверяет, существует ли restaurant.openingHours и .mon и только тогда выполняет open. Если не существует, то выдает undefined (если это не null или undefined)
let days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun '];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'another day'; //Если времени открытия не существует, то присвоить значение another day
  console.log(`On ${day}, we open at ${open}`);
}
//Операторы (??) и (.?) появились одновременно в 2020 году и существуют, чтобы работать друг с другом
console.log(restaurant.order?.(0, 1) ?? `Method does not exist`); //Работает и с методами. Если существует, вызываем его, если нет, то пишем, что он не существует
let users = [{ name: 'Jonas', email: 'i@mail.ru' }];
console.log(users[0]?.name ?? `User arr is empty`); //Существует ли name в массиве?
