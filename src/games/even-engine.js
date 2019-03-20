import game from '../core';

const rules = 'Answer "yes" if number even otherwise answer "no".';

const gameGn = () => {
  const min = 1; // min numder for random generator
  const max = 30; // max number for random generator
  const isEven = x => x % 2 === 0;
  const getRandom = () => Math.round(Math.random() * (max - min) + min);
  const num = getRandom();
  const question = `Question:${num} `;
  const trueAnswer = isEven(num) ? 'y' : 'n';
  return [question, trueAnswer];
};
export default gameGn;
game(gameGn, rules);
