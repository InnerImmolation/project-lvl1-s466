import { getRandom } from '../utilits';
import game from '../core';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  const iter = (num, i) => {
    if (i <= Math.sqrt(num)) {
      if (num % i === 0) {
        return false;
      }
      return iter(num, i + 1);
    }
    return true;
  };
  return iter(number, 2);
};
const minRandomNumber = 1;
const maxRandomNumber = 1747;
const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const makeGameData = () => {
  const question = getRandom(minRandomNumber, maxRandomNumber);
  const trueAnswer = isPrime(question) ? 'y' : 'n';

  return [question, trueAnswer];
};
export default () => game(makeGameData, description);
