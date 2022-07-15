/* let userName;
let myBF = 'Peter';
userName = 'Ron';
if (userName == myBF) {
    console.log('Hello, honey 😘')
} else {
    console.log('Hello')
} */

const continent = 'Eurasia';
const myCountry = 'Russia';
let population = 145478097;
const language = 'Russian';
console.log(population / 2);
population++;
let finlandPopulation = 6000000;
console.log(population > finlandPopulation);
let averagePopulation = 33000000;
console.log(population < averagePopulation);
//let description = myCountry + ' is in ' + continent + ', and its ' + population + ' people speak ' + language;
let description = `${myCountry} is in ${continent}, and its ${population} people speak ${language}`;
console.log(description);

if (population > 33000000) {
    console.log(`${myCountry}'s population is above average`)
} else {
    const newPopulation = averagePopulation - population;
    console.log(`${myCountry}'s population is ${newPopulation} below average`)
}


