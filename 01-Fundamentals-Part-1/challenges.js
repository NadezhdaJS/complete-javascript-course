//1st challenge
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
}