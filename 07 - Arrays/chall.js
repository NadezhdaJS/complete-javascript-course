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
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
