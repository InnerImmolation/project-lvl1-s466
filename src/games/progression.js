import getRandom from '../utilits';
import game from '../core';

const minRandomNumber = 1;
const maxRandomNumber = 30;
const length = 10;
const description = 'What number is missing in the progression?';
const generate = (first, len, step) => {
  const iter = (num, i, acc) => {
    if (i === 0) {
      return acc;
    }
    return iter(num + step, i - 1, acc.concat(num));
  };
  return iter(first, len, []);
};

const makeQuestion = () => {
  const progressionStep = getRandom(1, 5);
  const hidePosition = getRandom(0, length - 1);
  const startNumber = getRandom(minRandomNumber, maxRandomNumber);
  const progression = generate(startNumber, length, progressionStep);
  const trueAnswer = progression[hidePosition].toString();
  progression[hidePosition] = '..';
  return [progression, trueAnswer];
};
export default () => game(makeQuestion, description);
