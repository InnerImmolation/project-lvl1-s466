import getRandom from '../utilits';
import game from '../core';


const findGcd = (n1, n2) => {
  if ((n1 === 0) || (n2 === 0)) {
    return n1 + n2;
  }
  return n1 > n2 ? findGcd(n1 % n2, n2) : findGcd(n1, n2 % n1);
};
const minRandomNumber = 1;
const maxRandomNumber = 30;
const description = 'Find the greatest common divisor of given numbers.';

const makeGameData = () => {
  const num1 = getRandom(minRandomNumber, maxRandomNumber);
  const num2 = getRandom(minRandomNumber, maxRandomNumber);
  const question = `${num1} ${num2}`;
  const trueAnswer = findGcd(num1, num2).toString();

  return [question, trueAnswer];
};
export default () => game(makeGameData, description);
