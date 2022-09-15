'use strict';
// Working With Strings - Part 1
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r')); //позиция буквы r
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7)); //указываем начальную и конечную точку вырезания куска строки (подстроку)

console.log(airline.slice(0, airline.indexOf(' '))); //вырезаем первое слово до пробела
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); //вырезаем последнее слово до пробела

console.log(airline.slice(-2)); //идекс с минусом считает с конца
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat 😬');
  else console.log('You got lucky 😎');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('jonas'));
console.log(typeof new String('jonas'));

console.log(typeof new String('jonas').slice(1));
