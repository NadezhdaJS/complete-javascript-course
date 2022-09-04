'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
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
};

//Распаковка массива
let [main, , second] = restaurant.categories;
console.log(main, second);
/* let temp = main;
main = second;
second = temp;
console.log(main, second); */
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
console.log(g, z, c);

//
let [p, m, u] = [1, 2, 3];
console.log(p, m, u);