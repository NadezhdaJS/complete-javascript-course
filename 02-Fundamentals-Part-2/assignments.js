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


/* const percentageOfWorldPoulation1 = percentageOfWorld1(145);
console.log(percentageOfWorldPoulation1); */
/* console.log(percentageOfWorld1(145));
console.log(percentageOfWorld1(900));
console.log(percentageOfWorld1(570)); */

/* const percentageOfWorld2 = function (population) {
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
    return `${country} has ${population} million people, which is about ${percentageOfWorldPeople}% of the world.`
}

console.log(describePopulation('Russia', 145));
console.log(describePopulation('India', 900));
console.log(describePopulation('Italy', 45)); */

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

/* let populations = [145, 10, 1441, 332, 'Russia', 'Portugal', 'China', 'USA'];
/* console.log(populations.length === 4); */
/* let percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
console.log(percentages); */
/* let percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
console.log(percentages); * / */
/* let neighbours = ['Netherlands', 'France', 'Luxemburg', 'Germany'];
neighbours.push('England');
console.log(neighbours);
neighbours.pop();
console.log(neighbours);
if (neighbours.includes('Germany')) {
    console.log(`It's a country in a centre of Europe`)
}
console.log(neighbours.indexOf('France'));
neighbours[1] = 'Australia';
console.log(neighbours); */

/* let myCountry = {
    country: 'Russia',
    population: 145,
    capitalCity: 'Moscow',
    language: 'Russian',
    neighbours: ['Ukraine', 'Belarus', 'Finland', 'China'],
    describe: function () {
        return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capitalCity}.`;

    }
}
console.log(myCountry.describe())

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capitalCity}.`) */


/* for (let voter = 1; voter <= 50; voter++) {
    console.log(`Voter number ${voter} is currently voting`)
} */

/* let percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])]; */
/* console.log(percentages); */


const perc = percentageOfWorld1(145);


function sum(a, b) {
    return a + b;
}

const sum1 = sum(1, 2); // 1 + 2
const sum2 = sum(2, 3); // 2 + 3
const sum3 = sum(4, 5); // 4 + 5

const newSum = function (a, b) {
    return a + b;
};

const newSum1 = newSum(1, 2); // 1 + 2
const newSum2 = newSum(2, 3); // 2 + 3

console.log(sum1); // 3
console.log(sum2); // 5


let populations = [145, 10, 1441, 332];
let percentages2 = [];

for (let i = 0; i < populations.length; i++) {
    // 1 круг:  populations[i] - 145

    const perc = percentageOfWorld1(populations[i]);
    percentages2.push(perc);

    // 3 способ
    // const perc1 = populations[i] / 7900 * 100;
    // percentages2.push(perc1);

    // 2 способ
    //percentages2.push(percentageOfWorld1(populations[i]));
}

function percentageOfWorld1(population) {
    return population / 7900 * 100;
}

console.log(percentages2);
/* console.log(percentages2 === percentages); */

let percentages3 = [];
let i = 0;
while (i < populations.length) {
    const perc = percentageOfWorld1(populations[i]);
    percentages3.push(perc);
    i++;
}
console.log(percentages3);

// 2
let listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia']
];

for (let index = 0; index < listOfNeighbours.length; index++) {
    const l = listOfNeighbours[index];

    if (l.length > 1) {

        for (let i = 0; i < l.length; i++) {
            const country = l[i];
            console.log(`Neighbour: ${country}`);
        }

    }


}

