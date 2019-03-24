import getRandom from '../utilits';
import game from '../core';

const description = 'Answer "yes" if number even otherwise answer "no".';
const minRandomNumber = 1;
const maxRandomNumber = 30;
const isEven = x => x % 2 === 0;

const makeQuestion = () => {
  const num = getRandom(minRandomNumber, maxRandomNumber);
  const question = num;
  const trueAnswer = isEven(num) ? 'y' : 'n';
  return [question, trueAnswer];
};
export default () => game(makeQuestion, description);
