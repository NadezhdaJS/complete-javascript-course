/* //1st challenge
let markMass = 95;
let johnMass = 85;
let markHeight = 1.88;
let johnHeight = 1.76;
const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;
const markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);

//Coding Challenge #2

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's! (${johnBMI})`)
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`)
} */

//Coding Challenge #3

/* const dolphins1Score = 96;
const dolphins2Score = 108;
const dolphins3Score = 89;
const dolphinsAverageScore = (dolphins1Score + dolphins2Score + dolphins3Score) / 3; */

/* const koalas1Score = 88;
const koalas2Score = 91;
const koalas3Score = 110;
const koalasAverageScore = (koalas1Score + koalas2Score + koalas3Score) / 3;

console.log(dolphinsAverageScore, koalasAverageScore);
if (dolphinsAverageScore > koalasAverageScore) {
    console.log('Dolphins is the winner!')
} else if (dolphinsAverageScore === koalasAverageScore) {
    console.log("It's a draw!")
} else {
    console.log('Koalas is the winner!')
} */

//1st bonus
/* const dolphins1Score = 97;
const dolphins2Score = 112;
const dolphins3Score = 101;
const dolphinsAverageScore = (dolphins1Score + dolphins2Score + dolphins3Score) / 3;

const koalas1Score = 109;
const koalas2Score = 95;
const koalas3Score = 123;
const koalasAverageScore = (koalas1Score + koalas2Score + koalas3Score) / 3;
const minimalScore = 100;

console.log(dolphinsAverageScore, koalasAverageScore);

if (dolphinsAverageScore < minimalScore && koalasAverageScore < minimalScore) {  //>= 100
    console.log('We have no winner!')
}
else if (dolphinsAverageScore === koalasAverageScore) {
    console.log("It's a draw!")
} else if (dolphinsAverageScore < koalasAverageScore) {
    console.log('Koalas is the winner!')
}
else if (dolphinsAverageScore > koalasAverageScore) {
    console.log('Dolphins is the winner!')
}
 */

//Coding Challenge #4
const bill = 10;
const tip = bill <= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value
    ${bill + tip}`);



