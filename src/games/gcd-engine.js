import game from '../core';

const rules = 'Find the greatest common divisor of given numbers.';
const gameGn = () => {
  const min = 1; // min numder for random generator
  const max = 30; // max number for random generator
  const getRandom = () => Math.round(Math.random() * (max - min) + min);
  const num1 = getRandom();
  const num2 = getRandom();
  const nod = (n1, n2) => {
    const iter = (d1, d2, num) => {
      if ((n1 % num === 0) && (n2 % num === 0)) {
        return num;
      }
      return iter(d1, d2, num - 1);
    };
    return iter(n1, n2, n1 > n2 ? n1 : n2);
  };
  const question = `Question:${num1} ${num2}? `;
  const trueAnswer = nod(num1, num2);

  return [question, trueAnswer];
};
export default gameGn;
game(gameGn, rules);
