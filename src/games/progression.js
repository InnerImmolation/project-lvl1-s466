import getRandom from '../utilits';
import game from '../core';

const generateProgression = (first, length, step) => {
  const iter = (num, i, acc) => {
    if (i === 0) {
      return acc;
    }
    return iter(num + step, i - 1, acc.concat(num));
  };
  return iter(first, length, []);
};
const length = 10;
const minRandomNumber = 1;
const maxRandomNumber = 30;
const description = 'What number is missing in the progression?';

const makeGameData = () => {
  const step = getRandom(1, 5);
  const start = getRandom(minRandomNumber, maxRandomNumber);
  const question = generateProgression(start, length, step);
  const hidePosition = getRandom(0, question.length - 1);
  const trueAnswer = question[hidePosition].toString();
  question[hidePosition] = '..';
  return [question, trueAnswer];
};
export default () => game(makeGameData, description);
