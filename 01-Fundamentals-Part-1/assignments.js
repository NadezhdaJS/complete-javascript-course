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
isIsland = false;
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

//
/* '9' - '5'; //4
'19' - '13' + '17'; //617
'19' - '13' + 17; //23
'123' < 57; //false
5 + 6 + '4' + 9 - 4 - 2;//1143 */

/* console.log('9' - '5');
console.log('19' - '13' + Number('17'));
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + Number('4') + 9 - 4 - 2);
 */

/* const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));
console.log(numNeighbours);
if (numNeighbours === 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1) {
    console.log('More than 1 border!')
}
else {
    console.log('No borders!')
}
 */

/* if (language === 'English' && population < 50000000 && !isIsland) {
    console.log(`You should live in ${myCountry}`)
}
else {
    console.log(`${myCountry} does not meet your criteria`)
}
 */

/* switch (language) {
    case 'Mandarin':
    case 'Chinese':
        console.log('MOST number of native speakers!')
        break;
    case 'Spanish':
        console.log('2nd place in number of native speakers')
        break;
    case 'English':
        console.log('3rd place')
        break;
    case 'Hindi':
        console.log('Number 4')
        break;
    case 'Arabic':
        console.log('5th most spoken language')
        break;
    default:
        console.log('Great language too :D');
        break;
} */

const isPopulation = population > 33000000 ? 'above' : 'below';
console.log(`${myCountry}'s population is ${isPopulation} average`);