'use strict';

//Coding Challenge #1 


const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const avgDolhins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);
console.log(avgDolhins, avgKoalas);

function checkWinner(avgDolhins, avgKoalas) {
    if (avgDolhins >= avgKoalas * 2) {
        console.log(`Dolphins win (${avgDolhins} vs. ${avgKoalas})`)
    } else if (avgKoalas >= 2 * avgDolhins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`)
    }
    else {
        console.log(`We have no winner!`)
    }
}
checkWinner(avgDolhins, avgKoalas);
