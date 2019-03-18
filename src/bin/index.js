import readlineSync from '../../node_modules/readline-sync';
const hello = () => {
const name = readlineSync.question('May I have your name? ');
return console.log(`Hello ${name}`);
};
export default hello;
