let checkDogs = function (dogsJulia, dogsKate) {
  let dogsJuliaCopy = dogsJulia.slice(1, -2);
  let arr = [...dogsJuliaCopy, ...dogsKate];
  arr.forEach(function (dog, index) {
    if (dog < 3) {
      console.log(`Dog number ${index + 1} is still a puppy 🐶`);
    } else {
      console.log(
        `Dog number ${index + 1} is an adult, and is ${dog} years old`
      );
    }
  });
};

/* checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]); */
const calcAverageHumanAge = function (ages) {
  const humanAge = ages.map(function (age) {
    if (age <= 2) {
      return 2 * age;
    } else {
      return 16 + age * 4;
    }
  });
  const adultDogs = humanAge.filter(function (humAge) {
    return humAge >= 18;
  });
  const average = adultDogs.reduce(function (acc, adDog) {
    return acc + adDog;
  }, 0);

  return Math.round(average / adultDogs.length);
};
/* console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])); */

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach((element, index) => {
  dogs[index].recommendedFood = dogs[index].weight ** 0.75 * 28;
});

let okFood = function (current, recommended) {
  if (current > recommended * 0.9 && current < recommended * 1.1) {
    console.log(`Sarah's dog eats good`);
  } else if (current < recommended) {
    console.log(`Sarah's dog eats too little`);
  } else {
    console.log(`Sarah's dog eats too many`);
  }
};

let findSarahDog = function () {};

console.log(dogs);
let y = dogs[0];
if (y.owners.find(own => own === 'Bob')) {
  console.log(`fff`);
}

dogs.forEach((element, i) => {
  if (dogs.includes('Sarah')) {
    console.log(`fff`);
  }
});

/* Find Sarah's dog and log to the console whether it's eating too much or too 
little. Hint: Some dogs have multiple owners, so you first need to find Sarah in 
the owners array, and so this one is a bit tricky (on purpose) 🤓  */
