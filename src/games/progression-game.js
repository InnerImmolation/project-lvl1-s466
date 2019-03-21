import { getRandom } from '../utilits';
import game from '../core';

const min = 1; // min numder for random generator
const max = 30; // max number for random generator
const description = 'What number is missing in the progression?';
const sequenceGenerator = (first, length, step) => {
  const iter = (num, i, acc) => {
    if (i === 0) {
      return acc;
    }
    return iter(num + step, i - 1, acc.concat(num));
  };
  return iter(first, length, []);
};

const gameGn = () => {
  const seqLength = 10;
  const seqStep = getRandom(1, 5);
  const hideElement = getRandom(0, 9);
  const startNumber = getRandom(min, max);

  const gameSeq = sequenceGenerator(startNumber, seqLength, seqStep);
  const hideSeq = gameSeq.slice(0);

  const trueAnswer = hideSeq.splice(hideElement, 1, '..');
  const question = hideSeq;


  return [question, trueAnswer];
};
export default () => game(gameGn, description);
