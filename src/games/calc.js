import getRandom from '../utilits';
import game from '../core';

const minRandomNumber = 1;
const maxRandomNumber = 30;
const operations = ['+', '-', '*'];
const description = 'What is the result of the expression?';
const calculate = (op) => {
  const func = {
    '+': (n1, n2) => n1 + n2,
    '-': (n1, n2) => n1 - n2,
    '*': (n1, n2) => n1 * n2,
  };
  return func[op];
};
const makeQuestion = () => {
  const num1 = getRandom(minRandomNumber, maxRandomNumber);
  const num2 = getRandom(minRandomNumber, maxRandomNumber);
  const operation = operations[getRandom(0, 2)];
  const question = `${num1}${operation}${num2}`;
  const trueAnswer = calculate(operation)(num1, num2).toString();

  return [question, trueAnswer];
};
export default () => game(makeQuestion, description);
