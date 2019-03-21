import { getRandom } from '../utilits';

const min = 1; // min numder for random generator
const max = 30; // max number for random generator
const description = 'Find the greatest common divisor of given numbers.';

const gameGn = () => {
  const num1 = getRandom(min, max);
  const num2 = getRandom(min, max);
  const nod = (n1, n2) => {
    if ((n1 === 0) || (n2 === 0)) {
      return n1 + n2;
    }
    return n1 > n2 ? nod(n1 % n2, n2) : nod(n1, n2 % n1);
  };
  const question = `Question:${num1} ${num2}? `;
  const trueAnswer = nod(num1, num2);

  return [question, trueAnswer];
};
export { gameGn, description };
