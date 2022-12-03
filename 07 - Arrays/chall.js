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

/////////// Challenge 2////////////////

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
//2
dogs.forEach((element, index) => {
  if (dogs[index].owners.find(own => own === 'Sarah')) {
    dogs[index].curFood < dogs[index].recommendedFood
      ? console.log(`Sarah's dog eats too little`)
      : console.log(`Sarah's dog eats too many`);
  }
});
//3/
let ownersEatTooMuch = [];
let ownersEatTooLittle = [];
let eatOkFood = [];

dogs.forEach((element, index) => {
  if (
    dogs[index].curFood > dogs[index].recommendedFood * 0.9 &&
    dogs[index].curFood < dogs[index].recommendedFood * 1.1
  ) {
    console.log(true);
    eatOkFood.push(dogs[index].owners);
  } else if (dogs[index].recommendedFood === dogs[index].curFood) {
    console.log(true);
  } else if (dogs[index].curFood < dogs[index].recommendedFood) {
    ownersEatTooLittle.push(dogs[index].owners);
  } else {
    ownersEatTooMuch.push(dogs[index].owners);
  }
});
let eatTooLittle = ownersEatTooLittle.flat();
let eatTooMuch = ownersEatTooMuch.flat();
console.log(
  `${eatTooMuch[0]} and ${eatTooMuch[1]} and ${eatTooMuch[2]}'s dogs eat too much!" and "${eatTooLittle[0]} and ${eatTooLittle[1]}'s dogs eat too little!`
);
console.log(eatOkFood);

let dogsCopy = [...dogs];
console.log(
  dogsCopy.sort(function (a, b) {
    return a.recommendedFood - b.recommendedFood;
  })
);
console.log(dogsCopy);

/* if (
      dogs[index].curFood > dogs[index].recommendedFood * 0.9 &&
      dogs[index].curFood < dogs[index].recommendedFood * 1.1
    ) {
      console.log(`Sarah's dog eats good`);
    } else if (dogs[index].curFood < dogs[index].recommendedFood) {
      console.log(`Sarah's dog eats too little`);
    } else {
      console.log(`Sarah's dog eats too many`);
    } */
