'use strict';
/* const country = 'Russia';
const population = 145;
const capitalCity = 'Moscow'; */
function describeCountry(country, population, capitalCity) {
    const descriptionCountry = `${country} has ${population} million people and its capital city is ${capitalCity}`
    return descriptionCountry
}
const textAboutCountry = describeCountry('Russia', 145, 'Moscow');
console.log(textAboutCountry);
const textAboutFinland = describeCountry('Finland', 224, 'Helsinki');
console.log(textAboutFinland);
const textAboutSpain = describeCountry('Spain', 56, 'Madrid');
console.log(textAboutSpain);