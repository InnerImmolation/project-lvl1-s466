import { getRandom } from '../utilits';
import game from '../core';

const description = 'Answer "yes" if number even otherwise answer "no".';
const min = 1; // min numder for random generator
const max = 30; // max number for random generator
const isEven = x => x % 2 === 0;

const gameGenerate = () => {
  const num = getRandom(min, max);
  const question = num;
  const trueAnswer = isEven(num) ? 'y' : 'n';
  return [question, trueAnswer];
};
export default () => game(gameGenerate, description);
