//1st challenge
/* let markMass = 78;
let johnMass = 92;
let markHeight = 1.69;
let johnHeight = 1.95; */

let markMass = 95;
let johnMass = 85;
let markHeight = 1.88;
let johnHeight = 1.76;
const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;
const markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);
