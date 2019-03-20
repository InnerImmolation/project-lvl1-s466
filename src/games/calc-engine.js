import game from '../core';

const rules = 'What is the result of the expression?';
const gameGn = () => {
  const min = 1; // min numder for random generator
  const max = 30; // max number for random generator
  const operandArray = ['+', '-', '*']; // array of operands
  const randOperand = () => operandArray[Math.floor(Math.random() * operandArray.length)];
  const getRandom = () => Math.round(Math.random() * (max - min) + min);
  const num1 = getRandom();
  const num2 = getRandom();
  const operand = randOperand();
  const question = `Question:${num1}${operand}${num2}? `;
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
export default gameGn;
game(gameGn, rules);
