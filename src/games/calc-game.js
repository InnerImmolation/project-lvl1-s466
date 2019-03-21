import { arRandom, getRandom } from '../utilits';
import game from '../core';

const min = 1; // min numder for random generator
const max = 30; // max number for random generator
const allOperands = ['+', '-', '*']; // array of operands
const description = 'What is the result of the expression?';

const gameGn = () => {
  const num1 = getRandom(min, max);
  const num2 = getRandom(min, max);
  const operand = arRandom(allOperands);
  const question = `${num1}${operand}${num2}`;
  let trueAnswer = 0;
  switch (operand) {
    case '+': trueAnswer = num1 + num2;
      break;
    case '-': trueAnswer = num1 - num2;
      break;
    case '*': trueAnswer = num1 * num2;
      break;
    default: break;
  }
  return [question, trueAnswer];
};
export default game(gameGn, description);
