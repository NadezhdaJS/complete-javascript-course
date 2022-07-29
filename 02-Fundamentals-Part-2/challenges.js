'use strict';

//Coding Challenge #1


/* const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
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
checkWinner(avgDolhins, avgKoalas); */

//Coding Challenge #2
/*
let calcTip = function (bill) {
    let tip;
    if (bill >= 50 && bill <= 300) {
        tip = 0.15
    } else {
        tip = 0.2
    }
    return bill * tip
}

/* или
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  } */

/* console.log(calcTip(100));
let bills = [125, 555, 44];
let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
let total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
console.log(bills, tips, total) */

//Coding Challenge #3

/* let mark = {
    name: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        return this.mass / this.height ** 2
    }
}

let john = {
    name: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        return this.mass / this.height ** 2
    }
}

console.log(mark.calcBMI() > john.calcBMI() ? `Mark's BMI (${mark.calcBMI()}) is higher than John's (${john.calcBMI()})!` : `John's BMI (${john.calcBMI()}) is higher than Mark's (${mark.calcBMI()})!`) */