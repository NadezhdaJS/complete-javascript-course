'use strict';
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
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
  /* openingHours: {
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
  }, */
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
//if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open); //Здесь ничего не выполнится, и ошибки не будет. Но может быть так, что openingHours тоже не существует и тогда нужна еще проверка:
//if (restaurant.openingHours && restaurant.openingHours.mon)
// console.log(restaurant.openingHours.mon.open);
//Но можно сделать следующим способом:
//console.log(restaurant.openingHours?.mon?.open); // (?.) Проверяет, существует ли restaurant.openingHours и .mon и только тогда выполняет open. Если не существует, то выдает undefined (если это не null или undefined)
/* let days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun '];
 */ /* for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'another day'; //Если времени открытия не существует, то присвоить значение another day
  console.log(`On ${day}, we open at ${open}`);
} */
//Операторы (??) и (.?) появились одновременно в 2020 году и существуют, чтобы работать друг с другом
console.log(restaurant.order?.(0, 1) ?? `Method does not exist`); //Работает и с методами. Если существует, вызываем его, если нет, то пишем, что он не существует
let users = [{ name: 'Jonas', email: 'i@mail.ru' }];
console.log(users[0]?.name ?? `User arr is empty`); //Существует ли name в массиве?

/////
/// Циклы объектов, ключей, значений и entries
// Property NAMES

/* const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);
// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours); //ключи+значения
// console.log(entries);

// [key, value]
//распаковка
for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
} */
//////////////////
//Sets (Множество, сет) Показывает уникальные значения, которые становятся элементами множества. Один элемент нельзя вытащить из множества, как, анпример, из массива. Типичное использование — удаление дубликатов из массива
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);

console.log(new Set('Jonas')); //Создали новое множество

console.log(ordersSet.size); //Проверили размер (только уникальные значения)
console.log(ordersSet.has('Pizza')); //Проверяем есть ли пицца в множествею Покажет true or false
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread'); //Добавляем блюдо в множество
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto'); //Удаляем элемент из множества
// ordersSet.clear();//удалить все элементы
console.log(ordersSet);

for (const order of ordersSet) console.log(order); // Можно  каждый элемент отправить в цикл

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)]; //Здесь мы создали масив уникальных значений путем распаковки множества. Если бы квадратных ковычек и Spead оператора не было было, то образовалось бы множество, а нам нужен массив.
console.log(staffUnique);

console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
); //узнаем количество уникальных значений массива путем создания множества и метода size

console.log(new Set('jonasschmedtmann').size); //проверяет количество уникальных букв

///////////////////////////
//Maps - Карта

const rest = new Map();
rest.set('name', 'Classico Italiano'); //Добавляем ключ и значение
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get('name')); //Чтобы прочитать значение, нужно использовать метод get и ключ
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories')); //Проверяет существование элемента
rest.delete(2); //удаляет по ключу
// rest.clear();

const arr = [1, 2];
rest.set(arr, 'Test'); //добавили массив как ключ
rest.set(document.querySelector('h1'), 'Heading'); //
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr)); //чтобы прочитать значения ключа, нужно массив добавить в переменную и уже ее добавить в карту
