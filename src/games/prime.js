import getRandom from '../utilits';
import game from '../core';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  const iter = (num, i) => {
    if (i <= Math.sqrt(num)) {
      if (num % i === 0) {
        return true;
      }
      return iter(num, i + 1);
    }
    return false;
  };
  return iter(number, 2);
};
const minRandomNumber = 1;
const maxRandomNumber = 1747;
const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const makeQuestion = () => {
  const num = getRandom(minRandomNumber, maxRandomNumber);
  const trueAnswer = isPrime(num) ? 'n' : 'y';

  return [num, trueAnswer];
};
export default () => game(makeQuestion, description);
