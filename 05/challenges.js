'use strict';
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//Распаковываем имена игроков из объекта game
const {
  players: [players1, players2],
} = game;

console.log(players1);
console.log(players2);
//Вытащили из массива первого игрока -вратаря, остальные полевые игроки с помощью rest pattern
let [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
//Распаковали массивы обоих команд и получили всех 22 игроков
let allPlayers = [...players1, ...players2];
console.log(allPlayers);
//Добавили запасных игроков к первой команде
let players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);
//Распаковали шансы на победу. Заменили x на draw
let {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

//Пишем функцию, которая принимает любое число игроков (не массив)и выводит их имена и забитые голы в консоль. Число голов равно числу игроков
let printGoals = function (...playersNames) {
  console.log(...playersNames, playersNames.length);
};

printGoals(...game.scored);

/* The team with the lower odd is more likely to win. Print to the console which 
team is more likely to win, without using an if/else statement or the ternary 
operator.  */

//let winner = team2 < team1;
//console.log(winner);
//team1 < team2 ?? console.log(game.team2);
let winner =
  team1 < team2
    ? console.log(`${team1} is our winner!`)
    : console.log(`${team2} is our winner!`);
