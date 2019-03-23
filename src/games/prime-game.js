import { getRandom } from '../utilits';
import game from '../core';

const isSimple = (number) => {
  if (number <= 1) {
    return 'n';
  }
  const iter = (num, i) => {
    if (i <= Math.sqrt(num)) {
      if (num % i === 0) {
        return 'n';
      }
      return iter(num, i + 1);
    }
    return 'y';
  };
  return iter(number, 2);
};
const min = 1; // min numder for random generator
const max = 1747; // max number for random generator
const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const gameGenerate = () => {
  const num = getRandom(min, max);
  const question = `${num}`;
  const trueAnswer = isSimple(num);

  return [question, trueAnswer];
};
export default () => game(gameGenerate, description);
