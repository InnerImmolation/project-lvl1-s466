import readlineSync from 'readline-sync';

const scoresToWin = 3;// scores need to win

const game = (gameGn, description) => {
  console.log(`Welcome to the Brain Games! \n${description}`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  const iter = (scores) => {
    const [question, trueAnswer] = gameGn();
    if (scores === scoresToWin) {
      console.log(`Congratulations, ${name}!`);
      return '';
    }
    const answer = readlineSync.question(question);
    if (answer === String(trueAnswer)) {
      console.log('Correct!');
      return iter(scores + 1);
    }
    return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.\nLet's try again, ${name}!`);
  };
  return iter(0);
};
export default game;
