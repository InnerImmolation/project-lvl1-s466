import readlineSync from 'readline-sync';


const game = () => {
  console.log('Welcome to the Brain Games! \nAnswer "yes" if number even otherwise answer "no".');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  const finScores = 3;// scores need to win
  const min = 1; // min numder for random generator
  const max = 30; // max number for random generator
  const isEven = x => x % 2 === 0;
  const getRandom = () => Math.round(Math.random() * (max - min) + min);
  const iter = (scores) => {
    if (scores === finScores) {
      console.log(`Congratulations, ${name}!`);
      return '';
    }
    const num = getRandom();
    const answer = readlineSync.question(`Question:${num} `);
    if ((isEven(num) && answer === 'y') || (!isEven(num) && answer === 'n')) {
      console.log('Correct!');
      return iter(scores + 1);
    }
    const trueAnswer = isEven(num) ? 'y' : 'n';
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.\nLet's try again, ${name}!`);
    return '';
  };
  return iter(0);
};
export default game;
