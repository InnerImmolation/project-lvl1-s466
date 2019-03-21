import { getRandom } from '../utilits';

const description = 'Answer "yes" if number even otherwise answer "no".';
const min = 1; // min numder for random generator
const max = 30; // max number for random generator
const isEven = x => x % 2 === 0;

const gameGn = () => {
  const num = getRandom(min, max);
  const question = `Question:${num} `;
  const trueAnswer = isEven(num) ? 'y' : 'n';
  return [question, trueAnswer];
};
export { gameGn, description };
