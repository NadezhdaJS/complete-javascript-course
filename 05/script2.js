'use strict';
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
