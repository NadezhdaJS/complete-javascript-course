'use strict';
/* const country = 'Russia';
const population = 145;
const capitalCity = 'Moscow'; */
/* function describeCountry(country, population, capitalCity) {
    const descriptionCountry = `${country} has ${population} million people and its capital city is ${capitalCity}`
    return descriptionCountry
}
const textAboutCountry = describeCountry('Russia', 145, 'Moscow');
console.log(textAboutCountry);
const textAboutFinland = describeCountry('Finland', 224, 'Helsinki');
console.log(textAboutFinland);
const textAboutSpain = describeCountry('Spain', 56, 'Madrid');
console.log(textAboutSpain); */

function percentageOfWorld1(population) {
    return population / 7900 * 100
}
/* const percentageOfWorldPoulation1 = percentageOfWorld1(145);
console.log(percentageOfWorldPoulation1); */
console.log(percentageOfWorld1(145));
console.log(percentageOfWorld1(900));
console.log(percentageOfWorld1(570));

const percentageOfWorld2 = function (population) {
    return population / 7900 * 100
}

console.log(percentageOfWorld2(145));
console.log(percentageOfWorld2(900));
console.log(percentageOfWorld2(570));

const percentageOfWorld3 = population => population / 7900 * 100;
const percentageOfWorldPoulation3 = percentageOfWorld3(145);
console.log(percentageOfWorldPoulation3);

const describePopulation = function (country, population) {
    const percentageOfWorldPeople = percentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${percentageOfWorldPeople} of the world.`
}

console.log(describePopulation('Russia', 145));
console.log(describePopulation('India', 900));
console.log(describePopulation('Italy', 45));

//еще вариант
/* const describePopulation = function (country, population) { 
    const percentage = percentageOfWorld1(population); 
    const description = `${country} has ${population} million  
    people, which is about ${percentage}% of the world.`; 
    console.log(description); 
  }; 
 
  describePopulation('Portugal', 10); 
  describePopulation('China', 1441); 
  describePopulation('USA', 332); */