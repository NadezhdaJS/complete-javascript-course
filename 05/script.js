'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
/* const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // orderDelivery: function (obj) {
  //  console.log(obj);
  // },
  //Добавляем значения по умолчанию
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at  ${time}`
    );
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
}; */

/* restaurant.orderDelivery({ address: 'Street 145', starterIndex: 1 }); // При распаковке добавились значения по умолчанию
//Добавление параметров функции. Нужно, когда много параметров и сложно запомнить порядок
restaurant.orderDelivery({
  time: '22:30',
  address: 'Street 12',
  mainIndex: 2,
  starterIndex: 2,
});

//Распаковка объекта. Имена переменных совпадают с ключами объектов
let { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Меняем имена переменных
let {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

//Добавляем переменные к ключам, которых еще нет (значение по умолчанию)
console.log(restaurantName, hours, tags);
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Меняем переменные, которые уже существовали
let x = 100;
let y = 30;
let obj = { x: 1, y: 2, l: 3 };
({ x, y } = obj); //заключаем в скобки
console.log(x, y);
//Распаковка из вложенного объекта
let {
  fri: { open: o, close: cl }, //Меняем имя переменных
} = openingHours;
console.log(o, cl);
//////////////////////////////////////////////
//Распаковка массива
let [main, , second] = restaurant.categories;
console.log(main, second);
//let temp = main;
//main = second;
//second = temp;
//console.log(main, second);
//Смена значений
[second, , main] = [main, , second];
console.log(main, second);
//Получаем значения из функции order
const [mainCourse, secondCourse] = restaurant.order(2, 0);
console.log(restaurant.order(2, 0));
console.log(mainCourse, secondCourse);

//Распаковка из вложенного массива
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j);
const [g, , [z, c]] = nested; //здесь
console.log(g, z, c); */

//////////////////////////////
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
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

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at  ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your tasty pasta with ${ing1}, ${ing2} and ${ing3}`);
  },
  orderPizza: function (mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  },
};
//Spread Operator (...) - создает новый массив из нескольких или из значений и массива(ов)
let [p, m, u] = [1, 2, 3];
console.log(p, m, u);

let arr = [10, 20, 30];
let badArr = [1, 2, 3, arr[0], arr[1], arr[2]]; // Плохое добавление одного массива к другому
console.log(badArr);
let newArr = [1, 2, 3, ...arr]; // Оператором Spread ... мы добавили все значения массива arr в текущий
console.log(newArr);
console.log(...arr); //Распаковка значений массива с помощь оператора. Используем, когда нужны значения по отдельности
const newMenu = ['Lemon', ...restaurant.mainMenu]; //Добавили новую позицию меню в объект
console.log(newMenu);
let mainMenuCopy = [...restaurant.mainMenu]; //Создание копии массива
console.log(mainMenuCopy);
let menu = [...restaurant.mainMenu, ...restaurant.starterMenu]; //Объединение массива. Создается новый массив
console.log(menu);
// (...) способен распакавать еще строку, maps, sets в отдельный массив. Например:
let str = 'Severus';
let wiz = [...str, 'Snape', '', 'T'];
/* Выходит [
    "S",
    "e",
    "v",
    "e",
    "r",
    "u",
    "s",
    "Snape",
    "",
    "T"
] */
console.log(wiz);
//Оператор может распаковать значения только в массив или в аргументы функции. Больше никуда

/* let ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 2?'),
];
console.log(ingredients); */
//restaurant.orderPasta(...ingredients); //распаковываем массив в аргументы функции
//Новая версия JS 2018 позволяет оператору объединять и объекты. Пример:
let newRestaurant = { city: 'Milan', ...restaurant, founder: 'Maestro' };
console.log(newRestaurant);

let restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Milano'; //Поменяли наазвание в копии, но в оригинале осталось то же
console.log(restaurantCopy.name);
console.log(restaurant.name);

//////////////////////////

//Rest pattern -используется с левой стороны переменной (до знака равно). Берет остаток элементов и превращает их в новый массив
let [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);
let [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
]; //Не включает в себя пропущенные значения
console.log(pizza, risotto, otherFood);
let { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);
//Функции c паттерном. В аргументе превращает любое число чисел в массив
let add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(5, 3, 10, 8, 7, 2);
let x = [23, 5, 7];
add(...x); //распаковали значения массива
restaurant.orderPizza('mushrooms', 'bacon', 'cheese', 'onion');

//Короткое замыкание (Short Circuiting) ||
console.log(3 || 'London'); //Если первый операнд истинный, то оператор возвращает его значение (первое), а второй операнд не выполняется. Происходит короткое замыкание. Если значение второго истинно, то возвращает его значение (второе). Если оба операнда ложные, то возвращается последнее значение ложного операнда.
console.log('' || 'London');
console.log(true || 0);
console.log(undefined || null);
restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10; //Существует ли numGuests? Если да, то ничего не делать, если нет, то вставить значение по умолчанию 10. Не сработает с 0
console.log(guests1);
let guests2 = restaurant.numGuests || 10; //заменяет кусок кода сверху
console.log(guests2);
// Короткое замыкание (Short Circuiting) && Работает противоположно ||
console.log(3 && 5);
console.log('' && 'London');
console.log(true && 0);
console.log(undefined && null);
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'bacon');
}
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'bacon'); //Заменяет кусок кода выше
