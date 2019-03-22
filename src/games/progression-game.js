import { getRandom } from '../utilits';
import game from '../core';

const min = 1; // min numder for random generator
const max = 30; // max number for random generator
const description = 'What number is missing in the progression?';
const sequenceGenerate = (first, length, step) => {
  const iter = (num, i, acc) => {
    if (i === 0) {
      return acc;
    }
    return iter(num + step, i - 1, acc.concat(num));
  };
  return iter(first, length, []);
};

const gameGn = () => {
  const sequenceLength = 10;
  const sequenceStep = getRandom(1, 5);
  const hideElement = getRandom(0, sequenceLength - 1);
  const startNumber = getRandom(min, max);

  const gameSequence = sequenceGenerate(startNumber, sequenceLength, sequenceStep);
  const hideSequence = gameSequence.slice(0);

  const trueAnswer = hideSequence.splice(hideElement, 1, '..');
  const question = hideSequence;


  return [question, trueAnswer];
};
export default () => game(gameGn, description);
