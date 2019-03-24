import { getRandom } from '../utilits';
import game from '../core';

const description = 'Answer "yes" if number even otherwise answer "no".';
const minRandomNumber = 1;
const maxRandomNumber = 30;
const isEven = x => x % 2 === 0;

const makeGameData = () => {
  const question = getRandom(minRandomNumber, maxRandomNumber);
  const trueAnswer = isEven(question) ? 'y' : 'n';
  return [question, trueAnswer];
};
export default () => game(makeGameData, description);
