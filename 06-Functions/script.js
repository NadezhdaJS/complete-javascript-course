'use strict';
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1, //значение параметров по умолчанию
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000); //если хотим пропустить один аргумент, ставим ему undefined

///////////////////////////////////////
