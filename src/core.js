import readlineSync from 'readline-sync';

const totalRounds = 3;

const game = (makeQuestion, description) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  const iter = (roundCounter) => {
    const [question, trueAnswer] = makeQuestion();
    if (roundCounter === totalRounds) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const answer = readlineSync.question(`Question:${question} `);
    if (answer !== trueAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
    iter(roundCounter + 1);
  };
  return iter(0);
};
export default game;
