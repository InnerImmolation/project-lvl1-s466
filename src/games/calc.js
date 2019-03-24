import { getRandom, calculate } from '../utilits';
import game from '../core';

const minRandomNumber = 1;
const maxRandomNumber = 30;
const operators = ['+', '-', '*'];
const description = 'What is the result of the expression?';
const makeGameData = () => {
  const num1 = getRandom(minRandomNumber, maxRandomNumber);
  const num2 = getRandom(minRandomNumber, maxRandomNumber);
  const operation = operators[getRandom(0, operators.length - 1)];
  const question = `${num1}${operation}${num2}`;
  const trueAnswer = calculate(operation)(num1, num2).toString();

  return [question, trueAnswer];
};
export default () => game(makeGameData, description);
