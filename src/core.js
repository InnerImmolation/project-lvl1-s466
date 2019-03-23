import readlineSync from 'readline-sync';

const totalRounds = 3;// scores need to win

const game = (gameGenerate, description) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  const iter = (roundCounter) => {
    const [question, trueAnswer] = gameGenerate();
    if (roundCounter === totalRounds) {
      return console.log(`Congratulations, ${name}!`);
    }
    const answer = readlineSync.question(`Question:${question} `);
    if (answer === String(trueAnswer)) {
      console.log('Correct!');
      return iter(roundCounter + 1);
    }
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.`);
    return console.log(`Let's try again, ${name}!`);
  };
  return iter(0);
};
export default game;
