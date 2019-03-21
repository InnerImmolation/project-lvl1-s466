import { getRandom, seqGen } from '../utilits';

const min = 1; // min numder for random generator
const max = 30; // max number for random generator
const description = 'What number is missing in the progression?';

const gameGn = () => {
  const seqLength = 9;
  const seqStep = getRandom(1, 5);
  const hideElement = getRandom(0, 9);
  const startNumber = getRandom(min, max);

  const gameSeq = seqGen(startNumber, seqLength, seqStep);
  const hideSeq = gameSeq.slice(0);

  const trueAnswer = hideSeq.splice(hideElement, 1, '..');
  const question = `Question:${hideSeq}? `;


  return [question, trueAnswer];
};
export { gameGn, description };
